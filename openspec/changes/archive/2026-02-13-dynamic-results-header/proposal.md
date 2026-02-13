# Proposal: Dynamic Results Header

Transform the static/empty `h2` section in the Results page into a dynamic React component that displays the user's selected route from the Zustand store.

## Problem
The Results page currently shows a generic "Results" title and has an empty `h2` tag. Users benefit from immediate visual confirmation of the route they are booking (e.g., "Shuttle from Cancun Airport to Playa del Carmen").

## Proposed Solution
Introduce `DynamicResultsHeader`, a React component that hooks into `useSearchFormStore` to display a localized route string.

### Key Changes
- **New Component**: `src/components/molecules/DynamicResultsHeader.tsx`
- **Translations**: Add `dynamicTitle` to `pages.results` in `en.json` and `es.json`.
- **Integration**: Update `src/components/pages/store/Results.astro` to include the new component.

## Impact
- **User Experience**: Improved clarity and trust during the booking process.
- **Maintainability**: Centralized logic for route name display using existing state management.
- **SEO**: Dynamic headings can improve content relevance (though this is a client-side component, the `h1` remains static for initial crawl).

## Alternatives Considered
- **Astro-only rendering**: Not feasible since the data comes from `localStorage` (persisted Zustand store), which is only available client-side in the browser. A React component with `client:load` is the standard for this project's architecture.
