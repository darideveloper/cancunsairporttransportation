# Proposal: Show Return Information on Register Page

Ensure clients can see their return trip details (date and time) on the registration page when a round trip is selected, providing transparency and verification before booking.

## Rationale
Currently, the registration page only shows arrival information. For round-trip reservations, users need to verify their return details as well. Following the established UI patterns used in `ArrivalInformation.tsx`, we will add a read-only section for return information that dynamically appears based on the `tripType`.

## Selection Criteria
- **User Experience**: Immediate feedback on selected return details.
- **Consistency**: Reuses styles and components (`Input`, `H2`) from the existing booking flow.
- **Maintainability**: New component `ReturnInformation.tsx` isolated for easy updates.

## Proposed Changes

### Components
- Create `src/components/molecules/booking/ReturnInformation.tsx`.
- Update `src/components/pages/store/Register.astro` to include the new component.

### Localization
- Add `returnInformation` keys to `src/messages/en.json` and `src/messages/es.json`.
