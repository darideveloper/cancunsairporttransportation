# Design: Performance Optimization

This document outlines the architectural and technical decisions for improving the page performance.

## Architecture

We will leverage Astro's built-in features for optimization:
- **Astro Image Component**: For automated image optimization.
- **Client Directives**: For fine-grained hydration control.
- **Middleware/Headers (Optional)**: For preloading resources.

## Key Components

### 1. Image Optimization Strategy
We will migrate `home-banner.webp` from `public/` to `src/assets/images/`. This allows Astro to:
- Generate multiple sizes and formats (AVIF, WebP).
- Lazy-load images outside the viewport.
- Set proper `fetchpriority` for above-the-fold images.

### 2. Font Loading strategy
Currently, fonts are loaded via `@fontsource` and `@font-face`. We will:
- Add `<link rel="preload" ...>` in `Layout.astro` for the critical font weights.
- Ensure `font-display: swap` is consistently used.

### 3. Progressive Enhancement & Hydration Audit
- **FAQ Items**: `FaqItem.tsx` will be replaced by a static Astro component using the native HTML `<details>` and `<summary>` elements. This provides the "open and close" feature with zero JavaScript, improving performance and reliability.
- **BookingForm**: Use `client:visible` if the form is not immediately critical for the LCP.

## Trade-offs
- **Build Time**: Using the Astro Image component increases build time as it processes images. This is acceptable for a static site.
- **JS Complexity**: Moving away from React for simple components might slightly increase CSS complexity but reduces bundle size.
