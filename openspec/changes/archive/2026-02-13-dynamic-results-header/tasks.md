# Tasks: Dynamic Results Header

Implement a dynamic `h2` component for the Results page using Zustand store data.

## Implementation Tasks

- [x] **Internationalization**
  - [x] Add `pages.results.dynamicTitle` to `src/messages/en.json` with value `"Shuttle from {from} to {to}"`.
  - [x] Add `pages.results.dynamicTitle` to `src/messages/es.json` with value `"Traslado de {from} a {to}"`.
  - [x] Update `useTranslations` type or usage if necessary (ensure interpolation works).

- [x] **Component Creation**
  - [x] Create `src/components/molecules/DynamicResultsHeader.tsx`.
  - [x] Implement store subscription using `useSearchFormStore`.
  - [x] Integrate `useTranslations` for localized strings.
  - [x] Apply Tailwind styles: `font-title text-2xl font-bold text-gray-800 mt-2`.

- [x] **Page Integration**
  - [x] Modify `src/components/pages/store/Results.astro`.
  - [x] Import `DynamicResultsHeader`.
  - [x] Replace the empty `<h2></h2>` with `<DynamicResultsHeader lang={lang} client:load />`.

## Validation Tasks
- [ ] Verify that the route text appears correctly on the Results page after a search.
- [ ] Switch languages and confirm the text translates as expected.
- [ ] Modify the route via the sidebar and ensure the header updates reactively.
