/**
 * Auto-generated version information - DO NOT EDIT
 * Generated at build time by `tools/scripts/generate-version-info.ts`
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
  /** Whether this is a prerelease version (dev, alpha, beta, rc, etc.) */
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
 * ```typescript
 * import { VERSION_INFO } from './version.constant.js';
 *
 * console.log(`Running version ${VERSION_INFO.version}`);
 * console.log(`Built on ${new Date(VERSION_INFO.buildDate).toLocaleDateString()}`);
 *
 * if (VERSION_INFO.isPrerelease) {
 *   console.warn('This is a prerelease version');
 * }
 * ```
 */
export const VERSION_INFO: VersionInfo = Object.freeze({
  /** ISO 8601 timestamp of when this build was created */
  buildDate: '2025-08-10T21:09:03.320Z',
  /** Git branch name at build time */
  gitBranch: 'nx-monorepo',
  /** Short SHA of the Git commit */
  gitCommit: '3293396e',
  /** Most recent Git tag at build time */
  gitTag: 'v3.0.0-dev.110',
  /** Whether this is a prerelease version */
  isPrerelease: true,
  /** Version from package.json */
  packageVersion: '0.0.0',
  /** Full version string including Git information */
  version: 'v3.0.0-dev.110-4-g3293396e',
});
