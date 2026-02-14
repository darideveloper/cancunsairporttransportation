# Design: Search Store Extension

## State Management Pattern
The application uses `zustand` with `persist` middleware for managing search and booking state. This pattern allows for simple, performant state updates and persistence across page reloads (e.g., using `localStorage`).

## Integration
Adding `airline` and `flightNumber` directly to `SearchFormState` follows the existing pattern of keeping all booking-related data in a single, accessible store. This avoids fragmentation and simplifies data retrieval in components like `Register.astro`.

## Schema Update
The `SearchFormState` interface will be updated:

```typescript
export interface SearchFormState {
  // ... existing fields
  airline: string;
  flightNumber: string;
  // ...
  setAirline: (airline: string) => void;
  setFlightNumber: (flightNumber: string) => void;
}
```

The `persist` middleware's partial configuration should automatically include these new fields if we list them, or if we partialise the entire state (currently explicit fields are listed). We will update the `partialize` function to include new fields.
