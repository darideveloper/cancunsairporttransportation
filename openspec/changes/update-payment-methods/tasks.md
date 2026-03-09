# Tasks: Update Payment Methods

- [ ] Update `src/store/search-form.ts` <!-- id: 0 -->
  - [ ] Change `paymentMethod` type to `"paypal" | "card" | "cash"`.
  - [ ] Update initial state to `"card"`.
  - [ ] Update `setPaymentMethod` parameter type.

- [ ] Update Translations <!-- id: 1 -->
  - [ ] In `src/messages/en.json`, update `paymentMethod` labels:
    - Include labels for "PayPal", "Card", and "Cash".
    - Update/Add instructional text for each method.
  - [ ] In `src/messages/es.json`, update `paymentMethod` labels:
    - Include labels for "PayPal", "Tarjeta (Crédito o Débito)", and "Efectivo".
    - Update/Add instructional text for each method.

- [ ] Update `PaymentMethod.tsx` Component <!-- id: 2 -->
  - [ ] Update the layout to display three options.
  - [ ] Import/Use icons for all three options (PayPal logo, Credit Card icons, Cash icon).
  - [ ] Ensure state binding still works with the updated store values (`"paypal"`, `"card"`, `"cash"`).

- [ ] Update `BookingSubmission.tsx` Component <!-- id: 3 -->
  - [ ] Update the mapping logic:
    - `paypal` -> `payment_method: "PAYPAL"`.
    - `card` -> `payment_method: "STRIPE"`.
    - `cash` -> `payment_method: "CASH"`.
  - [ ] Conditional `pay_at_arrival` logic:
    - Include `pay_at_arrival: 1` ONLY for cash.
    - Ensure it is OMITTED (not `0`) for paypal and card.
  - [ ] Verify that redirects to payment link (PayPal/Card) and success page (Cash) work as expected.

- [ ] Verification <!-- id: 4 -->
  - [ ] Manually test all three methods.
  - [ ] Confirm the correct payload is sent to the API for each method.
