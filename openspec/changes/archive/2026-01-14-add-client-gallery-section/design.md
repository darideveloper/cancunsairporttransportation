# Design: Client Gallery Section

## Architecture
- **Component**: `src/components/organisms/ClientGallery.astro`
- **Type**: Static Astro Component (no client-side JS required for now).
- **Dependencies**: 
  - `SectionHeading` (molecule) for the header.
  - `astro:assets` for optimized image rendering.

## Component Interface
```astro
interface Props {
  title: string;
  subtitle: string;
  images: ImageMetadata[]; // From astro:assets
}
```

## Layout
- **Container**: Standard container width/padding.
- **Header**: Centered title and subtitle using `SectionHeading`.
- **Grid**:
  - Mobile: 1-2 columns.
  - Tablet: 2-3 columns.
  - Desktop: 4 columns.
  - Gap: consistent spacing (e.g., `gap-4`).

## Implementation Details
1. **Component**: 
   - Receives `title`, `subtitle`, `images` as props.
   - Renders `SectionHeading`.
   - Renders a `<ul>` or `<div>` grid.
   - Iterates over `images` rendering `Image` component for each.
   - Images should fill their grid cell (object-cover).

2. **Page Integration**:
   - Import `ClientGallery` in `transportation-from-cancun-airport-to-playa-del-carmen.astro`.
   - Import images from `src/assets/images/destinations/playa-del-carmen/gallery/*.webp`.
   - Define translations for title and subtitle in `src/messages/{en,es}.json`.
   - Pass data to component.

## Styling
- Use Tailwind Grid: `grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`.
- Images: `w-full h-64 object-cover rounded-lg` (height may vary or be fixed to ensure uniformity).
