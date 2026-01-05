# Proposal: Update Banner Stats to Use Images

## Problem
The current `BannerStats` component uses React Icons (`react-icons`), but the design requirement has shifted to use custom images for better visual consistency and flexibility. Additionally, these images require proper accessibility attributes (`alt` and `title`) which are currently managed differently or not present for the icons.

## Proposed Solution
Refactor `src/components/organisms/BannerStats.astro` to:
1.  Replace `react-icons` with Astro's `<Image />` component.
2.  Update the data structure to reference image assets instead of icon components.
3.  Update translation files (`en.json`, `es.json`) to include `imageAlt` and `imageTitle` for each statistic.

## Scope
-   **Component**: `src/components/organisms/BannerStats.astro`
-   **Assets**: Import/use images from `src/assets/images/` (placeholder or existing ones until specific SVGs/images are provided, or use existing ones if suitable).
-   **Translations**: Update `bannerStats` structure in `src/messages/`.

## detailed Behavior
-   The component will import images using Astro's ESM imports.
-   The rendering loop will use `<Image src={stat.image} alt={t(...)} title={t(...)} />`.
-   Styles will need to support the image dimensions.
