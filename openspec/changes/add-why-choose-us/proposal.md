# Add "Why Choose Us" Section

## Goal
Add a new "Why use Cancun Airport Transportation by Go Transfers" section to the homepage using the existing `TextCard` component, fully localized for English and Spanish.

## Context
The user requested a new marketing section with specific content and structure (`Image` left, `Text` right). This aligns with the `TextCard` component's capabilities (using `reverse={true}`). The content needs to be extracted to the translation files (`src/messages/*.json`) to maintain the project's internationalization architecture.

The requested image `/assets/img/clients/custom-client.jpg` is currently missing from the codebase. The implementation will include adding this asset (or a placeholder) to `src/assets` to be compatible with Astro's image optimization.

## Changes
1.  **Assets**: Add `custom-client.jpg` (generated or placeholder) to `src/assets/images/clients/`.
2.  **Translations**: Add `whyChooseUs` keys to `en.json` and `es.json`.
3.  **Homepage**: Update `src/pages/[lang]/index.astro` to include the new section using `TextCard`.
