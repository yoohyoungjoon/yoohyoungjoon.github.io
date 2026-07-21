// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// This is a GitHub *user* site (yoohyoungjoon.github.io), served at the domain root,
// so `site` is the full URL and there is no `base` sub-path to set.
// If you ever move to a *project* site (username.github.io/repo), add:
//   base: '/repo-name',
export default defineConfig({
  site: 'https://yoohyoungjoon.github.io',
  integrations: [sitemap()],
  markdown: {
    // Light, warm code styling that matches the palette rather than a dark IDE block.
    shikiConfig: { theme: 'github-light', wrap: true },
  },
});
