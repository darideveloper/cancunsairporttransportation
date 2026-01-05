# Refactor Banner CTA to Dynamic Component

## Summary
Refactor the "Cancun Airport Transportation" section in `index.astro` into a reusable, dynamic `BannerCta` component. This component will standardize the layout, buttons, and image for similar sections while allowing dynamic titles and text content. Translation files will be standardized to share the common elements.

## Problem
The current implementation in `index.astro` hardcodes the "Banner CTA" section structure. The translation keys in `en.json` and `es.json` are inconsistent (`es.json` uses a shared `baseSections.bannerCta` structure while `en.json` keeps everything under the specific key). This makes it difficult to reuse the component for other sections or maintain consistent styling/behavior.

## Solution
1.  **Component Creation**: Create a `BannerCta.astro` organism component.
    *   Props: `title` (string), `text` (string - markdown supported).
    *   Internal: Reference `baseSections.bannerCta` for `imageAlt`, `imageTitle`, and `buttons` (href/text/variant).
2.  **Translation Standardization**:
    *   Update `src/messages/en.json` to move the common keys (buttons, image metadata) from `cancunAirportTransportation` to `baseSections.bannerCta`, matching `es.json`.
3.  **Refactor**:
    *   Replace the existing section in `src/pages/[lang]/index.astro` with the new `<BannerCta />` component.

## Impact
-   **Reusability**: The component can be reused for other similar CTA sections.
-   **Consistency**: Ensures buttons and images are consistent across instances if used elsewhere (as per request).
-   **Maintenance**: Centralized styles and structure.
