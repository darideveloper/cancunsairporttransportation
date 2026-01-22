# Tasks: Update Luxury Transportation Testimonials

## Phase 1: Assets

- [x] Convert generated AI images to `.webp` format.
- [x] Move images to `src/assets/images/clients/` with names `luxury-1.webp`, `luxury-2.webp`, and `luxury-3.webp`.

<!-- Image paths for reference:
1. /home/daridev/.gemini/antigravity/brain/9df1537b-54d1-4d07-81ee-a0b1e1e0268e/luxury_client_1_1769033026278.png
2. /home/daridev/.gemini/antigravity/brain/9df1537b-54d1-4d07-81ee-a0b1e1e0268e/luxury_client_2_1769033042376.png
3. /home/daridev/.gemini/antigravity/brain/9df1537b-54d1-4d07-81ee-a0b1e1e0268e/luxury_client_3_1769033060664.png
-->

## Phase 2: Translations

- [x] Update `src/messages/es.json` with the new testimonials for `pages.luxury.testimonials`.
- [x] Update `src/messages/en.json` with the new testimonials for `pages.luxury.testimonials`.

## Phase 3: Implementation

- [x] Update `src/pages/[lang]/luxury-transportation-cancun.astro` to import the new `luxury-*.webp` images.
- [x] Update the `images` prop passed to the `Testimonials` component in `luxury-transportation-cancun.astro`.

## Phase 4: Validation

- [x] Verify the visuals on the luxury transportation page (don't open the browser, just only double check the code)
- [x] Ensure SEO metadata (alt/title) is correctly applied via translations (double check the code or do http requests (don't open the browser))
