# Proposal: Configure Home SEO Translations

This change will implement the localized SEO metadata for the home page using the `messages` JSON files. It involves populating the `pages` key in the translation files and updating the `PageSEO` component usage in `index.astro`.

## Problem
The home page currently uses a `<PageSEO />` component without any props, and the translation files (`en.json`, `es.json`) have an empty `pages` key. The SEO metadata is either missing or using hardcoded defaults from a different template ("Ella Skin & Spa Wellness").

## Solution
1. Update `en.json` and `es.json` to include SEO metadata (title, description, keywords) under `pages.home`.
2. Update `src/pages/[lang]/index.astro` to pass the `currentPage` and `lang` props to `<PageSEO />`.
3. Update `BaseSEO.astro` to fetch metadata from the `pages` key instead of the non-existent `meta` key, and clean up template-specific hardcoded strings.

## Scope
- Content updates in `src/messages/en.json` and `src/messages/es.json`.
- Logic updates in `src/components/utils/base/BaseSEO.astro` and `src/components/utils/PageSEO.astro`.
- Component usage update in `src/pages/[lang]/index.astro`.
