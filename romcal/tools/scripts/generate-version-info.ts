#!/usr/bin/env tsx

import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Generate a version information file for a project
 * @param projectPath - Path to the project relative to workspace root (e.g., "apps/docs")
 */
function generateVersionInfo(projectPath: string): void {
  try {
    const workspaceRoot = join(__dirname, '../..');
    const packageJsonPath = join(workspaceRoot, 'package.json');

    // Read the version from `package.json`
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
        gitTag = execSync('git describe --abbrev=0 --tags', {
          cwd: workspaceRoot,
          encoding: 'utf8',
        }).trim();
      } catch {
        // No tags available
      }

      // Get full git describe output (includes commits since tag)
      // Use `--tags` to include lightweight tags, not just annotated ones
      try {
        gitDescribe = execSync('git describe --always --tags', {
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
    // Use `git describe` if available, otherwise package version and commit
    const version = gitDescribe || `${packageVersion}-${gitCommit}`;

    // Check if this is a prerelease version
    const isPrerelease = gitTag === '' || gitTag.includes('-');

    // Determine the output path
    const outputDir = join(workspaceRoot, projectPath, 'src');
    const outputPath = join(outputDir, 'version.constant.ts');

    // Helper function to escape string values for template literal
    const formatValue = (value: any): string => {
      if (typeof value === 'string') {
        return `'${value.replace(/'/g, "\\'")}'`;
      }
      return String(value);
    };

    // Generate TypeScript content
    const content = `/**
 * Auto-generated version information - DO NOT EDIT
 * Generated at build time by \`tools/scripts/generate-version-info.ts\`
 */

export interface VersionInfo {
  /** ISO 8601 timestamp of when this build was created */
  buildDate: string;
  /** Git branch name at build time */
  gitBranch: string;
  /** Short SHA of the Git commit */
  gitCommit: string;
  /** Most recent Git tag at build time */
  gitTag: string;
  /** Whether this is a prerelease version (\`dev\`, \`alpha\`, \`beta\`, \`rc\`, etc.) */
  isPrerelease: boolean;
  /** Version from package.json */
  packageVersion: string;
  /** Full version string including Git information */
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
export const VERSION_INFO: VersionInfo = Object.freeze({
  /** ISO 8601 timestamp of when this build was created */
  buildDate: ${formatValue(buildDate)},
  /** Git branch name at build time */
  gitBranch: ${formatValue(gitBranch)},
  /** Short SHA of the Git commit */
  gitCommit: ${formatValue(gitCommit)},
  /** Most recent Git tag at build time */
  gitTag: ${formatValue(gitTag)},
  /** Whether this is a prerelease version */
  isPrerelease: ${isPrerelease},
  /** Version from \`package.json\` */
  packageVersion: ${formatValue(packageVersion)},
  /** Full version string including Git information */
  version: ${formatValue(version)},
});
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
