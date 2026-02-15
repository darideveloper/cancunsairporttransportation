# Execute Reservation Submission

- [x] Create `src/services/reservation.ts` with `createReservation` function.
- [x] Create `src/components/organisms/booking/BookingSubmission.tsx` implementation with validation logic.
- [x] Modify `src/components/atoms/form/Input.tsx` to append `*` to label if `required` is true.
- [x] Modify `src/components/atoms/form/PhoneInput.tsx` to append `*` to label if `required` is true.
- [x] Modify `src/components/molecules/booking/ArrivalInformation.tsx` to remove `required` from `flightNumber` and `airline`.
- [x] Update `src/components/pages/store/Register.astro` to replace the static button with `BookingSubmission`.
- [ ] Verify form validation disables the submit button correctly.
- [ ] Verify successful submission redirects or shows confirmation.
- [ ] Verify error handling displays appropriate messages.
