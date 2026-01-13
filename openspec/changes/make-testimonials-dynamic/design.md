# Design: Dynamic Testimonials System

## Architecture
The `Testimonials.astro` component acts as a UI organism that can either operate in "default mode" (pulling hardcoded base translations) or "dynamic mode" (accepting data props).

### Component Interface
`src/components/organisms/Testimonials.astro` props:
- `title?`: string
- `description?`: string
- `items?`: `TestimonialItem[]`

Type `TestimonialItem`:
```typescript
{
  key?: string; // Optional identifier
  name: string;
  text: string;
  image: ImageMetadata;
  imageAlt: string;
  imageTitle: string;
  stars: string; // "5", "4", etc. or passed as number
  date: string;
}
```

### Data Flow
1.  **Index Page (Default)**: `<Testimonials />` -> Component uses internal default logic to read `baseSections.testimonials` translations and imports default images.
2.  **Playa del Carmen Page (Dynamic)**:
    - Page imports `Testimonials`.
    - Page imports specific images.
    - Page fetches translations for `pages.playaDelCarmen.testimonials`.
    - Page constructs data array.
    - Page renders `<Testimonials title={...} description={...} items={...} />`.

## Translations Schema
New keys under `pages.playaDelCarmen.testimonials`:
```json
{
  "title": "...",
  "description": "...",
  "items": {
    "item1": { "name": "...", "text": "...", "stars": "5" },
    "item2": { ... },
    "item3": { ... }
  }
}
```

## Assets
New images in `src/assets/images/clients/`:
- `playa-client-1.webp`
- `playa-client-2.webp`
- `playa-client-3.webp`
(Using webp for consistency, sources provided as webp/jpg in prompt, but we will generate standard assets).
Note: The prompt implies generating images. I will generate them as generic client portraits.

## Structured Data (JSON-LD)
The component currently generates JSON-LD. It needs to use the dynamic `items` to generate this structured data correctly when in dynamic mode.
