# Proposal: Add Client Information to Search Form Store

## 1. Context and Problem Statement
The current `search-form` store (`src/store/search-form.ts`) manages trip details (dates, locations, passengers) and vehicle selection but lacks the necessary fields to capture the client's personal information (name, email, phone, notes) during the booking process. This data is required for completing a reservation.

## 2. Goals
- Extend the `SearchFormState` interface to include `firstName`, `lastName`, `email`, `phone`, and `notes`.
- Update the store's initial state and persist configuration to include these new fields.
- Add setter actions for each new field to the store.

## 3. Non-Goals
- Validation logic for these fields (this will be handled by the UI components or a separate validation layer, or potentially Zod, but this proposal focuses on storage).
- Backend integration (API calls to submit the booking).

## 4. Technical Approach
- Modify `src/store/search-form.ts`.
- Add the new fields to the `SearchFormState` interface.
- Initialize them as empty strings in the `create` function.
- Add corresponding `setFirstName`, `setLastName`, `setEmail`, `setPhone`, and `setNotes` actions.
- Ensure these fields are included in the `partialize` function for persistence.
