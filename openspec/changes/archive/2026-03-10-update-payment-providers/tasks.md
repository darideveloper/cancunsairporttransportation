# Tasks: Update Payment Providers

- [x] Update `src/lib/transportation/legacy-api.types.ts` <!-- id: 1 -->
    - [x] Update `ReservationResponse` with `paypal_id` and `uuid`.
    - [x] Add `CapturePaymentPayload` and `CapturePaymentResponse`.
- [x] Update `src/lib/transportation/api.ts` <!-- id: 2 -->
    - [x] Implement `capturePayment` function.
- [x] Update `.env` and `env.d.ts` <!-- id: 3 -->
    - [x] Add `PUBLIC_PAYPAL_CLIENT_ID` to `.env`.
    - [x] Add `PUBLIC_PAYPAL_CLIENT_ID` to `ImportMetaEnv`.
- [x] Inject PayPal JS SDK in `src/components/pages/store/Register.astro` <!-- id: 4 -->
    - [x] Add the `<script>` tag using `import.meta.env.PUBLIC_PAYPAL_CLIENT_ID`.
- [x] Update `src/components/organisms/booking/BookingSubmission.tsx` <!-- id: 5 -->
    - [x] Add state for `paypal_id` and `reservation_id`.
    - [x] Update `handleSubmit` to handle the new `payment_method` logic.
    - [x] Implement `renderPayPalButtons` logic within the component (using `useEffect` or direct initialization).
    - [x] Add the `paypal-button-container` div in the JSX.
    - [x] Implement mapping for store `paymentMethod` to backend `payment_method`.
    - [x] Handle PayPal `onApprove` by calling `capturePayment` and then redirecting.
    - [x] Add cleanup logic for PayPal buttons if the component re-renders or method changes.
