# Proposal: Save Transport Token to Store

This proposal outlines the changes required to persist the selected transport option's unique token in the `useSearchFormStore` when a user chooses a vehicle result. This token is essential for the subsequent "Create Reservation" API call.

## Problem Statement
The current booking flow fetches transport options (vehicles) from the Legacy Quote API. Each option returns a unique `token`, but this token is not currently captured or stored when a user selects a vehicle. Without this token, the frontend cannot finalize a booking.

## Proposed Changes

### 1. Store Expansion (`src/store/search-form.ts`)
- Add `selectedVehicleToken: string | null` to the `SearchFormState`.
- Add `setSelectedVehicleToken: (token: string | null) => void` action.
- Update `partialize` to include `selectedVehicleToken` in persistent storage.

### 2. API Model Update (`src/lib/transportation/api.ts` & `src/lib/transportation/legacy-api.types.ts`)
- Update `VehicleBuyCardProps` to include the `token` field.
- Ensure the `getVehicles` function maps the `token` from the API response to the component props.

### 3. Component Interaction
- **`VehicleBuyCard.tsx`**: Update props to receive `token` and an optional `onSelect` callback. Modify the CTA button to trigger the selection.
- **`VehicleBuyCards.tsx`**: Implement the selection handler that updates the Zustand store when a vehicle is selected.

## Impact
- **State Management**: Introduces a new persistent field in the search form store.
- **UI/UX**: Enables the transition from results to the checkout/contact form by carrying the necessary session token.
