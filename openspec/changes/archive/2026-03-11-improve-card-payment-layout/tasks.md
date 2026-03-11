# Tasks: Improve Card Payment Layout

## Phase 1: Store & Data Flow
- [x] Update `src/store/search-form.ts` to include `paypalId: string | null` and `setPaypalId: (id: string | null) => void`. <!-- id: 1 -->
- [x] Refactor `src/components/organisms/booking/BookingSubmission.tsx` to use the `paypalId` and `setPaypalId` from the `useSearchFormStore`. <!-- id: 2 -->
- [x] Remove the local `useState` for `paypalId` in `BookingSubmission.tsx`. <!-- id: 3 -->

## Phase 2: UI & Content
- [x] Add `back` key to `paymentMethod` in `src/messages/en.json`. <!-- id: 4 -->
- [x] Add `back` key to `paymentMethod` in `src/messages/es.json`. <!-- id: 5 -->
- [x] Update `src/components/molecules/booking/PaymentMethods.tsx` to include conditional rendering logic:
    - [x] Hide existing content if `paypalId && paymentMethod === 'card'`. <!-- id: 6 -->
    - [x] Implement a "Back" button using the `back` translation key. <!-- id: 7 -->
    - [x] Add the reset logic for `paypalId` on button click. <!-- id: 8 -->
- [x] Update `src/components/organisms/booking/RegisterForm.tsx` to include a `useEffect` that scrolls to the `SelectedVehicleCard` when `paypalId` is set and `paymentMethod === 'card'`. <!-- id: 12 -->

## Phase 3: Validation
- [x] Verify that clicking "Continue" with "Card" method correctly hides the payment method list. <!-- id: 9 -->
- [x] Verify that clicking "Back" correctly restores the payment method list and returns the "Continue" button in `BookingSubmission`. <!-- id: 10 -->
- [x] Ensure that selecting "PayPal" (the method) does not trigger the "Back" button UI (unless the user specifically requested it for both). <!-- id: 11 -->
- [x] Verify that the page scrolls up to the `SelectedVehicleCard` when the Card payment initialization is successful. <!-- id: 13 -->
