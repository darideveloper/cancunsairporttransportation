# Design: Transport Token Persistence

## Architecture Overview
The transport token is a stateless session identifier provided by the Caribbean Transfers API for a specific quote item. To complete a booking, this token must be sent back to the `/api/v1/create` endpoint.

We will use the existing Zustand-based `useSearchFormStore` to house this token, ensuring it survives page refreshes via its `persist` middleware.

## Technical Details

### State definition
In `src/store/search-form.ts`:
```typescript
interface SearchFormState {
  // ...
  selectedVehicleToken: string | null;
  setSelectedVehicleToken: (token: string | null) => void;
}
```

### Component Flow
1. **Fetch**: `VehicleBuyCards` calls `getVehicles`.
2. **Transform**: `getVehicles` returns `VehicleBuyCardProps[]` including the `token`.
3. **Render**: `VehicleBuyCards` maps over vehicles, passing `token` to each `VehicleBuyCard`.
4. **Action**: `VehicleBuyCard`'s button triggers `onSelect(token)`.
5. **Update**: `VehicleBuyCards` (parent) receives the token and calls `setSelectedVehicleToken(token)`.

## Alternatives Considered
- **Direct Link**: Saving the token as a query parameter in the "Book Now" URL.
  - *Pros*: Completely stateless.
  - *Cons*: Makes URLs long and fragile; doesn't align with the existing persistence strategy used for passengers and dates.
- **Independent Store**: Creating a `useReservationStore`.
  - *Pros*: Cleaner separation.
  - *Cons*: More boilerplate for a single field; the reservation is logically tied to the search parameters.
