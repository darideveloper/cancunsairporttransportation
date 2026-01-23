// @ts-check

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import react from '@astrojs/react'

import showTailwindcssBreakpoint from 'astro-show-tailwindcss-breakpoint'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  redirects: {
    '/en': '/',
    '/en/cancun-airport-taxi': '/cancun-airport-taxi',
    '/en/cancun-to-akumal-shuttle': '/cancun-to-akumal-shuttle',
    '/en/cancun-to-tulum-shuttle': '/cancun-to-tulum-shuttle',
    '/en/destinations': '/destinations',
    '/en/group-transfers-cancun': '/group-transfers-cancun',
    '/en/luxury-transportation-cancun': '/luxury-transportation-cancun',
    '/en/private-airport-transfer-cancun': '/private-airport-transfer-cancun',
    '/en/transportation-from-cancun-airport-to-playa-del-carmen': '/transportation-from-cancun-airport-to-playa-del-carmen',
    '/en/transportation-from-cancun-to-merida': '/transportation-from-cancun-to-merida',
    '/en/terms-and-conditions': '/terms-and-conditions',
  },
  integrations: [
    mdx(),
    sitemap(),
    react(),
    showTailwindcssBreakpoint(),
  ],

  build: {
    inlineStylesheets: "always",
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      dedupe: ["react", "react-dom"],
    },
  },
})