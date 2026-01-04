# Design: Booking Form State & Dynamic Layout

## Architecture

We will use a "Hybrid" approach where `BookingForm.astro` serves as the layout shell, but the interactive parts are React "Islands" connected via a shared Zustand store.

### Store Structure (`src/store/search-form.tsx`)

```typescript
interface SearchFormState {
  tripType: 'oneWay' | 'roundTrip';
  currency: 'USD' | 'MXN';
  locationFrom: string;
  locationTo: string;
  departureDate: string;
  departureTime: string;
  returnDate: string;
  returnTime: string;
  passengers: number;
  
  // Actions
  setTripType: (type: 'oneWay' | 'roundTrip') => void;
  setCurrency: (currency: 'USD' | 'MXN') => void;
  setLocationFrom: (loc: string) => void;
  setLocationTo: (loc: string) => void;
  setDepartureDate: (date: string) => void;
  setDepartureTime: (time: string) => void;
  setReturnDate: (date: string) => void;
  setReturnTime: (time: string) => void;
  setPassengers: (count: number) => void;
}
```

### Component Hierarchy

```mermaid
graph TD
    A[BookingForm.astro] --> B[TripTypeControls (React)]
    A --> C[CurrencyControls (React)]
    A --> D[SubmitButton (React)]
    A --> E[BookingFields (React)]
    
    B --Updates--> Store[Zustand Store]
    C --Updates--> Store
    E --Reads/Listen--> Store
    E --Renders--> F[Inputs (Date, Time, Location...)]
```

### Dynamic Fields Logic (`BookingFields.tsx`)

The `BookingFields` component will subscribe to `tripType`.

- **Row 1 (Departure)**: Always rendered. Fields bind to `locationFrom`, `locationTo`, `departureDate`, `departureTime`, `passengers`.
- **Row 2 (Return)**: Rendered `if tripType === 'roundTrip'`.
    - **Location From**: Mapped to `locationTo` (inverted) or just `locationFrom`?
        - User Requirement: "duplicate the inputs... place and passengers are not editable".
        - Interpretation: visual duplication.
        - Implementation: We will Render `LocationSelect` with `value={locationFrom}` (or swapped) and `disabled={true}`.
        - Decision: For a "Return" trip, the "From" is usually the "To" of the departure.
        - However, the prompt says "duplicate... place... not editable". This creates a "Return Trip" section.
        - We will display `LocationSelect` (From) with `value={locationTo}` (swapped) and `disabled={true}` to indicate the return journey direction.
        - `LocationSelect` (To) with `value={locationFrom}` (swapped) and `disabled={true}`.
    - **Date/Time**: Bind to `returnDate`, `returnTime`. Editable.
    - **Passengers**: Bind to `passengers`. `disabled={true}`.

### Atom Refactoring
Existing atoms (`DateInput`, etc.) need to become controlled components:
- Props: `value`, `onChange`, `disabled`, `id`, `label`.
- They will no longer handle their own local state (if any) or rely solely on `defaultValue`.
