# Tasks: Fix PayPal Currency Mismatch

## Implementation

### Register Page Cleanup
- [x] Remove the static PayPal SDK `<script>` tag from `src/components/pages/store/Register.astro`. <!-- id: 1 -->

### Booking Submission Refactor
- [x] Add `isSdkLoaded` state to `BookingSubmission.tsx`. <!-- id: 2 -->
- [x] Implement `useEffect` to dynamically load/reload the PayPal SDK when `currency` changes. <!-- id: 3 -->
- [x] Update the button rendering `useEffect` to include `isSdkLoaded` in its dependency array and guard logic. <!-- id: 4 -->
- [x] Ensure that `renderPayPalButtons` uses the globally available `window.paypal` after confirming the SDK is loaded. <!-- id: 5 -->

## Validation
- [x] Verify that selecting `USD` in the store loads the SDK with `currency=USD`. <!-- id: 6 -->
- [x] Verify that selecting `MXN` in the store loads the SDK with `currency=MXN`. <!-- id: 7 -->
- [x] Confirm that clicking "Submit" correctly renders the PayPal buttons without currency validation errors in the console. <!-- id: 8 -->
