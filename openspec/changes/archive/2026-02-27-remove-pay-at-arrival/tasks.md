# Tasks: Remove `pay_at_arrival` from Reservation Submission

- [x] Update `src/lib/transportation/legacy-api.types.ts` to comment out `pay_at_arrival` in `CreateReservationPayload`. <!-- id: 0 -->
- [x] Update `src/components/organisms/booking/BookingSubmission.tsx` to remove `pay_at_arrival` from the active payload and comment it out instead. <!-- id: 1 -->
- [x] Update `docs/ReservationCreateProxyView-external.md` to reflect that `pay_at_arrival` is no longer required in the current implementation. <!-- id: 2 -->
- [x] Verify that Stripe and PayPal payment flows are unaffected by the removal of the field. <!-- id: 3 -->
- [x] Verify that the reservation is still created on the backend through a test submission (if applicable). <!-- id: 4 -->
