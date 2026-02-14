# Integrate Real Quote API

## Summary
Replace the current dummy API integration in the `Results` page with a real implementation connecting to the `PUBLIC_API_BASE` endpoint. This change transforms the frontend quote request (from `SearchFormStore`) into the required API payload and maps the API response to the existing `VehicleBuyCardProps` interface, ensuring no changes are needed in UI components.

## Goals
- Connect `Results` results page to `PUBLIC_API_BASE/legacy/quote/`.
- Maintain existing `VehicleBuyCard` UI structure by mapping API data.
- Handle loading and error states gracefully (already present in `VehicleBuyCards` component).

## Non-Goals
- Modifying UI components (`VehicleBuyCards`, `Results.astro`).
- Server-side rendering of results (client-side fetch loop maintained).
