# Tasks: Upgrade Translation & Routing System

## Phase 1: Preparation & Configuration
- [ ] Add `routes` map to `src/messages/en.json`.
  - Keys: `home`, `taxi`, `akumal`, `tulum`, `destinations`, `group`, `luxury`, `private`, `playa`, `merida`, `terms`.
- [ ] Add `routes` map to `src/messages/es.json` with localized slugs.
  - Matches keys from `en.json`.
- [ ] Update `src/lib/i18n/ui.ts` to include the new JSON structure in the `ui` export if needed (usually automatic if importing).

## Phase 2: Core Routing Logic
- [ ] Update `src/lib/i18n/utils.ts`.
  - [ ] Modify `getLangFromUrl` to handle optional `/es/` prefix.
  - [ ] Implement `getLocalizedPath(pageKey, targetLang)`.
- [ ] Create `src/pages/[...path].astro`.
  - [ ] Implement `getStaticPaths` to generate paths for all keys in `en.json` and `es.json`.
  - [ ] Map path to `pageKey` and `lang` props.
  - [ ] Use a dynamic `COMPONENT_MAP` lookup table to render the correct page component based on `pageKey`.

## Phase 3: Component & Link Refactor
- [ ] Update `src/components/atoms/LangLink.astro` (Language Switcher).
  - [ ] Refactor to use `getLocalizedPath` with the current `pageKey`.
- [ ] Refactor `src/components/utils/base/BaseSEO.astro`.
  - [ ] Replace hardcoded path generation with `getLocalizedPath`.
  - [ ] Ensure `canonical`, `og:url`, and `hreflang` use localized slugs.
- [ ] Global JSON Link Update:
  - [ ] Search and replace all hardcoded `/en/` or `/es/` links in `en.json` and `es.json` with their new localized counterparts.
- [ ] Update `Header`, `Footer`, and `Destinations` components to ensure all internal links use `getLocalizedPath`.

## Phase 4: Migration & Cleanup
- [ ] Implement Redirections in `astro.config.mjs` or `src/middleware.ts`.
  - [ ] Redirect `/en/*` to `/*` (Permanent 301).
- [ ] Move existing files from `src/pages/[lang]/` to a new directory `src/components/pages/` and refactor them into reusable page components (removing `getStaticPaths` from within them).
- [ ] Remove the legacy `src/pages/[lang]/` directory.
- [ ] Verify all routes work as expected:
  - English Home: `/`
  - Spanish Home: `/es/`
  - English Taxi: `/cancun-airport-taxi`
  - Spanish Taxi: `/es/taxi-aeropuerto-cancun`
  - etc.
- [ ] Verify breadcrumbs and SEO tags are using the new paths.

## Phase 5: Validation
- [ ] Run `openspec validate upgrade-i18n-routing --strict`.
- [ ] Verify no regressions in booking flow or other interactive elements.
