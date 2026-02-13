# Simulated Vehicle API Proposal

## Summary
Refactor `Results.astro` to replace hardcoded vehicle data with a simulated asynchronous API call (`src/lib/transportation/api.ts`).
Update `VehicleBuyCards` component to handle fetching, loading (skeleton), and error states on the client side.

## Motivation
To simulate a real-world scenario where vehicle availability and pricing are fetched dynamically from an external service, providing a more robust user experience with proper loading feedback and error handling.

## Scope
- Create `src/lib/transportation/api.ts` with simulated API logic.
- Modify `src/components/organisms/VehicleBuyCards.tsx` to handle async fetching.
- Update `src/components/pages/store/Results.astro` integration.
- Add necessary translations.

## Technical Details
- **API Simulation**: `getVehicles` function with `setTimeout`.
- **Component State**: React `useState` / `useEffect` for data fetching.
- **UI Feedback**:
  - Skeleton Loader: Pulsing placeholders for cards.
  - Error State: User-friendly message + retry option (if applicable) or simple error display.

## Dependencies
- `src/lib/i18n/ui.ts` (Translations)
- React (Client component state)

## Risks
- Minor SEO impact moving content to client-side rendering (mitigated by static shell).
