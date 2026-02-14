# Proposal: Add Flight Information to Search Storage

## Summary
Extend the existing `SearchFormState` in `src/store/search-form.ts` to include `airline` and `flightNumber` fields. This ensures all necessary booking information is captured and persisted in the centralized store, as required for the upcoming `Register.astro` component enhancement.

## Motivation
The `Register.astro` page needs to collect airline and flight number information from the user. To maintain a single source of truth and leverage existing state persistence, these new fields must be added to the global search form store.

## Proposed Solution
1.  Update `SearchFormState` interface to include `airline: string` and `flightNumber: string`.
2.  Update initial state to initialize these fields as empty strings.
3.  Add setter actions: `setAirline` and `setFlightNumber`.
4.  Ensure these fields are included in the persisted state.
