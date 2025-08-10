import { defineConfig } from 'vitepress';

// Import version info from the generated file
let versionString = 'dev';

try {
  // Dynamic import to handle cases where the file might not exist yet
  versionString = (await import('../version.constant.js')).VERSION_INFO.version;
} catch {
  // Fallback if the version file doesn't exist yet
  versionString = 'dev';
}

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  title: 'romcal',
  description: 'The all-inclusive Catholic liturgical calendar library',
  lang: 'en-US',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,
  metaChunk: true,
  outDir: '../../../dist/apps/docs',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '192x192', href: '/logo192.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/logo512.png' }],
    ['meta', { name: 'theme-color', content: '#5bbad5' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'romcal' }],
    ['meta', { name: 'og:image', content: '/logo512.png' }],
  ],

  themeConfig: {
    logo: '/logo192.png',

    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Guide',
        items: [
          { text: 'General Usage', link: '/guide/general-usage' },
          { text: 'Calendar Plugins', link: '/guide/calendar-plugins' },
          { text: 'Localization', link: '/guide/localization' },
          { text: 'Nx Workspace', link: '/guide/nx-workspace' },
          { text: 'Contribute', link: '/guide/contribute' },
        ],
      },
      {
        text: 'API',
        items: [
          { text: 'Calendar Definitions', link: '/api/calendar-definitions' },
          { text: 'Data Output', link: '/api/data-output' },
        ],
      },
      {
        text: 'Reference',
        items: [{ text: 'Glossary', link: '/reference/glossary' }],
      },
      {
        text: 'Example Implementation',
        link: 'https://romcal.js.org/',
        target: '_blank',
      },
      { text: versionString, link: '' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          collapsed: false,
          items: [
            { text: 'General Usage', link: '/guide/general-usage' },
            { text: 'Calendar Plugins', link: '/guide/calendar-plugins' },
            { text: 'Localization', link: '/guide/localization' },
            { text: 'Nx Workspace', link: '/guide/nx-workspace' },
            { text: 'Contribute', link: '/guide/contribute' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API Reference',
          collapsed: false,
          items: [
            { text: 'Calendar Definitions', link: '/api/calendar-definitions' },
            { text: 'Data Output', link: '/api/data-output' },
          ],
        },
      ],
      '/reference/': [
        {
          text: 'Reference',
          collapsed: false,
          items: [{ text: 'Glossary', link: '/reference/glossary' }],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/romcal/romcal' }],

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/romcal/romcal/edit/dev/apps/docs/src/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2014-${new Date().getFullYear()} romcal Contributors`,
    },
  },

  markdown: {
    lineNumbers: true,
    toc: { level: [2, 3] },
  },

  vite: {
    server: {
      port: 4173,
      host: true,
    },
  },
});
