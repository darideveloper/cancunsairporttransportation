# Proposal: Optimize Web Performance

## Problem
The website has several performance bottlenecks identified by PageSpeed Insights:
- **Render-blocking CSS:** `index.css` (3.3 KiB) blocks rendering for ~300ms.
- **Font Loading Waterfall:** Fonts are discovered late because they are imported via JS/CSS (Fontsource), leading to a 350ms+ latency.
- **Poor Resource Prioritization:** Critical fonts are not preloaded.
- **LCP Delay:** The LCP element (main heading) has unoptimized styles and is delayed by render-blocking resources.
- **Missing Caching:** Static assets lack proper `Cache-Control` headers.

## Proposed Changes
1. **Font Optimization:**
   - Move from Fontsource JS imports to manual `@font-face` declarations in `global.css` using local files in `/public/fonts/`.
   - Implement `<link rel="preload">` for critical font weights to break the network dependency chain.
2. **Resource Prioritization:**
   - Add `<link rel="preconnect">` for external origins (if any).
3. **LCP & Layout Polish:**
   - Remove `debug` classes and `h-[120vh]` from the homepage `<h1>`.
   - Optimize CSS loading strategy.
4. **Caching Strategy:**
   - Document the required `Cache-Control` headers for deployment.

## Impact
- **LCP (Largest Contentful Paint):** Expected improvement of 300ms-500ms.
- **FCP (First Contentful Paint):** Expected improvement of 200ms-300ms.
- **CLS (Cumulative Layout Shift):** Stabilize font loading to prevent shifts (though currently 0, we ensure it stays that way).
- **TBT (Total Blocking Time):** Reduced by moving assets out of the critical path.
