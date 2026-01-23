# Design: Localized Slug Routing System

## Context
Current routing is purely file-based within `src/pages/[lang]/`, leading to URLs like `/en/about-us` and `/es/about-us`. The goal is to move English to the root (`/about-us`) and use localized slugs for Spanish (`/es/sobre-nosotros`).

## Architecture

### 1. Unified Router
A single catch-all route `src/pages/[...path].astro` will replace all separate page files in `src/pages/[lang]/`. This router will:
- Import `en.json` and `es.json`.
- Define `getStaticPaths` by mapping keys from a new `routes` object in these JSON files to their localized paths.
- English routes will be at the root (e.g., `path: undefined` for home, `path: 'about-us'` for about).
- Spanish routes will be prefixed (e.g., `path: 'es'` for home, `path: 'es/sobre-nosotros'`).

### 2. Route Configuration
The source of truth for all URLs will be the `routes` key in the translation files.
- **Key Consistency**: Both files MUST share exact keys (e.g., `"taxi"`) to allow cross-language mapping.
- **Slug Localization**: The values will differ (e.g., `"cancun-airport-taxi"` vs `"taxi-aeropuerto-cancun"`).

### 3. I18n Utility Updates
- `getLangFromUrl(url)`: Updated to check if the first segment is `es`. If not, default to `en`.
- `getLocalizedPath(pageKey, lang)`: New utility to generate a URL given a page identifier and target language. This is crucial for the language switcher and internal linking.
- `getOtherLangPath(currentPath)` (Internal): Utility to find the "partner" URL for the alternate language.

### 4. SEO & Metadata
The `BaseSEO.astro` component will be refactored to use `getLocalizedPath` for:
- `canonical` tags.
- `og:url` tags.
- `hreflang` alternate links.
This ensures correct indexing even with asymmetric slugs.

### 5. Redirection Strategy
To maintain SEO authority and prevent 404s for legacy `/en/` links, a redirect pattern will be implemented (either via `astro.config.mjs` or a middleware):
- `/en/*` -> `/*` (Permanent 301 redirect).
To keep the router DRY, we will use a component lookup table instead of multiple conditional statements.

```astro
---
import Home from '../components/pages/Home.astro';
import Taxi from '../components/pages/Taxi.astro';

const COMPONENT_MAP: Record<string, any> = {
  home: Home,
  taxi: Taxi,
  // ... other pages
};

const { pageKey, lang } = Astro.props;
const PageComponent = COMPONENT_MAP[pageKey];
---

<Layout lang={lang} pageKey={pageKey}>
  {PageComponent ? <PageComponent /> : <DefaultErrorPage />}
</Layout>
```

## Trade-offs
- **Pros**: Cleaner URLs, better SEO for localized content, centralized routing logic.
- **Cons**: slightly more complex `getStaticPaths`, manual mapping of page keys to components.

## Migration Plan
1. Update JSON files with `routes`.
2. Move current page logic to reusable components if not already (or just import the content of those files).
3. Implement `src/pages/[...path].astro`.
4. Update `Header`, `Footer`, and `LanguageSwitcher` to use `getLocalizedPath`.
5. Remove `src/pages/[lang]/` directory.
