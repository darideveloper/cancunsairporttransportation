# Design: Legal Pages & Layout

## Context
The user wants to add a "Terms and Conditions" page rendered from an MDX file and a specific layout for legal pages.
The project uses Astro with `[lang]` routing for internationalization (en, es).
Content is currently managed via JSON translations, but `project.md` suggests MDX should be used for static pages. `src/content` does not currently exist.

## Architecture

### 1. Data Layer: Content Collections
We will introduce Astro Content Collections to manage legal documents.
- **Collection Name**: `legal`
- **Location**: `src/content/legal/`
- **Dependencies**: `@tailwindcss/typography` (install if missing for beautiful text rendering)
- **Structure**:
  - `src/content/legal/en/terms-and-conditions.mdx`
  - `src/content/legal/es/terms-and-conditions.mdx` (optional/placeholder for now but adhering to structure)
- **Schema**:
  - `title`: string
  - `description`: string
  - `lang`: 'en' | 'es' (derived from id or explicit field)
  - `updated_at`: date (optional, to display "Last Updated")
  - **Content Rule**: The MDX body should **NOT** include the main H1 title or the page description introduction, as these are rendered by `LegalLayout` to ensure consistent styling.

### 2. Layout Layer: `LegalLayout.astro`
A new layout component `src/layouts/LegalLayout.astro`.
- **Props**:
  - `title`: string
  - `description`: string
- **Structure**:
  - Wraps content in the main `Layout`.
  - **SEO**: Fills the `seo` slot of `Layout` with `<title>` and `<meta name="description">`.
  - Renders a wrapper `<article>` or `<main>` with limited width (prose) for readability.
  - Renders Title (H1) prominently.
  - Renders Description below title.
  - Renders `<slot />` for the MDX content.
- **Styling**:
  - Use Tailwind Typography (`prose` class) to automatically style the markdown content (headings, lists, paragraphs) for high readability.
  - Container should be centered with a max-width (e.g., `max-w-3xl`) to ensure comfortable line length.

### 3. Page Layer: `terms-and-conditions.astro`
A new page `src/pages/[lang]/terms-and-conditions.astro`.
- **Route**: `/[lang]/terms-and-conditions`
- **Logic**:
  - `getStaticPaths`: Generates paths for all supported languages.
  - Content Fetching: 
    - Queries the `legal` collection.
    - Filters by current `lang` and slug `terms-and-conditions`.
    - Throws 404 if content not found (or falls back).
  - Rendering: 
    - Uses `LegalLayout`.
    - Renders the `Content` component from the queried entry.

## Trade-offs
- **Slug Localization**: Currently we are using the same slug `terms-and-conditions` for all languages. Ideally, Spanish URL would be `/es/terminos-y-condiciones`.
  - **Decision**: Keep `terms-and-conditions` for simplicity in this iteration unless the user explicitly requested localized URLs (they asked for "/terms-and-conditions"). We will stick to `/[lang]/terms-and-conditions` for now.
  - Update: If we use `getStaticPaths`, we can define specific paths. However, `src/pages/[lang]/...` creates a fixed path segment. To have localized slugs, we'd need `src/pages/[lang]/[...slug].astro` or specific files.
  - **Selected Approach**: `src/pages/[lang]/terms-and-conditions.astro` -> `/en/terms-and-conditions`, `/es/terms-and-conditions`. This is consistent with the folder structure.

## Alternatives Considered
- **Pure Markdown Page**: `src/pages/terms-and-conditions.md`
  - *rejected*: Doesn't support the `[lang]` dynamic routing easily without duplication or complex config.
- **JSON Content**:
  - *rejected*: User specifically requested `.mdx`.
60: 
61: ### 5. Navigation
62: - Update `Footer` or `BottomBar` to include a link to `/terms-and-conditions`.

## Dependencies
- `astro:content`: Built-in.
- `tailwindcss`: Existing.
