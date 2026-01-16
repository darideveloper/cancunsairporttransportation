# Refactor Destinations Section

## Goal
Create a reusable `Destinations` component to encapsulate the "Destinations" list logic and refactor `home` and `playaDelCarmen` pages to use it.

## Context
Currently, the "Destinations" section (with 3 pricing cards and a "View More" button) is duplicated in:
- `src/pages/[lang]/index.astro`
- `src/pages/[lang]/transportation-from-cancun-airport-to-playa-del-carmen.astro`

The goal is to create a single component `src/components/organisms/Destinations.astro` that accepts a `page` prop and handles the rendering using page-specific translations, similar to `TransportationServices` or `FaqSection`.

## Implementation Details
1.  **Component**: Create `Destinations.astro`.
    -   Imports images (`tulum`, `playa`, `cancun`).
    -   Defines the `destinations` array internally (since it's constant across these pages).
    -   Accepts `page` prop (required).
    -   Uses `t("pages.${page}.destinations...")` for content.
2.  **Translations**:
    -   Ensure `pages.playaDelCarmen.destinations` has `viewMore` and `viewMoreLink` keys (currently missing, it borrows from home).
3.  **Refactor**:
    -   Replace the `<section>` block in both pages with `<Destinations page={page} />`.
