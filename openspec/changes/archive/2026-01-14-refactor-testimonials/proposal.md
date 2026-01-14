# Refactor Testimonials Component

## Context
The `Testimonials` component currently uses hardcoded keys (`item1`, `item2`, `item3`) and maps them to `global.sections.testimonials` in the translation files. It also uses static imported images. The user wants to show different testimonials (name, rate, quote) per page (e.g. for `/transportation-from-cancun-airport-to-playa-del-carmen`).

## Requirements
1.  Refactor `Testimonials.astro` to accept a `page` prop.
2.  If `page` is provided (e.g. `"playaDelCarmen"`), use translation path `pages.${page}.testimonials`.
3.  If `page` is not provided, fallback to `global.sections.testimonials` (or a default).
4.  Refactor translation files (`en.json`, `es.json`) to include `testimonials` under the specific page (e.g. `playaDelCarmen`).
5.  Maintain the auto-calculated date logic.
6.  Allow passing custom images or handling images dynamically to match the new testimonials (though the user primarily emphasized text changes, mismatched images would be bad).

## Design
*   **Component**: `Testimonials.astro`
    *   Props: `page?: string`, `images?: ImageMetadata[]`.
    *   Logic:
        *   Determine translation base path: `page ? \`pages.${page}.testimonials\` : 'global.sections.testimonials'`.
        *   Fetch items from translations (assuming keys like `item1`, `item2`, `item3` exist under that path).
        *   If `images` prop is passed, use those. Otherwise use default `client1`, `client2`, `client3`.
*   **Translations**:
    *   Add `pages.playaDelCarmen.testimonials` structure in `en.json` and `es.json`.
    *   (Optional) Move `global.sections.testimonials` to `pages.home.testimonials` if "correct place" implies strictly page-scoped. However, keeping a global fallback is often good. I will assume we keep global for Home or generic use, and add specific for Playa.

## Risks
*   Images might not match the new names if not provided.
