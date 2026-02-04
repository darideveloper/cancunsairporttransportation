# Change: Implement Site Search

## Why
Users currently have no way to search for specific blog posts or service pages. As content grows, navigating solely by menu becomes inefficient. We need a lightweight, fast search solution that works in both Development (HMR) and Production (Static) environments without external dependencies.

## What Changes
- **New Search Endpoint**: An Astro API endpoint (`src/pages/[lang]/search.json.ts`) that generates a searchable JSON index of all blog posts and key static pages.
- **New Search Component**: A React-based search bar that fetches the index on interaction and filters results client-side.
- **UI Integration**: The search bar will be added to the site header/layout.

## Impact
- **Affected Specs**: `search-feature` (New Capability).
- **Affected Code**: 
  - `src/pages/[lang]/search.json.ts` (New)
  - `src/components/Search/` (New)
  - `src/layouts/Layout.astro` (Likely modified to include the search component)
