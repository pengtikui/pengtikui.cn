import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://pengtikui.cn',
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
    },
    rehypePlugins: [
      [
        rehypeExternalLinks,
        { rel: ['nofollow', 'noopener', 'noreferrer'], target: '_blank' },
      ],
    ],
  },
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
