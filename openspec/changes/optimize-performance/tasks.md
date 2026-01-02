# Tasks: Optimize Performance

- [x] **Phase 1: Font Optimization**
    - [x] Remove Fontsource JS imports from `src/layouts/Layout.astro`. <!-- id: 1 -->
    - [x] Add manual `@font-face` declarations to `src/styles/global.css` pointing to `/public/fonts/`. <!-- id: 2 -->
    - [x] Add `<link rel="preload">` tags to `src/layouts/Layout.astro` for Inter (Variable) and Metropolis (Bold). <!-- id: 3 -->
- [x] **Phase 2: LCP Cleanup**
    - [x] Remove `debug` and `h-[120vh]` classes from the `<h1>` in `src/pages/[lang]/index.astro`. <!-- id: 4 -->
- [x] **Phase 3: Meta & Headers**
    - [x] Add `preconnect` hints for any active external domains in `Layout.astro`. <!-- id: 5 -->
    - [x] (Optional/Verification) Run a local build `npm run build` and check the asset sizes. <!-- id: 6 -->
