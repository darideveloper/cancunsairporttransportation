# Design: 404 Page

## Architecture
- **Location**: `src/pages/404.astro`
- **Layout**: Use `src/layouts/Layout.astro` to wrap the content, ensuring the `Header` and `Footer` are present.
- **Content**:
  - A central container (centered vertically and horizontally or just with good spacing).
  - **Logo**: Reuse `src/components/atoms/Logo.astro`.
  - **Heading**: `<h1>` "404 - Page Not Found" (or "Página no encontrada" depending on detected lang or just English/Spanish generic if global 404).
    - *Note*: `src/pages/404.astro` is generally global in Astro unless using `[lang]/404.astro`. Since existing pages are in `[lang]`, a global `404.astro` at root handles system-wide 404s. We should ideally display content in both languages or default to English. Given the request is simple, we might just show both or English.
  - **Action**: A "Go Back" button.
    - Component: `src/components/atoms/ButtonCta.astro`.
    - Behavior: `onclick="history.back()"`.
    - Fallback: A link to `/` (Home) is recommended as a secondary or fallback if history is empty (though hard to detect purely).

## Reusability
- `Layout.astro`: Handles `<head>`, styles, `Header`, `Footer`.
- `Logo.astro`: Branding.
- `ButtonCta.astro`: Call to action.

## SEO & Accessibility
- **Title**: Set `<title>` via the SEO slot in Layout.
- **Meta**: `noindex` is generally good for 404s to prevent indexing of soft 404s if it were a soft error, but for a strict 404 page served with 404 status, it's fine.
- **Tags**: Semantic `<main>`, `<h1>`.
- **Labels**: `aria-label` for the back button effectively describing "Go back to the previous page".
