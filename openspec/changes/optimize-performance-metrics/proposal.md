# Proposal: Optimize Performance Metrics

This proposal addresses several performance bottlenecks identified in the Lighthouse report, including image delivery, render-blocking resources, forced reflows, and unused JavaScript.

## Problem
The current page has several speed issues:
- **Image Delivery**: Large images in `/public` and unoptimized `width`/`height` attributes on processed images.
- **Render Blocking**: CSS and Font files block the initial render.
- **Forced Reflow**: Potential layout-thrashing in client-side scripts.
- **Unused JS**: Hydration of components that could be static or deferred.

## Solution
We will implement the following optimizations:
1.  **Image Optimization**:
    - Move `home-banner.webp` to `src/assets/images/` and use Astro's `<Image />` component.
    - Adjust `trip-advisor.webp` dimensions and quality in `index.astro`.
2.  **Critical Path Optimization**:
    - Preload critical fonts (`Inter` and `Metropolis`).
    - Audit `global.css` to ensure it only includes essential styles for the initial render.
3.  **Refactor FAQ Items**:
    - Replace `FaqItem.tsx` with a static `FaqItem.astro` component using native HTML `<details>` to eliminate React hydration while maintaining native open/close functionality.
    - Review `BookingForm` for potential deferred hydration.
4.  **Forced Reflow**:
    - Audit `MenuBar.astro` and `FaqItem.tsx` for layout-triggering properties.

## Scope
- `src/pages/[lang]/index.astro`
- `src/layouts/Layout.astro`
- `src/components/atoms/BannerImage.astro`
- `src/components/molecules/FaqItem.tsx`
- `src/styles/global.css`
- `src/assets/images/` (migration of assets)
