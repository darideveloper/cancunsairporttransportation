# Enable Dynamic Reviews Count in Destinations

## Goal
Enable the `Destinations.astro` component to render a variable number of reviews by passing a `reviewsNum` prop, which is then propagated to the `Testimonials.astro` component.

## Context
Currently, `Destinations.astro` and `Testimonials.astro` render a hardcoded set of 3 testimonials (`item1`, `item2`, `item3`) using 3 specific images. The user wants the ability to control this number via a prop, fetching corresponding translations dynamically from the locale files.

## Proposed Solution
1.  **Update `Testimonials.astro`**:
    *   Accept a `count` prop (defaulting to 3).
    *   Refactor the `testimonials` data generation to iterate from 1 to `count`.
    *   Dynamically construct translation keys (e.g., `item${index + 1}`).
    *   Handle image assignment by cycling through the provided `images` array if the count exceeds the number of images.
2.  **Update `Destinations.astro`**:
    *   Accept a `reviewsNum` prop (defaulting to 3).
    *   Pass this value to the `Testimonials` component.

## Impact
-   **Files Modified**:
    -   `src/components/pages/landing/Destinations.astro`
    -   `src/components/organisms/Testimonials.astro`
-   **Backward Compatibility**: The default behavior (3 reviews) will be preserved, ensuring no visual regression for existing pages unless `reviewsNum` is explicitly provided.
