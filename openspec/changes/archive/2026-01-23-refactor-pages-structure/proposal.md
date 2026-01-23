# Refactor Pages Structure

## Metadata
- **Change ID**: `refactor-pages-structure`
- **Created**: 2026-01-23
- **Status**: Proposed

## Purpose
The `src/components/pages/` directory currently contains a flat list of page components with distinct layouts. To improve maintainability and organization, we will categorize these components into subdirectories based on their layout and content type.

## Layout Identification
Based on inspection of `src/components/pages/`, the following layouts/types have been identified:

1.  **Landing**: High-level pages with banner images and broad content.
    -   `Home.astro`
    -   `Destinations.astro` (Uses a simple layout, likely a general search/landing point)
2.  **Services**: Pages describing specific transportation services (Private, Luxury, etc.), starting with a booking form and detailed service inclusions.
    -   `Private.astro`
    -   `Luxury.astro`
    -   `Group.astro`
    -   `Taxi.astro`
3.  **Destinations**: Pages dedicated to specific locations (Akumal, Tulum, etc.) with rich content including stats, galleries, and "How to move" sections.
    -   `Akumal.astro`
    -   `Tulum.astro`
    -   `Playa.astro`
    -   `Merida.astro`
4.  **Legal**: Text-heavy legal pages utilizing the `LegalLayout` and content collections.
    -   `Terms.astro`

## Proposed Changes
1.  **Create Subdirectories**: Create `landing/`, `services/`, `destinations/`, and `legal/` inside `src/components/pages/`.
2.  **Move Files**: Move the identified components into their respective subfolders.
3.  **Update Imports**: Refactor `src/pages/[...path].astro` to update the imports for the moved components.
4.  **Verification**: 
    -   Ensure `COMPONENT_MAP` (and thus `pageKey` mapping from `ui` translations) remains correct.
    -   Verify no other files import these components directly (checked `grep`, mostly expected in `[...path].astro`).

## Validation
-   Run `npm run build` to ensure all paths resolve.
-   Manual check of routes in dev mode.
