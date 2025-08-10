import baseConfig from './eslint.config.mjs';

// eslint-disable-next-line import/no-default-export
export default [
  ...baseConfig,
  {
    ignores: ['apps/**', 'libs/**', '.nx/**', 'dist/**'],
  },
];
