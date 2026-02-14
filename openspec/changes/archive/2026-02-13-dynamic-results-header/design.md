# Design: Dynamic Results Header

The Results page currently has a static title and an empty `h2` tag. To improve the user experience and show the specific route they searched for, we will implement a dynamic header component.

## Architecture

### React Component (`DynamicResultsHeader.tsx`)
This component will be a React island that listens to the `useSearchFormStore`. It will reactively update the text whenever the search parameters change (though typically they are set before reaching the results page).

- **Location**: `src/components/molecules/DynamicResultsHeader.tsx`
- **State**: Subscribes to `locationFromData` and `locationToData` from `useSearchFormStore`.
- **Logic**:
  - If both `locationFromData` and `locationToData` exist, it will format a string:
    - English: "Shuttle from {from} to {to}"
    - Spanish: "Traslado de {from} a {to}"
  - If any data is missing, it will render nothing or a fallback.
- **Styling**: Uses `clsx` and Tailwind CSS utility classes. It should follow the project convention for subtitles (e.g., `text-xl` or `text-2xl`).

### Internationalization
The formatting strings will be added to the translation JSON files to maintain consistency.

- **Keys**: `pages.results.dynamicTitle`

### Astro Integration
The component will be integrated into `src/components/pages/store/Results.astro` with the `client:load` directive to ensure it initializes immediately.

## Data Flow
1. User performs a search via `SearchWidget.tsx`.
2. `SearchWidget` updates the Zustand store.
3. User is redirected to the Results page.
4. `Results.astro` renders.
5. `DynamicResultsHeader` (React component) reads from the store and displays the route name.
