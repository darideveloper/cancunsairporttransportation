# Dynamic Testimonial Images

## Problem
The `Testimonials.astro` component currently uses hardcoded image imports for the client photos. This prevents us from showing different client photos on different destination pages (e.g., Playa del Carmen vs. Home), even though the text content is now dynamic.

## Solution
We will update the `Testimonials` component to accept an optional `images` prop. This prop will be an array of `ImageMetadata`.
- If provided, the component will use these images for the testimonial items (mapped by index or key order).
- If not provided, it will fall back to the existing default images.
- The metadata (alt text, titles) will still come from the translation files as implemented in the previous refactor.

## Scope
- `src/components/organisms/Testimonials.astro`
- `src/pages/[lang]/transportation-from-cancun-airport-to-playa-del-carmen.astro`
