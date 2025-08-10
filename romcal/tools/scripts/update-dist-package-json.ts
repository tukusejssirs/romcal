#!/usr/bin/env tsx

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Exit codes used by the script
 */
const EXIT_CODE = {
  /** Cannot read the generated `package.json` */
  CANNOT_ACCESS_DIST_PACKAGE_JSON: 2,
  /** Failed to read the project configuration */
  CANNOT_READ_PROJECT_CONFIG: 4,
  /** Failed to read the workspace package.json */
  CANNOT_READ_WORKSPACE_PACKAGE_JSON: 3,
  /** Script completed successfully */
  SUCCESS: 0,
  /** An unknown error occurred */
  UNKNOWN_ERROR: 1,
} as const;

// Get the repo root directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const repoRoot = join(__dirname, '..', '..');

/**
 * Properties to copy from the workspace `package.json`
 */
const WORKSPACE_PROPERTIES = [
  'author',
  'bugs',
  'contributors',
  'homepage',
  'keywords',
  'license',
  'maintainers',
  'os',
  'private',
  'repository',
  'version',
] as const;

/**
 * Sort object properties alphabetically
 * @param obj - The object to sort
 * @returns A new object with sorted properties
 */
function sortObjectProperties(obj: unknown): unknown {
  if (obj === null || obj === undefined) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(sortObjectProperties);
  }

  if (typeof obj === 'object') {
    const record = obj as Record<string, unknown>;
    return Object.keys(record)
      .sort()
      .reduce<Record<string, unknown>>((sorted, key) => {
        sorted[key] = sortObjectProperties(record[key]);
        return sorted;
      }, {});
  }

  return obj;
}

/**
 * Update the generated `package.json` with properties from workspace and project config
 */
class DistPackageUpdater {
  /**
   * Create a new DistPackageUpdater instance
   * @param projectName - The name of the project to update
   * @param projectPath - Path to the project (e.g., "apps/my-app" or "libs/my-lib")
   */
  constructor(
    private readonly projectName: string,
    private readonly projectPath: string
  ) {}

  /**
   * Read and parse a JSON file as package.json
   * @param filePath - Path to the JSON file
   * @returns Parsed JSON content
   * @throws Error if the file cannot be read or parsed
   */
  #readPackageJsonFile(filePath: string): any {
    try {
      const content = readFileSync(filePath, 'utf-8');
      return JSON.parse(content);
    } catch (e) {
      throw new Error(`Failed to read or parse ${filePath}: ${e}`);
    }
  }

  /**
   * Read and parse a JSON file
   * @param filePath - Path to the JSON file
   * @returns Parsed JSON content
   * @throws Error if the file cannot be read or parsed
   */
  #readJsonFile(filePath: string): Record<string, unknown> {
    try {
      const content = readFileSync(filePath, 'utf-8');
      return JSON.parse(content) as Record<string, unknown>;
    } catch (e) {
      throw new Error(`Failed to read or parse ${filePath}: ${e}`);
    }
  }

  /**
   * Create a basic package.json file for bundled applications
   * Since Rollup inlines all internal libraries, we don't need to copy them
   */
  async #createBundledPackageJson(distPath: string): Promise<void> {
    // For bundled applications (using Rollup), we create a minimal package.json
    const packageJsonPath = join(distPath, 'package.json');

    // Read workspace package.json to get properties
    const workspacePackageJson = this.#readPackageJsonFile(join(repoRoot, 'package.json'));

    // Create minimal package.json for bundled application
    const packageJson = {
      author: workspacePackageJson.author,
      license: workspacePackageJson.license,
      main: 'main.js',
      name: `@romcal/${this.projectName}`,
      private: true,
      repository: workspacePackageJson.repository,
      type: 'module',
      version: workspacePackageJson.version,
    };

    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log(`Created minimal package.json for bundled application: ${packageJsonPath}`);
  }

  /**
   * Update the generated `package.json` file
   */
  async updatePackageJson(): Promise<void> {
    // Use the provided project path structure for `dist`
    const distPath = join(repoRoot, 'dist', this.projectPath);
    const distPackageJsonPath = join(distPath, 'package.json');
    const bundledMainFile = join(distPath, 'main.js');

    // Check if this is a bundled application (Rollup creates main.js)
    if (existsSync(bundledMainFile)) {
      console.log('Detected bundled application (main.js exists), creating bundled package.json');
      await this.#createBundledPackageJson(distPath);
      return;
    }

    // Check if the generated `package.json` exists for non-bundled apps
    if (!existsSync(distPackageJsonPath)) {
      console.error(`Cannot find the generated \`package.json\` at ${distPackageJsonPath}`);
      process.exit(EXIT_CODE.CANNOT_ACCESS_DIST_PACKAGE_JSON);
    }

    // Read workspace `package.json`
    const workspacePackageJsonPath = join(repoRoot, 'package.json');
    let workspacePackageJson: any;

    try {
      workspacePackageJson = this.#readPackageJsonFile(workspacePackageJsonPath);
    } catch (e) {
      console.error(`Failed to read workspace package.json: ${e}`);
      process.exit(EXIT_CODE.CANNOT_READ_WORKSPACE_PACKAGE_JSON);
    }

    // Read the generated `package.json`
    let distPackageJson: any;

    try {
      distPackageJson = this.#readPackageJsonFile(distPackageJsonPath);
    } catch (e) {
      console.error(`Failed to read the generated \`package.json\`: ${e}`);
      process.exit(EXIT_CODE.CANNOT_ACCESS_DIST_PACKAGE_JSON);
    }

    // Read `project.json` if it exists (at the project path)
    const projectJsonPath = join(repoRoot, this.projectPath, 'project.json');
    let projectJson: Record<string, unknown> = {};

    if (existsSync(projectJsonPath)) {
      try {
        projectJson = this.#readJsonFile(projectJsonPath);
      } catch (e) {
        console.warn(`Failed to read \`project.json\`: ${e}`);
      }
    }

    // Update name to @romcal/projectName
    const projectNameFromJson = projectJson.name || this.projectName;
    distPackageJson.name = `@romcal/${projectNameFromJson}`;

    // Copy properties from workspace package.json
    for (const prop of WORKSPACE_PROPERTIES) {
      const workspacePackageJsonRecord = workspacePackageJson as Record<string, unknown>;
      const distPackageJsonRecord = distPackageJson as Record<string, unknown>;
      if (workspacePackageJsonRecord[prop] !== undefined) {
        distPackageJsonRecord[prop] = workspacePackageJsonRecord[prop];
      }
    }

    // Copy the description from `project.json` if available
    if (typeof projectJson.description === 'string') {
      distPackageJson.description = projectJson.description;
    }

    // Set module type to ESM for Node16 compatibility
    distPackageJson.type = 'module';

    // Sort and write the updated package.json
    const sortedPackageJson = sortObjectProperties(distPackageJson as Record<string, unknown>);

    writeFileSync(distPackageJsonPath, `${JSON.stringify(sortedPackageJson, null, '\t')}\n`, 'utf-8');

    console.log(`Updated ${distPackageJsonPath}`);
    console.log(`Successfully completed package.json update for ${this.projectName}`);
  }
}

/**
 * Main entry point
 */
async function main(): Promise<void> {
  // Get a project path from the command line argument or environment variable
  const projectPath = process.argv[2] || process.env.NX_TASK_TARGET_PROJECT;

  if (!projectPath) {
    console.error('Project path is required as first argument or via NX_TASK_TARGET_PROJECT env var');
    process.exit(EXIT_CODE.UNKNOWN_ERROR);
  }

  // Extract the project name from the path
  const projectName = projectPath.split('/').pop() || projectPath;

  console.log(`Updating the generated \`package.json\` for project: ${projectName} at ${projectPath}`);

  try {
    // Create updater and run
    const updater = new DistPackageUpdater(projectName, projectPath);
    await updater.updatePackageJson();

    process.exit(EXIT_CODE.SUCCESS);
  } catch (e) {
    console.error('An unexpected error occurred', e);
    process.exit(EXIT_CODE.UNKNOWN_ERROR);
  }
}

// Run the script
main().catch((e) => {
  console.error('Unhandled error', e);
  process.exit(EXIT_CODE.UNKNOWN_ERROR);
});
