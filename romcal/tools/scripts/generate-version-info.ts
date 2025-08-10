#!/usr/bin/env tsx

import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Generate version information file for a project
 * @param projectPath - Path to the project relative to workspace root (e.g., "apps/docs")
 */
function generateVersionInfo(projectPath: string): void {
  try {
    const workspaceRoot = join(__dirname, '../..');
    const packageJsonPath = join(workspaceRoot, 'package.json');

    // Read version from package.json
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    const packageVersion = packageJson.version || '0.0.0';

    // Get git commit info
    let gitCommit = 'unknown';
    let gitBranch = 'unknown';
    let gitTag = '';
    let gitDescribe = '';

    try {
      gitCommit = execSync('git rev-parse --short HEAD', {
        cwd: workspaceRoot,
        encoding: 'utf8',
      }).trim();

      gitBranch = execSync('git rev-parse --abbrev-ref HEAD', {
        cwd: workspaceRoot,
        encoding: 'utf8',
      }).trim();

      // Try to get the most recent tag
      try {
        gitTag = execSync('git describe --tags --abbrev=0', {
          cwd: workspaceRoot,
          encoding: 'utf8',
        }).trim();
      } catch {
        // No tags available
      }

      // Get full git describe output (includes commits since tag)
      try {
        gitDescribe = execSync('git describe --always', {
          cwd: workspaceRoot,
          encoding: 'utf8',
        }).trim();
      } catch {
        // Fallback to commit only
        gitDescribe = gitCommit;
      }
    } catch (e: any) {
      console.warn('Git information not available:', e.message);
    }

    // Build timestamp
    const buildDate = new Date().toISOString();

    // Construct version string
    // Use git describe if available, otherwise package version + commit
    const version = gitDescribe || `${packageVersion}-${gitCommit}`;

    // Check if this is a prerelease version
    const isPrerelease = gitTag === '' || gitTag.includes('-');

    // Create version info object with alphabetically sorted properties
    const versionInfo = {
      buildDate,
      gitBranch,
      gitCommit,
      gitTag,
      isPrerelease,
      packageVersion,
      version,
    };

    // Determine the output path
    const outputDir = join(workspaceRoot, projectPath, 'src');
    const outputPath = join(outputDir, 'version.constant.ts');

    // Generate TypeScript content
    const content = `/**
 * Auto-generated version information - DO NOT EDIT
 * Generated at build time by \`tools/scripts/generate-version-info.ts\`
 */

export interface VersionInfo {
  buildDate: string;
  gitBranch: string;
  gitCommit: string;
  gitTag: string;
  isPrerelease: boolean;
  packageVersion: string;
  version: string;
}

/**
 * Version information embedded at build time
 *
 * @example
 *
 * \`\`\`typescript
 * import { VERSION_INFO } from './version.constant.js';
 *
 * console.log(\`Running version \${VERSION_INFO.version}\`);
 * console.log(\`Built on \${new Date(VERSION_INFO.buildDate).toLocaleDateString()}\`);
 *
 * if (VERSION_INFO.isPrerelease) {
 *   console.warn('This is a prerelease version');
 * }
 * \`\`\`
 */
export const VERSION_INFO: VersionInfo = Object.freeze(${JSON.stringify(versionInfo, null, '\t')});
`;

    // Write the file
    writeFileSync(outputPath, content, 'utf8');

    console.log(`✅ Version info generated for ${projectPath}: ${version}`);
    console.log(`   Package version: ${packageVersion}`);
    console.log(`   Git commit: ${gitCommit}`);
    console.log(`   Git branch: ${gitBranch}`);
    console.log(`   Git tag: ${gitTag || 'none'}`);
    console.log(`   Output: ${outputPath}`);
  } catch (e: any) {
    console.error(`Failed to generate version info for ${projectPath}:`, e.message);
    process.exit(1);
  }
}

// Get project path from command line argument
const projectPath = process.argv[2];

if (!projectPath) {
  console.error('Usage: tsx generate-version-info.ts <project-path>');
  console.error('   Example: tsx generate-version-info.ts apps/docs');
  process.exit(1);
}

generateVersionInfo(projectPath);
