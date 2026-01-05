# Design: Performance Optimization

## Architectural Reasoning
The goal is to move the website from "Standard Fontsource Loading" (which is easy but slower) to "High-Performance Asset Loading".

### 1. Font Loading Strategy
Currently, Fontsource generates hashed CSS and font files. This makes preloading difficult because the filename changes on every build.
**Solution:**
- Use the static files already located in `public/fonts/`.
- Manually define `@font-face` in `global.css`.
- Use `rel="preload"` in `Layout.astro`. This ensures the browser starts downloading fonts as soon as it parses the HTML head, in parallel with the CSS.

### 2. Render-Blocking CSS
Astro by default extracts CSS into files. For a small site, the 3.3 KiB `index.css` is better off being loaded efficiently. While inlining is an option, we will first focus on breaking the font dependency chain which is the largest part of the "render blocking" impact in the reports.

### 3. LCP Element Optimization
The `<h1>` text "Cancun Airport Transportation" is the LCP element.
**Issues found:**
- `h-[120vh]` forces the element to be huge, possibly affecting how the browser calculates the viewport.
- `debug` class adds unnecessary borders.
- Both will be removed to ensure a clean, fast paint.

## Trade-offs
- **Maintenance:** Manual `@font-face` requires manual updating if the font files change. However, brand fonts (Inter/Metropolis) rarely change.
- **Complexity:** Adding `preload` tags adds a few lines to the HTML head, but the performance gain (300ms+) outweighs this minor complexity.
