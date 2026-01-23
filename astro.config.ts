// @ts-check
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'
import showTailwindcssBreakpoint from 'astro-show-tailwindcss-breakpoint'

import { routes } from './src/lib/i18n/routes'

const legacyRedirects = Object.values(routes).reduce<Record<string, string>>((acc, route) => {
  if (route.en === "") {
    acc['/en'] = '/';
  } else {
    acc[`/en/${route.en}`] = `/${route.en}`;
  }
  return acc;
}, {});

// https://astro.build/config
export default defineConfig({
  site: 'https://cancunsairporttransportation.com',
  redirects: {
    ...legacyRedirects
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