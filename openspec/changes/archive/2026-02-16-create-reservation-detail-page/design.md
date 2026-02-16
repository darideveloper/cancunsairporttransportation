# Design: Reservation Detail Page Routing

The routing system in this project is centralized to handle i18n and dynamic paths efficiently.

## Current Routing System Analysis
1. **Route Configuration**: Located in `src/lib/i18n/routes.ts`. It defines a `routes` object where each key represents a unique page (e.g., `home`, `reservation`, `blog`) and its value contains the localized sub-paths for English (`en`) and Spanish (`es`).
2. **Page Generation**: The file `src/pages/[...path].astro` uses `getStaticPaths` to iterate over the `routes` object. It generates two paths for every entry:
   - One for English (params: `{ path: route.en }`)
   - One for Spanish (params: `{ path: route.es }`)
3. **Component Mapping**: Inside `src/pages/[...path].astro`, a `COMPONENT_MAP` constant maps the identifier (passed as `pageKey` via props) to a specific Astro component.
4. **Localization Middleware/Utils**: The `[...path].astro` layout receives the `lang` prop to determine which translations to load via `src/lib/i18n/ui.ts` and `src/messages/*.json`.

## Proposed Implementation
To create the `/my-reservation-detail` page:

### 1. Update `src/lib/i18n/routes.ts`
Add a new entry:
```typescript
reservationDetail: {
  en: "my-reservation-detail",
  es: "es/detalle-mi-reservacion",
}
```

### 2. Create `src/components/pages/store/ReservationDetail.astro`
This will be the standard page component for this route. It should use the project's base layout.

### 3. Update `src/pages/[...path].astro`
- Import the new `ReservationDetail` component.
- Add `reservationDetail: ReservationDetail` to the `COMPONENT_MAP`.

## Data Handling (Future)
Since this is a "detail" page, it will eventually need to fetch data from an API based on a query parameter or session state (e.g., `/my-reservation-detail?id=...`). The current catch-all system supports this as these are static routes that can handle client-side logic or SSR if configured.
