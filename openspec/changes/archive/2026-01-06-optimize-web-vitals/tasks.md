# Tasks: Optimize Web Vitals

1.  **Optimized Font Loading**
    - [x] Update `src/layouts/Layout.astro` to remove manual `<link rel="preload">` tags for fonts.
    - [x] Verify `@fontsource` imports are sufficient.
    - [x] Check `public/` folder and remove unused font files if they are fully replaced by `@fontsource` to avoid confusion.

2.  **Caching Configuration (Coolify)**
    - [x] Create `public/nginx.conf` with optimal caching headers (server block).
    - [x] **Manual Action**: Copy the content of `public/nginx.conf` into the "Custom Nginx Configuration" field in the Coolify project settings.

3.  **Rendering & Dependency Optimization**
    - [x] Run `npm update astro` to ensure latest performance fixes for `ClientRouter`.
    - [x] Verify `ClientRouter` usage in `Layout.astro`.
    - [x] (Verification) Run a build and inspect the output HTML to ensure CSS is properly linked/inlined.

4.  **Verification**
    - [x] Run a local build `npm run build` and `npm run preview`.
    - [x] Use Browser DevTools "Network" tab to simulate "Slow 3G" and check for Blocking resources.
    - [x] (Note: Full cache verification requires deployment, but config file presence validates the intent).
