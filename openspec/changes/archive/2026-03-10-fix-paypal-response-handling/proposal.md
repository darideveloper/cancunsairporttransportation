# Proposal: Fix PayPal Response Handling

Fix the "No payment method initialization data received" error by updating the frontend to support the `payment_data.url` field returned by the backend in the `createReservation` response. This field contains the PayPal Order ID/Token required to initialize the PayPal buttons.

## User Review Required

> [!IMPORTANT]
> - This fix assumes that `payment_data.url` consistently contains the PayPal token/order ID when `payment_method` is `paypal` or `credit_card`.

- [ ] Confirm if `payment_data.url` is the intended field for the PayPal token in all cases.

## Why
The backend API for Cancun's Airport Transportation has updated its response format for the `createReservation` endpoint. Instead of providing `paypal_id` at the root, it now nests the PayPal token/order ID inside a `payment_data.url` field. The current frontend implementation strictly expects the root-level field, causing a "No payment method initialization data received" error and preventing users from completing digital payments.

## What Changes

### API Types
- Update `ReservationResponse` in `src/lib/transportation/legacy-api.types.ts` to include the `payment_data` object with a `url` string property.

### Booking Submission Logic
- Update `handleSubmit` in `src/components/organisms/booking/BookingSubmission.tsx` to:
  - Extract the PayPal ID from `response.paypal_id` OR `response.payment_data.url`.
  - Use the extracted ID to call `renderPayPalButtons`.

## Impact
- **Payment Flow**: Resolves the error that prevents users from paying with PayPal/Credit Card when the backend returns the token in the `payment_data` structure.
- **Backward Compatibility**: Maintains support for `paypal_id` and `payment_link` if the backend reverts to those formats.
