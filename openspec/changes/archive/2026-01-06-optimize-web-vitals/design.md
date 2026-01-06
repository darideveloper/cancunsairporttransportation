# Design: Performance Optimization Strategy

## Caching Strategy

Since the project is hosted on a VPS (Coolify), we cannot rely on platform-specific config files like `vercel.json`.
The "global" solution for serving static sites efficiently on a VPS is to use a dedicated web server configuration (Nginx) that sits alongside the built assets.

**Design:**
*   Create a standard `nginx.conf` file in the project root.
*   This configuration will define the locations and headers:
    *   `/fonts/` & `/assets/` (Immutable): `Cache-Control "public, max-age=31536000, immutable"`
    *   `/*.html` (Pages): `Cache-Control "public, max-age=0, must-revalidate"`
*   **Integration**:
    *   We will place `nginx.conf` in `public/` so it is part of the build artifacts.
    *   **Coolify Specific**: The user should copy the content of this file and paste it into the "Custom Nginx Configuration" field in the Coolify dashboard (as seen in the provided screenshot). This ensures the VPS serves the files with the correct headers.

**Rules (Nginx syntax reference):**
*   `location ~* \.(?:ico|css|js|gif|jpe?g|png|woff2?)$ { expires 1y; add_header Cache-Control "public, max-age=31536000, immutable"; }`

## Font Optimization
Currently, `Layout.astro` imports `@fontsource` packages AND manually preloads `/fonts/...`.
*   **Design**: We will remove the manual `<link rel="preload">` tags pointing to `public/` files.
*   **Reasoning**: `@fontsource` automatically injects its own CSS. Vite/Astro's build process usually detects these imports and can optimize them. The redundancy confuses the browser and may load different files (hashed vs non-hashed).
*   **Refinement**: We will ensure the `@fontsource` imports use `display: swap` via their configuration or CSS variable overrides if supported, or verify default behavior.

## Layout Stability (CLS) & Reflows
The reflow is triggered by `ClientRouter`.
*   **Design**: Investigation suggests this might be an internal Astro issue or interaction with specific DOM queries.
*   **Action**: We will first ensure the Astro version is up to date (patch update). If the issue persists, we will investigate if the `Header` or particular transition animations are forcing immediate layout calculation (e.g. accessing `offsetWidth` immediately after a class change).
