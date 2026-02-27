# Proposal: Remove `pay_at_arrival` from Reservation Submission

## Purpose
The current business logic only supports online payment methods (Stripe, PayPal). The `pay_at_arrival` field in the reservation API call is currently redundant and potentially confusing for the backend if it's always set to 0. This change removes the field from the active payload sent to the API while keeping it as a commented-out reference for future use if cash payments are re-introduced.

## Scope
- **API Types**: Update `CreateReservationPayload` to comment out `pay_at_arrival`.
- **Submission Logic**: Update `BookingSubmission.tsx` to remove `pay_at_arrival` from the active payload.
- **Specifications**: Update the submission spec to reflect this change.
- **Documentation**: Update internal API documentation.

## Non-Goals
- Removing the `paymentMethod` selection UI.
- Changing the backend API (this is a frontend-only change to the request payload).
