import { readFile, writeFile, existsSync } from 'node:fs';
import { resolve } from 'node:path';

import c from 'chalk';
import { diffTrimmedLines } from 'diff';
import { remark } from 'remark';
import gfm from 'remark-gfm';
import parse from 'remark-parse';
import stringify from 'remark-stringify';

const isCI = process.env.CI === 'true';

// Check for glossary.md in the docs app
const possibleGlossaryPaths = [
  'apps/docs/src/glossary.md',
  'apps/docs/src/guide/glossary.md',
  'apps/docs/src/api/glossary.md',
];

const findGlossaryFile = (): string | null => {
  for (const path of possibleGlossaryPaths) {
    const fullPath = resolve(path);
    if (existsSync(fullPath)) {
      return fullPath;
    }
  }
  return null;
};

/** Sort second-level headings alphabetically */
const sortHeadings = (tree: any): void => {
  const sortedHeadings: { heading: any; content: any[] }[] = [];
  let currentHeading: { heading: any; content: any[] } | null = null;

  const top = {
    heading: undefined as any,
    content: [] as any[],
  };

  tree.children.every((node: any) => {
    if (node.type === 'heading' && node.depth === 1) {
      top.heading = node;
      return true;
    }
    if (node.type === 'heading' && node.depth !== 1) {
      return false;
    }
    top.content.push(node);
    return true;
  });

  tree.children.forEach((node: any) => {
    if (node.type === 'heading' && node.depth === 2) {
      if (currentHeading) {
        sortedHeadings.push(currentHeading);
      }
      currentHeading = {
        heading: node,
        content: [],
      };
    } else if (currentHeading) {
      currentHeading.content.push(node);
    }
  });

  if (currentHeading) {
    sortedHeadings.push(currentHeading);
  }

  sortedHeadings.sort((a, b) => {
    const headingA = a.heading.children.map((child: any) => child.value).join('');
    const headingB = b.heading.children.map((child: any) => child.value).join('');
    return headingA.localeCompare(headingB);
  });

  const newChildren: any[] = [];
  sortedHeadings.forEach((section) => {
    newChildren.push(section.heading);
    section.content.forEach((node) => {
      newChildren.push(node);
    });
  });

  // replay all the top body backwards on top of the children array
  top.content.reverse().forEach((node) => {
    newChildren.unshift(node);
  });
  if (top.heading) {
    newChildren.unshift(top.heading);
  }

  tree.children = newChildren;
};

/** Read, sort and write the Markdown file */
const processFile = (file: string): void => {
  if (!existsSync(file)) {
    console.warn(`⚠️  Glossary file ${file} does not exist. Skipping...`);
    process.exit(0);
  }

  console.info(`Sorting glossary items in ${file}`);
  readFile(file, 'utf8', (readError, data) => {
    if (readError) {
      console.error('❌ Error reading glossary file:', readError);
      process.exit(1);
    }

    remark()
      .use(parse)
      .use(gfm)
      .use(() => sortHeadings)
      .use(stringify, {
        bullet: '-',
        fence: '`',
        fences: true,
        incrementListMarker: false,
        listItemIndent: 'one',
        emphasis: '_',
      })
      .process(data, (processError, vfile) => {
        if (processError) {
          console.error('❌ Error processing glossary:', processError);
          process.exit(1);
        }

        const updatedFile = String(vfile).replace(/^> \\\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)][ \t]*$/gm, '> [!$1]');

        if (isCI) {
          const diff = diffTrimmedLines(data, updatedFile).filter((part) => part.removed || part.added);

          if (diff.length) {
            console.error('❌ Glossary items are not sorted. Please run `npx nx run glossary:sort` (locally).');

            diff.forEach((part) => {
              // green for additions, red for deletions
              const text = part.added ? c.bgGreen(part.value) : part.removed ? c.bgRed(part.value) : undefined;
              if (text) process.stderr.write(text);
            });

            process.exit(1);
          }

          console.info('✅ Glossary items are sorted.');
          process.exit(0);
        }

        writeFile(file, updatedFile, 'utf8', (writeError) => {
          if (writeError) {
            console.error('❌ Error writing glossary file:', writeError);
            process.exit(1);
          }

          console.log('✅ Glossary items are sorted successfully.');
          process.exit(0);
        });
      });
  });
};

// Find glossary file or use provided argument
const glossaryFile = process.argv[2] || findGlossaryFile();

if (!glossaryFile) {
  console.warn('⚠️  No glossary.md file found in the docs app. Skipping...');
  process.exit(0);
}

processFile(glossaryFile);
