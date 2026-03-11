# Proposal: Update Payment Providers to Multi-Payment Flow

Update the booking and checkout process to support **PayPal Account**, **Credit Card (via PayPal SDK)**, and **Cash at Arrival**. This involves updating the Zustand store logic, integrating the PayPal JS SDK on the frontend, and implementing the new API capture flow.

## User Review Required

> [!IMPORTANT]
> - Ensure `PUBLIC_PAYPAL_CLIENT_ID` is available in the environment variables.
> - The current implementation will replace the "Redirect to PayPal" logic with an "In-page PayPal/Card Buttons" logic.

- [ ] Confirm `PUBLIC_PAYPAL_CLIENT_ID` value for development/production.
- [ ] Verify the success and cancel redirect URLs match the backend configuration.

## Proposed Changes

### Store & API
- Update `CreateReservationPayload` to include `paypal_id` and `uuid` in the response.
- Add `capturePayment` API call for handling the PayPal approval flow.
- Map store `paymentMethod` values to backend expected values (`card` -> `credit_card`).

### UI & UX
- Inject PayPal JS SDK script in the `Register` page.
- Update `BookingSubmission` component to:
  - Call `createReservation` first.
  - If `paypal` or `card` is selected, render PayPal buttons instead of redirecting.
  - Handle `onApprove` by calling the `capture` endpoint.
  - Show loading states during reservation creation and payment capture.

## Impact

- **Checkout Flow**: Users will no longer be redirected away from the site immediately upon clicking "Submit" for PayPal/Card. They will interact with the PayPal SDK buttons within the site.
- **Cash Payments**: Will continue to be handled by direct reservation creation followed by a redirect to the success page.
