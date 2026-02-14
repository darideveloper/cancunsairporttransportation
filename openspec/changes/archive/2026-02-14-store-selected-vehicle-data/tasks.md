# Tasks

- [x] Define the `SelectedVehicle` interface in `src/store/search-form.ts`.
- [x] Update `SearchFormState` to use `selectedVehicle: SelectedVehicle | null` instead of `selectedVehicleToken: string | null`.
- [x] Update store actions (`setSelectedVehicle`) to match the new interface.
- [x] Define `vehicleFeatures` type in a shared location if needed, or simply extract the name from `src/data/vehicle-features.ts`.
- [x] Provide `vehicleType` in `VehicleBuyCardProps`.
- [x] Populate `vehicleType` in `src/lib/transportation/api.ts` using `vehicleFeatures`.
- [x] Update `VehicleBuyCard` interaction to pass the full `VehicleBuyCardProps` (or requisite subset) on selection, not just the token.
- [x] Update consumers of `selectedVehicleToken` to use `selectedVehicle.token`.
- [x] Validate that the data persists correctly in `localStorage`.
