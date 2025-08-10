/// <reference types='vitest' />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineConfig } from 'vite';

// eslint-disable-next-line import/no-default-export
export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/docs',
  plugins: [nxViteTsPaths()],
  // VitePress handles its own server configuration
  test: {
    watch: false,
    globals: true,
    environment: 'node',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/docs',
      provider: 'v8' as const,
    },
  },
}));
