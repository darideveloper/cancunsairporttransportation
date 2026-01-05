# Design: Configure Home SEO Translations

## Architecture

The project uses Astro with a custom i18n implementation. Translations are stored in `src/messages/*.json` and accessed via a `useTranslations` hook.

### Translation Structure

We will add a `home` entry under `pages` in each language file:

```json
{
  "pages": {
    "home": {
      "title": "Local Business Title",
      "description": "Short description of the business",
      "keywords": "keyword1, keyword2"
    }
  }
}
```

### Component Hierarchy

1. `index.astro` (Page)
2. `PageSEO.astro` (Molecular SEO component)
3. `BaseSEO.astro` (Atomic SEO component for tags and JSON-LD)

### Data Flow

- `index.astro` determines the `lang` and `currentPage` ("home").
- These values are passed to `PageSEO`.
- `PageSEO` (or `BaseSEO`) uses `useTranslations(lang)` to fetch:
  - `pages.${currentPage}.title`
  - `pages.${currentPage}.description`
  - `pages.${currentPage}.keywords`

## Refactoring BaseSEO

`BaseSEO.astro` currently has some hardcoded values from a previous template:
- `title` = 'Ella Skin & Spa Wellness'
- `image` = '/imgs/logo.webp'
- `twitterHandle` = '@DeveloperDari'

These should be updated to use generic configuration or business-specific branding from `branding.businessName`.
The lookup key should be changed from `meta.${currentPage}.page` to `pages.${currentPage}.title` (or similar) to match the user's request.
