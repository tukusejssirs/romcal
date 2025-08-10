import { existsSync } from 'node:fs';
import { readdir, readFile, stat } from 'node:fs/promises';
import { dirname, relative, resolve } from 'node:path';

import inspectUrls from '@jsdevtools/rehype-url-inspector';
import slug from 'rehype-slug';
import stringify from 'rehype-stringify';
import gfm from 'remark-gfm';
import parse from 'remark-parse';
import rehype from 'remark-rehype';
import { unified } from 'unified';

const links: string[] = [];

const getMarkdownFiles = async (directory: string): Promise<string[]> => {
  if (!existsSync(directory)) {
    console.warn(`⚠️  Directory ${directory} does not exist. Skipping...`);
    return [];
  }

  const files = await readdir(directory, { withFileTypes: true });
  const markdownFiles: string[] = [];

  for await (const file of files) {
    const fullPath = resolve(directory, file.name);

    if (file.isDirectory()) {
      const nestedFiles = await getMarkdownFiles(fullPath);
      markdownFiles.push(...nestedFiles);
    } else if (file.isFile() && file.name.endsWith('.md')) {
      markdownFiles.push(fullPath);
    }
  }

  return markdownFiles;
};

const logBrokenLink = ({
  directory,
  filePath,
  position,
  url,
}: {
  directory: string;
  filePath: string;
  position: { line: number; column: number };
  url: string;
}): void => {
  const { line, column } = position;
  links.push(`${directory}/${relative(directory, filePath)}:${line}:${column} - ${url}`);
};

const checkAnchorInFile = async ({
  anchor,
  directory,
  filePath,
  originalUrl,
  position,
  sourceFile,
}: {
  anchor: string;
  directory: string;
  filePath: string;
  originalUrl: string;
  position: { line: number; column: number };
  sourceFile: string;
}): Promise<void> => {
  if (!existsSync(filePath)) {
    console.warn(`⚠️  File ${filePath} does not exist. Skipping anchor check...`);
    return;
  }

  const content = await readFile(filePath, 'utf8');
  const u = await unified().use(gfm).use(parse).use(rehype).use(slug).use(stringify);
  const result = (await u.run(u.parse(content))) as any;

  const anchorExists = result.children.some((i: any) => i.properties?.id === anchor);

  if (!anchorExists) {
    logBrokenLink({
      directory,
      filePath: sourceFile,
      position,
      url: originalUrl,
    });
  }
};

const processFile = async (filePath: string, directory: string): Promise<void> => {
  if (!existsSync(filePath)) {
    console.warn(`⚠️  File ${filePath} does not exist. Skipping...`);
    return;
  }

  const content = await readFile(filePath, 'utf8');
  const basePath = dirname(filePath);

  await unified()
    .use(gfm)
    .use(parse)
    .use(rehype)
    .use(slug)
    .use(inspectUrls, {
      inspectEach({ node, root, url }: any) {
        // Note: We ignore external URLs (HTTP/S).
        if (url.match(/^(?!https?:\/\/).+/)) {
          // Check internal anchor links within the same file
          if (url.startsWith('#')) {
            if (!root.children.some((i: any) => i.properties?.id === url.substring(1))) {
              logBrokenLink({
                directory,
                filePath,
                position: node.position.start,
                url,
              });
            }
          } else {
            // Check relative links (with or without anchor)
            const [relativePath, anchor] = url.split('#');

            // Check paths with and without `.md` extension
            // Note: Markdown files are usually referenced without the extension, other files require the extension specification.
            const targetPaths = [resolve(basePath, relativePath), resolve(basePath, `${relativePath}.md`)];

            Promise.all(
              targetPaths.map(async (targetPath) => {
                try {
                  if (!existsSync(targetPath)) {
                    return undefined;
                  }
                  const pathStats = await stat(targetPath);
                  if (pathStats.isFile()) {
                    return targetPath;
                  }
                  // Path is a directory
                  return undefined;
                } catch {
                  // Path does not exist
                  return undefined;
                }
              })
            )
              .then((resolvedPaths) => {
                const existingPath = resolvedPaths.find((p) => !!p);

                if (existingPath && anchor) {
                  checkAnchorInFile({
                    anchor,
                    directory,
                    filePath: existingPath,
                    originalUrl: url,
                    position: node.position.start,
                    sourceFile: filePath,
                  });
                } else if (!existingPath) {
                  logBrokenLink({
                    directory,
                    filePath,
                    position: node.position.start,
                    url,
                  });
                }
              })
              .catch(() => {
                logBrokenLink({
                  directory,
                  filePath,
                  position: node.position.start,
                  url,
                });
              });
          }
        }
      },
    })
    .use(stringify)
    .process(content);
};

const isDir = async (inputPath: string): Promise<boolean> => {
  try {
    if (!existsSync(inputPath)) {
      return false;
    }
    const stats = await stat(inputPath);
    return stats.isDirectory();
  } catch {
    return false;
  }
};

/** @param path - Folder or file with absolute or relative path */
const checkLinks = async (path: string): Promise<void> => {
  if (!existsSync(path)) {
    console.warn(`⚠️  Path ${path} does not exist. Skipping...`);
    return;
  }

  const files = (await isDir(path)) ? await getMarkdownFiles(path) : [path];

  if (files.length === 0) {
    console.warn(`⚠️  No markdown files found in ${path}`);
    return;
  }

  for (const file of files) {
    console.info(`Checking links in ${file}`);
    await processFile(file, path);
  }
};

// Use the docs app directory as default, or accept path as argument
const docsPath = process.argv[2] || 'apps/docs/src';

checkLinks(docsPath)
  .then(() => {
    if (links.length) {
      console.error(`Found ${links.length} broken links:`);
      links.forEach((link) => console.info(link));
      process.exit(1);
    } else {
      console.info('✅ No broken links found.');
      process.exit(0);
    }
  })
  .catch((e) => {
    console.error('❌ Error checking links:', e);
    process.exit(1);
  });
