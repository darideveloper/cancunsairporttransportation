# Centralize Translations

## Context
The codebase currently contains a mix of hardcoded strings and dynamic translations. This inconsistency makes it difficult to support multiple languages reliably and maintain text content. Critically, components like `MenuBar.astro` and `index.astro` contain hardcoded visible text such as "Translate website", "Menu", and "Hello world".

Recent visual audits (screenshots) of the Mobile Menu identified several untranslated elements:
- "Customer service" section
- "Translate website" section
- "My reservation" button label


## Goal
Ensure *all* user-facing texts are retrieved from the centralized translation system (`src/messages/*.json`) using the `t()` helper function.

## Scope
- **Audit**: Identify all hardcoded strings in `src/components`, `src/layouts`, and `src/pages`.
- **Capture**: Extract all texts visible in the Mobile Menu screenshots (Customer Service details, Translation headers, etc.).
- **Refactor**: Replace hardcoded strings with `t()` calls in all `.astro` and `.tsx` files.
- **Data**: Populate `src/messages/en.json` and `src/messages/es.json` with the new keys.

## Non-Goals
- Adding support for languages other than English and Spanish.
- altering the existing `src/lib/i18n` logic.
