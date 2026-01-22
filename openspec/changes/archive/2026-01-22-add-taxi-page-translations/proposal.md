# Proposal: Add Taxi Page Translations

This proposal adds the missing translation keys for the "Cancun Airport Taxi" page by duplicating and adapting the structure from the "Private Transportation" page (`private` key). It also updates the page title as requested.

## Problem
The `taxi` page (`src/pages/[lang]/cancun-airport-taxi.astro`) uses the `page = "taxi"` constant for translation lookups, but the `taxi` key is missing from `src/messages/en.json` and `src/messages/es.json`. This results in missing content on the page.

## Proposed Changes
1.  **Duplicate `private` translation structure**: Copy the entire `private` object under `pages` in both `en.json` and `es.json` to a new `taxi` key.
2.  **Update Titles**:
    *   In `en.json`: Set `pages.taxi.title` to "Cancun Airport Taxi".
    *   In `es.json`: Set `pages.taxi.title` to "Taxi Aeropuerto Cancun".
3.  **Ensure Consistency**: Review and adjust any specific references within the duplicated content if necessary, though the user requested to "duplicate it in the translation files" as a template.

## Impact
- **Translation System**: No architectural changes. Only data additions to JSON files.
- **UI**: The "Cancun Airport Taxi" page will now display full content (including FAQs, testimonials, and SEO metadata) instead of fallbacks or empty strings.
