import { UserConfig, RuleConfigSeverity } from '@commitlint/types';

// TODO: Revert these bypassed imports when rites are migrated to libs/calendars
// import { CALENDAR_IDS } from './rites/roman1969/src/constants/calendars';
// import { LOCALE_IDS } from './rites/roman1969/src/constants/locales';

// Temporary bypassed constants - will be restored when rites migration is complete
const CALENDAR_IDS = ['roman1969', 'roman1962'];
const LOCALE_IDS = ['en', 'cs', 'de', 'es', 'fr', 'it', 'la', 'pl', 'pt-br', 'sk', 'ta'];

const empty = [null];
const scopes = [...CALENDAR_IDS, ...LOCALE_IDS, 'calendar', 'l10n', 'util', 'package'];
const styleScopes = ['claude_ai', 'commitlint', 'editorconfig', 'eslint', 'prettier'];

const typesEnumScoped = {
  // Other commits which do not match the scope of other Commitlint types
  chore: empty,
  // Updates to the automation or release process
  ci: empty,
  // Changes to build scripts
  build: empty,
  // Documentation only changes
  docs: empty,
  // Features, new functionality
  feat: scopes,
  // Enhancing existing functionality
  enh: scopes,
  // Bug fixes
  fix: scopes,
  // Refactoring, no behavior changes
  refactor: scopes,
  // Performance improvements
  perf: scopes,
  // Add or correct tests
  test: scopes,
  // Changes that affect style, linting, formatting and grammar
  style: [...scopes, ...styleScopes],
};

// eslint-disable-next-line import/no-default-export
export default {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  helpUrl: 'https://github.com/romcal/romcal/blob/dev/docs/contribute-to-romcal.md#committing-changes',
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['#'],
    },
  },
  plugins: ['selective-scope'],
  rules: {
    'body-max-line-length': [RuleConfigSeverity.Disabled] as const,
    'header-max-length': [RuleConfigSeverity.Disabled] as const,
    'scope-enum': [
      2,
      'always',
      // From `commitlint` point of view, allow all scopes regardless of the type
      [...scopes, ...styleScopes],
    ],
    // Use `selective-scope` to make sure that the scopes are only allowed when they are defined for a particular type
    'selective-scope': [2, 'always', typesEnumScoped],
    'type-enum': [2, 'always', Object.keys(typesEnumScoped)],
  },
} as UserConfig;
