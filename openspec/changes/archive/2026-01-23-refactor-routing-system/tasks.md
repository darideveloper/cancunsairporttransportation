# Tasks

- [x] 1. Create `src/lib/i18n/routes.ts`
  - [x] Extract all current routes from `en.json` and `es.json`
  - [x] ensure the structure matches the design
- [x] 2. Rename `astro.config.mjs` to `astro.config.ts`
- [x] 3. Update `astro.config.ts`
  - [x] Import `routes` from `src/lib/i18n/routes`
  - [x] Replace hardcoded `redirects` with dynamic generation logic using the imported `routes`
- [x] 4. Update `src/lib/i18n/utils.ts`
  - [x] Import `routes`
  - [x] Update `getLocalizedPath` to use the new object
- [x] 5. Update `src/pages/[...path].astro`
  - [x] Import `routes`
  - [x] Refactor `getStaticPaths` to iterate over the new object
- [x] 6. Verify routing locally
  - [x] `npm run dev`
  - [x] Verify pages load correctly
  - [x] Verify `/en/` legacy links redirect correctly
- [x] 7. Cleanup `src/messages/en.json` and `src/messages/es.json`
  - [x] Remove the `routes` object


