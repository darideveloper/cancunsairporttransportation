# Implementation Tasks

1.  Create Generic Legal Component
    - [x] Create `src/components/pages/legal/LegalPage.astro`.
    - [x] Implement `getCollection('legal')` logic with `pageKey` to slug mapping.
    - [x] Use `LegalLayout` for rendering.

2.  Update Routing
    - [x] Modify `src/pages/[...path].astro` to import `LegalPage`.
    - [x] Replace `Terms` and `Privacy` usage with `LegalPage` in `COMPONENT_MAP`.

3.  Cleanup
    - [x] Verify pages render correctly locally.
    - [x] Delete `src/components/pages/legal/Privacy.astro`.
    - [x] Delete `src/components/pages/legal/Terms.astro`.
