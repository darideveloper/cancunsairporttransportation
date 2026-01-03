# Localize Hero and Optimize Banner

This proposal outlines changes to the home page hero section to support localization and improve performance/SEO.

## Motivation
- **Localization**: The main hero title is currently hardcoded in simplified English/Spanish logic or just static. Moving it to the translation system ensures consistency and easier management.
- **Optimization**: The banner image uses a CSS background image which is suboptimal for LCP (Largest Contentful Paint). Migrating to Astro's `<Image />` component allows for automatic optimization (WebP, sizing) and eager loading.

## Detailed Solution
1.  **Translation**: Add new keys to `pages.home` in `src/messages/{en,es}.json` for the hero title. Update `index.astro` to use these keys.
2.  **Banner Optimization**:
    -   Update `BannerImage.astro` to use `astro:assets` `<Image />` instead of `background-image`.
    -   Update `index.astro` to import the specific image from `src/assets` instead of using a public string path.
    -   Ensure `loading="eager"` is applied to the hero image for SEO best practices.
