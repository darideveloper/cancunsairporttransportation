## 1. Implementation

- [x] 1.1 Create the Search Endpoint `src/pages/[lang]/search.json.ts`
  - [x] Implement `getStaticPaths` for `en` and `es`.
  - [x] Implement `GET` handler to combine `getCollection('blog')` and `routes.ts` data.
- [x] 1.2 Create the Search UI Components
  - [x] `src/components/Search/SearchWidget.tsx` (Interactive React component).
  - [x] `src/components/Search/SearchBar.astro` (REMOVED - Used Widget directly).
- [x] 1.3 Implement Search Logic
  - [x] Add `fetch` hook to load the JSON based on current URL language.
  - [x] Add filtering logic (case-insensitive substring match).
  - [x] Style the dropdown results with Tailwind.
- [x] 1.4 Integrate into Layout
  - [x] Add `SearchWidget` to `src/components/molecules/TopBar.astro` directly with `client:idle`.
- [x] 1.5 Validation
  - [x] Verify search works in `npm run dev`.
  - [x] Verify `dist/en/search.json` and `dist/es/search.json` exist after `npm run build`.
