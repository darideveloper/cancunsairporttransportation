# Tasks: Optimize Web Vitals

1.  **Optimized Font Loading**
    - [ ] Update `src/layouts/Layout.astro` to remove manual `<link rel="preload">` tags for fonts.
    - [ ] Verify `@fontsource` imports are sufficient.
    - [ ] Check `public/` folder and remove unused font files if they are fully replaced by `@fontsource` to avoid confusion.

2.  **Caching Configuration (Coolify)**
    - [ ] Create `public/nginx.conf` with optimal caching headers (server block).
    - [ ] **Manual Action**: Copy the content of `public/nginx.conf` into the "Custom Nginx Configuration" field in the Coolify project settings.

3.  **Rendering & Dependency Optimization**
    - [ ] Run `npm update astro` to ensure latest performance fixes for `ClientRouter`.
    - [ ] Verify `ClientRouter` usage in `Layout.astro`.
    - [ ] (Verification) Run a build and inspect the output HTML to ensure CSS is properly linked/inlined.

4.  **Verification**
    - [ ] Run a local build `npm run build` and `npm run preview`.
    - [ ] Use Browser DevTools "Network" tab to simulate "Slow 3G" and check for Blocking resources.
    - [ ] (Note: Full cache verification requires deployment, but config file presence validates the intent).
