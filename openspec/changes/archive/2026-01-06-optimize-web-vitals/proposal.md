# Proposal: Optimize Web Vitals

## Goal
Improve Core Web Vitals and performance metrics identified in the recent audit report, specifically targeting Cache TTL, LCP (Largest Contentful Paint), and CLS (Cumulative Layout Shift) caused by forced reflows.

## Problem Statement
The application is suffering from:
1.  **Inefficient Caching**: Static assets (fonts, images, CSS) lack proper `Cache-Control` headers, leading to unnecessary re-downloads (215 KiB potential savings).
2.  **Network Congestion**: duplicate or inefficient font loading strategies (manual preloads vs. `@fontsource` imports) are delaying LCP.
3.  **Render Blocking Resources**: CSS is blocking the initial render by ~700ms.
4.  **Forced Reflows**: The client router script causes layout trashing during navigation.

## Proposed Solution
1.  **Consolidate Font Loading**: Remove redundant manual preloads in `Layout.astro` and rely on `@fontsource` or a single optimized loading strategy to prevent double-fetching and ensure correct preloading.
2.  **Configure Caching Headers**: Provide a standard `nginx.conf` to enforce long-lived caching (1 year) for immutable assets, suitable for the user's VPS/Coolify setup.
3.  **Upgrade & Optimize Dependencies**: Update `astro` and `tailwindcss` to latest patch versions to benefit from recent performance fixes regarding specific client router reflow issues.
4.  **Review CSS Loading**: Ensure critical CSS handling is optimized by the build tool.

## Risks
*   **Deployment Configuration**: The user must **manually copy** the content of the generated `nginx.conf` into the "Custom Nginx Configuration" field in their Coolify dashboard. Merely having the file in the repo is not enough for Coolify's default Nixpacks/Docker build to pick up these specific header rules.
*   **Visual Regression**: Font changing strategies might cause temporary FOUT/FOIT changes, which should be verified.
