# Change: Update Vehicle Results Display

## Why
The user wants to enhance the vehicle results presentation by showing numerical ratings next to star icons for better clarity. Additionally, they require a more structured approach to rendering vehicle cards by introducing a new `VehicleBuyCards` organism and using dummy data in `Results.astro` for testing/initial layout.

## What Changes
- **MODIFIED**: `VehicleBuyCard.tsx` to display numerical rating next to stars (e.g., "4/5").
- **ADDED**: `VehicleBuyCards.tsx` organism to wrap and render multiple `VehicleBuyCard` components.
- **MODIFIED**: `Results.astro` frontmatter to include 3 dummy vehicle data objects.
- **MODIFIED**: `Results.astro` template to use the new `VehicleBuyCards` organism instead of manual individual card rendering.

## Impact
- **Affected specs**: `vehicle-buy-card-component`, `results-integration`.
- **Affected code**: `src/components/molecules/VehicleBuyCard.tsx`, `src/components/organisms/VehicleBuyCards.tsx`, `src/components/pages/store/Results.astro`.
