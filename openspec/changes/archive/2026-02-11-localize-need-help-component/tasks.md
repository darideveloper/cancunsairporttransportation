# Tasks

1.  ### Add Translation Keys
    - [x] Update `src/messages/es.json` with new structure for `global.needHelp` including `title`, `description`, and `logos` specific keys.
    - [x] Update `src/messages/en.json` with corresponding English translations for the same keys.

2.  ### Update NeedHelp Component
    - [x] Import `getLangFromUrl` and `useTranslations` from `../../lib/i18n/utils`.
    - [x] Replace hardcoded text with translation function calls (`t()`).
    - [x] Refactor `logos` array to include metadata keys for `alt` and `title`.
    - [x] Update `Image` components to use localized `alt` and `title` attributes.

3.  ### Validation
    - [x] Start dev server (`npm run dev`).
    - [x] Verify Spanish version renders correctly.
    - [x] Verify English version renders correctly (by visiting `/en/` or configuring browser language).
    - [x] Inspect accessibility attributes on images using browser dev tools.
