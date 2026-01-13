# Tasks: Enhance SEO and 404 UX

- [x] **Update Global Layout Language**
    -   Modify `src/layouts/Layout.astro` to dynamically set the `lang` attribute on the `<html>` element.
    -   Ensure it uses `Astro.params.lang`, or a passed prop, defaulting to "en".
    -   Validation: Inspect source on an `/es/` page and verify `<html lang="es">`.

- [x] **Refine 404 Page**
    -   Modify `src/pages/404.astro`.
    -   Replace "Go Back" button with "Return to Home" linking to `/`.
    -   Remove redundant `aria-label`.
    -   Clean up CSS classes (remove `mx-auto` from the paragraph).
    -   Validation: Verify button text and link destination.
