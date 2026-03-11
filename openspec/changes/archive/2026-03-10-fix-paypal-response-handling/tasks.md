# Tasks: Fix PayPal Response Handling

## Implementation

- [x] Update `ReservationResponse` in `src/lib/transportation/legacy-api.types.ts` to include the `payment_data` property. <!-- id: 1 -->
- [x] Update `handleSubmit` in `src/components/organisms/booking/BookingSubmission.tsx` to handle `payment_data.url` as a fallback for `paypal_id`. <!-- id: 2 -->

## Validation

- [x] Verify the payment flow works as expected by mocking the API response with `payment_data`. <!-- id: 3 -->
- [x] Ensure that existing "cash" payment and "payment_link" redirection flows still work. <!-- id: 4 -->
