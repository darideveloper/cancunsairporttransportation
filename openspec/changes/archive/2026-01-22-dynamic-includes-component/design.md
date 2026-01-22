# Design: Dynamic Includes Component

## Architecture

The `Includes` component will be refactored to strictly fetch translations based on the mandatory `page` prop, ensuring no hardcoded fallbacks and explicit data handling for each page.

### Component Props

```typescript
interface Props {
  page: string;
  image: ImageMetadata;
}
```

### Translation Mapping

- **Items**: Always fetched from `global.sections.includes.items`.
- **Title**: Strictly fetched from `t(pages.${page}.includes.title)`.
- **Image Metadata (Alt/Title)**: Strictly fetched from `t(pages.${page}.includes.imageAlt)` and `t(pages.${page}.includes.imageTitle)`.

## Data Changes

- Move `title`, `imageAlt`, and `imageTitle` for `private` and `luxury` pages into their respective page sections in `en.json` and `es.json`.
- Keep `global.sections.includes.items` as the source of truth for the feature list.

## Components Affected

- `src/components/organisms/Includes.astro`: Refactored to accept props and use dynamic translation keys.
- `src/pages/[lang]/luxury-transportation-cancun.astro`: Updated to pass `page="luxury"` and the luxury image.
- `src/pages/[lang]/private-airport-transfer-cancun.astro`: Updated to pass `page="private"` and the standard image.
