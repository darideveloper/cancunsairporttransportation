# Tasks: Integrate Google Tag Manager

- [x] **Task 1: Add GTM Head Snippet to `Layout.astro`**
  - Inject the GTM `<script>` tag as high as possible in the `<head>` of `src/layouts/Layout.astro`.
  - Use the Astro `is:inline` directive to prevent processing.
  - Verification: Run a grep to ensure the script exists in the file and matches the snippet provided by the user.

- [x] **Task 2: Add GTM Body Snippet to `Layout.astro`**
  - Inject the GTM `<noscript>` iframe immediately after the opening `<body>` tag in `src/layouts/Layout.astro`.
  - Verification: Run a grep to ensure the `noscript` tag exists in the file and follows the opening `<body>` tag.

- [x] **Task 3: Validate Integration and DataLayer Coexistence**
  - Ensure that `gtag.js` and GTM correctly interact with the `dataLayer` without conflict.
  - Verification: Manually verify (e.g., via browser console if a build/preview is available) that `window.dataLayer` is initialized and both tags are present in the final HTML.
