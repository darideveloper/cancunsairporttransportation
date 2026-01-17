# Proposal: Refactor Destinations Section

## Goal
Refactor the "Destinations" section into a reusable Astro component `Destinations` to eliminate code duplication and support page-specific content via the translation system.

## Changes
- Create `src/components/organisms/Destinations.astro`.
- Update `src/pages/[lang]/index.astro` to use the new component.
- Update `src/pages/[lang]/transportation-from-cancun-airport-to-playa-del-carmen.astro` to use the new component.
- Ensure translation files (`en.json`, `es.json`) have consistent keys for all pages using this component.

## Motivation
The code for the destinations section is duplicated or similar across pages. A reusable component will standardize the design and allow content updates purely through the translation files.
