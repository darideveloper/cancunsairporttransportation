# Tasks: Save Transport Token to Store

## 1. Store Implementation
- [x] Add `selectedVehicleToken` to `SearchFormState` interface in `src/store/search-form.ts`.
- [x] Implement `setSelectedVehicleToken` action in `useSearchFormStore`.
- [x] Add `selectedVehicleToken` to the `partialize` configuration in `persist` middleware.
  - **Validation**: Verify the field appears in `localStorage.getItem('search-form-storage')` after update.

## 2. API & Types Update
- [x] Add `token: string` to `VehicleBuyCardProps` in `src/components/molecules/VehicleBuyCard.tsx`.
- [x] Update `getVehicles` mapping in `src/lib/transportation/api.ts` to include `token: item.token`.
  - **Validation**: Ensure TypeScript does not report missing properties.

## 3. Component Integration
- [x] Update `VehicleBuyCard` to accept an `onSelect` prop and call it with the `token` when the button is clicked.
- [x] Update `VehicleBuyCards` to pass an `onSelect` callback to children that updates the store.
  - **Validation**: Manual test: click a vehicle, check store state via DevTools or console logging.
