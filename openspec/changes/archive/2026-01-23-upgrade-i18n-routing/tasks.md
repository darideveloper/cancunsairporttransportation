# Tasks: Upgrade Translation & Routing System

## Phase 1: Preparation & Configuration
- [x] Add `routes` map to `src/messages/en.json`.
  - Keys: `home`, `taxi`, `akumal`, `tulum`, `destinations`, `group`, `luxury`, `private`, `playa`, `merida`, `terms`.
- [x] Add `routes` map to `src/messages/es.json` with localized slugs.
  - Matches keys from `en.json`.
- [x] Update `src/lib/i18n/ui.ts` to include the new JSON structure in the `ui` export if needed (usually automatic if importing).

## Phase 2: Core Routing Logic
- [x] Update `src/lib/i18n/utils.ts`.
  - [x] Modify `getLangFromUrl` to handle optional `/es/` prefix.
  - [x] Implement `getLocalizedPath(pageKey, targetLang)`.
- [x] Create `src/pages/[...path].astro`.
  - [x] Implement `getStaticPaths` to generate paths for all keys in `en.json` and `es.json`.
  - [x] Map path to `pageKey` and `lang` props.
  - [x] Use a dynamic `COMPONENT_MAP` lookup table to render the correct page component based on `pageKey`.

## Phase 3: Component & Link Refactor
- [x] Update `src/components/atoms/LangLink.astro` (Language Switcher).
  - [x] Refactor to use `getLocalizedPath` with the current `pageKey`.
- [x] Refactor `src/components/utils/base/BaseSEO.astro`.
  - [x] Replace hardcoded path generation with `getLocalizedPath`.
  - [x] Ensure `canonical`, `og:url`, and `hreflang` use localized slugs.
- [x] Global JSON Link Update:
  - [x] Search and replace all hardcoded `/en/` or `/es/` links in `en.json` and `es.json` with their new localized counterparts.
- [x] Update `Header`, `Footer`, and `Destinations` components to ensure all internal links use `getLocalizedPath`.

## Phase 4: Migration & Cleanup
- [x] Implement Redirections in `astro.config.mjs` or `src/middleware.ts`.
  - [x] Redirect `/en/*` to `/*` (Permanent 301).
- [x] Move existing files from `src/pages/[lang]/` to a new directory `src/components/pages/` and refactor them into reusable page components (removing `getStaticPaths` from within them).
- [x] Remove the legacy `src/pages/[lang]/` directory.
- [x] Verify all routes work as expected:
  - English Home: `/`
  - Spanish Home: `/es/`
  - English Taxi: `/cancun-airport-taxi`
  - Spanish Taxi: `/es/taxi-aeropuerto-cancun`
  - etc.
- [x] Verify breadcrumbs and SEO tags are using the new paths.

## Phase 5: Validation
- [x] Run `openspec validate upgrade-i18n-routing --strict`.
- [x] Verify no regressions in booking flow or other interactive elements.
