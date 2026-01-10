# Implement Reliable Service Section

## Goal
Add a new "Reliable Transportation Service" section to the bottom of the index page using the `TextCard` component, extracting content from provided HTML and ensuring localization and SEO best practices.

## Proposed Changes
- **Translation Files**: Add new keys for the section title, paragraphs, and button text in `src/messages/en.json` and `src/messages/es.json`.
- **Index Page**: Add the new section to `src/pages/[lang]/index.astro` using `TextCard`.
- **Assets**: Ensure relevant images are available or imported.
