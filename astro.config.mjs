import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import tailwindcss from '@tailwindcss/vite';
import { paperTheme } from './src/utils/shiki.mjs';
import { externalLinks } from './src/utils/external-links.mjs';

export default defineConfig({
  site: 'https://pengtikui.cn',
  markdown: {
    processor: satteri({
      hastPlugins: [externalLinks],
    }),
    shikiConfig: {
      theme: paperTheme,
    },
  },
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
