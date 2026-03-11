# Tasks: Fix PayPal Render Race Condition

## Implementation

- [x] Add `useEffect` hook in `src/components/organisms/booking/BookingSubmission.tsx` to handle `renderPayPalButtons` initialization when `paypalId` is present. <!-- id: 1 -->
- [x] Remove the direct `renderPayPalButtons` call from the `handleSubmit` function. <!-- id: 2 -->
- [x] Ensure `paypalId` is reset if the user switches payment methods or if the component re-renders. <!-- id: 3 -->

## Validation

- [x] Verify that the PayPal buttons render correctly after clicking "Submit" for "card" or "paypal" methods. <!-- id: 4 -->
- [x] Ensure that no errors appear in the console related to the `#paypal-button-container` not being found. <!-- id: 5 -->
