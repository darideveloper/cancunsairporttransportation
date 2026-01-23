# Tasks: Add Destinations to Destinations Page
// turbo-all

- [x] **I18n: Add English Translations**
  - Add `pages.destinations` to `src/messages/en.json`.
  - Content should include title, text, and cards for Tulum, Playa, and Cancun.
  - Verification: `npm run dev` and check `/destinations`.

- [x] **I18n: Add Spanish Translations**
  - Add `pages.destinations` to `src/messages/es.json`.
  - Content should include title, text, and cards for Tulum, Playa, and Cancun (in MXN).
  - Verification: `npm run dev` and check `/es/destinos`.

- [x] **UI: Update Destinations Page**
  - Import `Destinations` organism in `src/components/pages/landing/Destinations.astro`.
  - Render `<Destinations page={page} />` at the bottom of the layout.
  - Verification: Visually check the page to ensure the section appears correctly below the booking form.

- [x] **Validation**
  - Run `openspec validate add-destinations-to-destinations-page --strict`.
