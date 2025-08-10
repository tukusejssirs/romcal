import nx from '@nx/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// eslint-disable-next-line import/no-default-export
export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      '**/node_modules',
      '**/dist',
      '**/coverage',
      '**/tmp',
      '**/__snapshots__',
      '**/*.json',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
      '**/.vitepress/cache/**',
      '**/.vitepress/dist/**',
      '**/.vitepress/theme/**',
      '**/.vitepress/config.mts',
    ],
  },
  {
    plugins: {
      'unused-imports': unusedImports,
      import: importPlugin,
    },

    languageOptions: {
      globals: {
        ...Object.fromEntries(Object.entries(globals.browser).map(([key]) => [key, 'off'])),
        ...globals.node,
      },
      ecmaVersion: 2022,
      sourceType: 'module',
    },

    rules: {
      'max-len': 'off',
      'no-mixed-spaces-and-tabs': 'off',
      'keyword-spacing': 'off',
      'comma-style': 'off',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-unused-modules': 'error',
      'import/no-default-export': 'error',

      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',

          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/__tests__/**/*',
            '**/tools/**/*',
            '.commitlintrc.ts',
            '**/vite.config.ts',
            '**/.vitepress/**/*',
            'eslint.config.mjs',
            'eslint.workspace.config.mjs',
          ],
        },
      ],

      'import/prefer-default-export': 'off',
      'import/no-cycle': 'off',
      'no-console': 'error',
      'object-shorthand': 'error',
      'unused-imports/no-unused-imports': 'error',
      'no-return-assign': ['error', 'except-parens'],
      'no-await-in-loop': 'off',
    },
  },
  ...tseslint.config({
    extends: [tseslint.configs.recommended],
    files: ['**/__tests__/**/*.ts', '**/*.spec.ts'],
    plugins: {
      jest,
    },
    languageOptions: {
      globals: jest.environments.globals.globals,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: ['./tsconfig.base.json', './libs/*/tsconfig.json', './apps/*/tsconfig.json'],
      },
    },
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',

      // tests don't export
      'import/no-unused-modules': 'off',

      // do not complain about importing dist localized calendars
      'import/no-relative-packages': 'off',
      'jest/no-conditional-expect': 'off',
      'no-console': 'off',
    },
  }),
  ...tseslint.config({
    extends: [tseslint.configs.recommended],
    files: ['**/tools/**/*.ts', '**/libs/**/*.ts', '**/apps/**/*.ts'],
    ignores: ['**/*.spec.ts', '**/__tests__/*.ts'],
    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'module',

      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: ['./tsconfig.base.json', './libs/*/tsconfig.json', './apps/*/tsconfig.json'],
      },
    },

    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      'no-return-await': 'off',
      'no-unused-vars': 'off',
      'import/extensions': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/return-await': ['error', 'always'],

      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array',
        },
      ],

      '@typescript-eslint/class-literal-property-style': ['error', 'getters'],
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      '@typescript-eslint/no-extraneous-class': 'error',
      '@typescript-eslint/prefer-includes': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/prefer-regexp-exec': 'error',

      '@typescript-eslint/require-array-sort-compare': [
        'error',
        {
          ignoreStringArrays: true,
        },
      ],
    },
  }),
  ...tseslint.config({
    extends: [tseslint.configs.recommended],
    files: ['**/tools/**/*.ts', '.commitlintrc.ts'],
    ignores: ['**/*.spec.ts', '**/__tests__/*.ts'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.tools.json'],
      },
    },
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  }),
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
];
