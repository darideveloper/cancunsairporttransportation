# Design: Persist Search State

## Architecture
We will use usages of the `zustand` state management library, specifically its `persist` middleware.

### Store Modification
The `useSearchFormStore` is currently created with:
```typescript
create<SearchFormState>((set) => ({ ... }))
```

We will wrap this configuration with `persist`:
```typescript
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useSearchFormStore = create<SearchFormState>()(
  persist(
    (set) => ({
      // ... existing state ...
    }),
    {
      name: 'search-form-storage', // key in localStorage
      storage: createJSONStorage(() => localStorage), // explicitly use localStorage
      partialize: (state) => ({
         // We might want to persist everything, or exclude some things.
         // Persisting everything (locations, dates, passengers) is desired.
         tripType: state.tripType,
         currency: state.currency,
         locationFrom: state.locationFrom,
         locationFromData: state.locationFromData,
         locationTo: state.locationTo,
         locationToData: state.locationToData,
         // Dates might be stale if the user returns days later.
         // However, keeping them is better than losing them during a refresh.
         departureDate: state.departureDate,
         departureTime: state.departureTime,
         returnDate: state.returnDate,
         returnTime: state.returnTime,
         passengers: state.passengers,
      }),
    }
  )
);
```

### Component Interaction
The `BookingForm.tsx` component currently contains logic to set default values (e.g., `defaultFrom`, `defaultTo`) if the state is empty.

**We will remove this initialization logic.**

**Behavior with Persistence**:
1.  **First Visit (Empty Storage)**: `state` is empty. No specific defaults are applied by the component. Fields show their placeholders.
2.  **Next Visit/Reload**: Storage has values. Store hydrates with values. Fields show the saved user values.

This simplifies the `BookingForm.tsx` by removing the `useEffect` that checks for defaults and sets them. We will rely entirely on the store state (persisted or empty).

## Data Schema
No change to the Typescript interfaces. The JSON schema in localStorage will match the `SearchFormState` interface (partialized).

## Dependencies
*   `zustand/middleware`: Standard part of the library.
