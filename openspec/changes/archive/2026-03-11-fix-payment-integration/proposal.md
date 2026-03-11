# Proposal: Standardize Payment Integration and Registration Flow

## Why
The current frontend implementation has slight inconsistencies in field mapping and relies on fallback logic for retrieving PayPal Order IDs. These changes align the frontend registration and payment flow with the standardized backend API response, ensuring correct data mapping, robust response handling (including "hoisted" IDs), and persistent reservation tracking.

## What Changes
1.  Updating `BookingSubmission.tsx` to use snake_case keys in the API payload.
2.  Standardizing `CreateReservationPayload` and `ReservationResponse` types in `api.ts`.
3.  Updating the `useSearchFormStore` and `useReservationStore` to persist `reservation_id` and `uuid`.
4.  Ensuring all redirection URLs (`success_url`, `cancel_url`) are absolute.
5.  Cleaning up the PayPal ID retrieval logic to use the hoisted `paypal_id` from the backend, while acknowledging that the backend provides a robust mapping layer for incoming fields (e.g., accepting both `flightNumber` and `flight_number`).

## Design Highlights
- **Architecture**: Minor update to the `SearchFormState` to include `reservation_id` and `uuid`.
- **Logic**: Centralized field transformation in `BookingSubmission.tsx` before calling the API.
- **Redirection**: Language-aware absolute URL generation for payment callbacks.

## Specs
- [MODIFIED] `validation-enhancements` (or a new spec delta under `payment-integration-logic`) to include payload requirements.
- [NEW] `payment-integration-logic` for response handling and persistence requirements.

## Tasks
- Update `SearchFormState` interface and store implementation.
- Refactor `BookingSubmission.tsx` payload mapping.
- Standardize `api.ts` types and response handling.
- Implement absolute URL generation for callbacks.
- Update cash flow redirection logic.
