# Proposal: Booking Form State Management with Zustand

## Motivation
The current `BookingForm` relies on uncontrolled React components rendered within an Astro component. There is no shared state management, making it difficult to synchronize data between the controls (Trip Type, Currency) and the form fields, or to implement dynamic behavior like duplicating inputs for round trips.

The goal is to introduce `zustand` as a centralized state manager and refactor the form to support dynamic rendering based on the `tripType` state.

## Proposed Changes
1.  **Centralized Store**: Update `src/store/search-form.tsx` to handle all form fields: trip type, currency, departure/return dates & times, locations, and passengers.
2.  **Smart Atoms**: Update all form atoms (`LocationSelect`, `DateInput`, etc.) to support controlled references (`value`, `onChange`, `disabled`).
3.  **BookingFields Component**: Create a new React component `BookingFields.tsx` that:
    - Connects to the Zustand store.
    - Renders the grid of inputs.
    - Conditionally renders a "Return Trip" row when `tripType` is 'roundTrip'.
    - Locks specific fields (Location, Passengers) in the return row as read-only.
4.  **BookingForm Integration**: Update `BookingForm.astro` to use `BookingFields` instead of individual atoms, while keeping the layout structure.
5.  **Control Updates**: Modify `TripTypeControls` and `CurrencyControls` to interact directly with the Zustand store.

## Benefits
- **Source of Truth**: A single store for all form data.
- **Dynamic UI**: capabilities like "Round Trip" input duplication become trivial.
- **Maintainability**: Clear separation between state logic and UI rendering.
- **Scalability**: Easy to add validation or submission logic later.
