# Proposal: Update Register Submit Behavior

## Summary
Update the registration submission logic in `BookingSubmission.tsx` to correctly handle digital payment methods (Stripe/PayPal), redirecting users to the payment gateway when a `payment_link` is returned. Additionally, implement dynamic success/cancel URLs based on the current environment and improve error feedback using SweetAlert2.

## Motivation
The current submission logic is hardcoded for "Pay at Arrival" (Cash) and lacks the necessary fields and redirection logic for digital payments. Standard browser alerts and inline error messages provide a sub-optimal user experience.

## Proposed Changes

### 1. External Dependencies
- Add `sweetalert2` to the project to provide premium, accessible modal feedback.

### 2. API Types Update
- Modify `src/lib/transportation/legacy-api.types.ts` to include:
    - Payload: `payment_method`, `success_url`, `cancel_url`, `language`.
    - Response: `payment_link`.

### 3. Logic Refinement in `BookingSubmission.tsx`
- **Dynamic URLs**: Use `window.origin` combined with routes for `thank-you` and `cancel` to generate absolute URLs for the payment gateway.
- **Payment Method Mapping**: Convert the store's lowercase `paymentMethod` (e.g., `stripe`) to the API's expected uppercase format (e.g., `STRIPE`).
- **Redirection**: If the API response contains a `payment_link`, perform a top-level redirect.
- **Error Handling**: Replace inline error messages and browser `alert()` with SweetAlert2 modals.

## Spec Deltas
- `submission`: Update requirements for `CreateReservationPayload`, `ReservationResponse`, and the `BookingSubmission` component's behavior.
