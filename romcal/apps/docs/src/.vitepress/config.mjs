import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Romcal',
  description: 'Roman Catholic liturgical calendar library',

  themeConfig: {
    nav: [{ text: 'Home', link: '/' }],

    sidebar: [
      {
        text: 'Getting Started',
        items: [{ text: 'Documentation coming soon', link: '/' }],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/romcal/romcal' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Romcal Contributors',
    },
  },
});
