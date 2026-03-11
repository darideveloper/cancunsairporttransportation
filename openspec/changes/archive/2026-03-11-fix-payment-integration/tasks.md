# Tasks: Standardize Payment Integration

## 1. Store & Type Update
- [x] Add `reservationId` (string) and `uuid` (string) to `SearchFormState` interface in `src/store/search-form.ts`. <!-- id: 1 -->
- [x] Add `setReservationId` and `setUuid` actions to `useSearchFormStore` in `src/store/search-form.ts`. <!-- id: 2 -->
- [x] Update `partialize` in `persist` configuration to include `reservationId` and `uuid`. <!-- id: 3 -->
- [x] Standardize `ReservationResponse` interface in `src/lib/transportation/legacy-api.types.ts` to include `reservation_id` (string), `uuid` (string), and mandatory `paypal_id` (string). <!-- id: 4 -->

## 2. API Implementation Update
- [x] Update `BookingSubmission.tsx` to generate absolute `success_url` and `cancel_url` including the `code` parameter. <!-- id: 5 -->
- [x] Refactor `BookingSubmission.tsx` payload mapping to use snake_case for all keys (specifically `first_name`, `last_name`, `email_address`, `comments`, and `flight_number`). <!-- id: 6 -->
- [x] Standardize response consumption in `BookingSubmission.tsx` to use the hoisted `paypal_id` and update both `useSearchFormStore` and `useReservationStore`. <!-- id: 7 -->

## 3. Page & Flow Refinement
- [x] Update `src/components/pages/store/ThankYou.astro` to read the `code` parameter from the URL and pass it to the `TransactionStatus` component. <!-- id: 8 -->
- [x] Update the `cash` payment method logic in `BookingSubmission.tsx` to ensure it redirects to the success page with the correct code. <!-- id: 9 -->

## 4. Verification
- [x] Verify that the registration payload contains correctly mapped snake_case keys. <!-- id: 10 -->
- [x] Confirm that the PayPal buttons render using the hoisted `paypal_id` from the backend. <!-- id: 11 -->
- [x] Ensure `reservation_id` and `uuid` are saved to localStorage after a successful submission. <!-- id: 12 -->
- [x] Confirm the "View my reservation" link on the Thank You page correctly redirects to the reservation detail page. <!-- id: 13 -->
