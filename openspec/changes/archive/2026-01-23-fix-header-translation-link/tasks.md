# Tasks: Fix Header Translation Link

## Phase 1: Router Update
- [x] Update `src/pages/[...path].astro` to pass `pageKey={pageKey}` to `<PageComponent />`.

## Phase 2: Page Component Refactoring
Refactor the following components to accept `pageKey` prop and pass it to `<Layout pageKey={pageKey}>`.
- [x] `src/components/pages/Home.astro`
- [x] `src/components/pages/Taxi.astro`
- [x] `src/components/pages/Akumal.astro`
- [x] `src/components/pages/Tulum.astro`
- [x] `src/components/pages/Destinations.astro`
- [x] `src/components/pages/Group.astro`
- [x] `src/components/pages/Luxury.astro`
- [x] `src/components/pages/Private.astro`
- [x] `src/components/pages/Playa.astro`
- [x] `src/components/pages/Merida.astro`
- [x] `src/components/pages/Terms.astro` (Already handled? Verify prop usage).

## Phase 3: Validation
- [x] **Manual Verification**:
    - [x] `getLocalizedPath` calls in `LangLink` receive the correct `pageKey`.
    - [x] Switching language on `/cancun-to-tulum-shuttle` redirects to `/es/traslado-cancun-tulum`.
    - [x] Switching language on `/es/taxi-aeropuerto-cancun` redirects to `/cancun-airport-taxi`.
- [x] Run `openspec validate fix-header-translation-link --strict`.
