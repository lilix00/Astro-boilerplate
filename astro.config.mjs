import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
  // base: '.', // Set a path prefix.
  output: 'hybrid', // 启用混合模式（SSG + SSR）
  adapter: netlify(),
  site: 'https://example.com/', // Use to generate your sitemap and canonical URLs in your final build.
  trailingSlash: 'ignore', // 在 Astro 配置中强制去除尾部斜杠
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'monokai',
    },
  },
  integrations: [react(), tailwind({}), sitemap(), robotsTxt()],
})
