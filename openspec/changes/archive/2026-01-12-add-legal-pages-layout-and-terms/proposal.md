# Proposal: Add Legal Pages Layout and Terms & Conditions

## Goal
To implement a "Terms and Conditions" page rendered from a `.mdx` file, ensuring it is properly integrated into the existing internationalization structure. Additionally, create a dedicated layout for legal pages that features a prominent title, description, and readable content area.

## Changes

### Layouts
- **[NEW]** `src/layouts/LegalLayout.astro`: A specialized layout wrapper that:
  - Extends the main `Layout`.
  - Displays a large H1 title.
  - Displays a description text designed to sit under the title.
  - Wraps the main content in a container optimized for readability (wide text support).
  - Handles SEO metadata (title, description) via `Layout` slots.

### Pages
- **[NEW]** `src/pages/[lang]/terms-and-conditions.astro`: A dynamic page that:
  - Generates static paths for supported languages (en, es).
  - Fetches content from the `legal` content collection.
  - Renders the content using `LegalLayout`.

### Content
- **[NEW]** `src/content/config.ts`: Configuration for the new `legal` content collection.
- **[NEW]** `src/content/legal/en/terms-and-conditions.mdx`: English content for Terms and Conditions.
- **[NEW]** `src/content/legal/es/terms-and-conditions.mdx`: Spanish content template for Terms and Conditions.
- **[UPDATE]** `src/components/molecules/BottomBar.astro`: Add link to `/terms-and-conditions`.

## Verification
- **Build Verification**: Run `npm run build` to ensure static paths are generated correctly.
- **Visual Verification**: 
  - Navigate to `/en/terms-and-conditions` and check layout and content rendering.
  - Navigate to `/es/terms-and-conditions` and check localization.
