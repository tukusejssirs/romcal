import { readdir, readFile, stat } from 'node:fs/promises';
import { dirname, relative, resolve } from 'node:path';

import inspectUrls from '@jsdevtools/rehype-url-inspector';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

const links = [];

/** @param path - Folder or file with absolute or relative path */
const checkLinks = async (path) => {
  const files = (await isDir(path)) ? await getMarkdownFiles(path) : [path];

  for (const file of files) {
    await processFile(file, path);
  }
};

const getMarkdownFiles = async (directory) => {
  const files = await readdir(directory, { withFileTypes: true });
  const markdownFiles = [];

  for (const file of files) {
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

const processFile = async (filePath, directory) => {
  const content = await readFile(filePath, 'utf8');
  const basePath = dirname(filePath);

  await unified()
    .use(remarkGfm)
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(inspectUrls, {
      inspectEach({ node, root, url }) {
        // Note: We ignore external URLs (HTTP/S).
        if (url.match(/^(?!https?:\/\/).+/)) {
          // Check internal anchor links within the same file
          if (url.startsWith('#')) {
            if (!root.children.some((i) => i.properties?.id === url.substring(1))) {
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
                  const pathStats = await stat(targetPath);
                  if (pathStats.isFile()) {
                    return targetPath;
                  } else {
                    // Path is a directory
                    return undefined;
                  }
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
    .use(rehypeStringify)
    .process(content);
};

const checkAnchorInFile = async ({ anchor, directory, filePath, originalUrl, position, sourceFile }) => {
  const content = await readFile(filePath, 'utf8');
  const u = await unified().use(remarkGfm).use(remarkParse).use(remarkRehype).use(rehypeSlug).use(rehypeStringify);
  const result = await u.run(u.parse(content));

  const anchorExists = result.children?.some((i) => i.properties?.id === anchor);

  if (!anchorExists) {
    logBrokenLink({
      directory,
      filePath: sourceFile,
      position,
      url: originalUrl,
    });
  }
};

const logBrokenLink = ({ directory, filePath, position, url }) => {
  const { line, column } = position;
  links.push(`${directory}/${relative(directory, filePath)}:${line}:${column} - ${url}`);
};

const isDir = async (inputPath) => {
  try {
    const stats = await stat(inputPath);
    return stats.isDirectory();
  } catch {
    return false;
  }
};

checkLinks(process.argv[2] || '.')
  .then(() => {
    if (links.length) {
      console.error(`Found ${links.length} broken links:`);
      links.forEach((link) => console.info(link));
      process.exit(1);
    } else {
      console.info('No broken links found.');
      process.exit(0);
    }
  })
  .catch((e) => {
    console.error(e);
  });
