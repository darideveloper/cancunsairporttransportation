# Tasks: Improve Booking Registration Validation

- [x] Update `CreateReservationPayload` in `src/lib/transportation/legacy-api.types.ts` to include `airline` as an optional string.
- [x] Add `airline` and `flightNumber` fields to the `bookingRegistrationSchema` in `src/store/search-form.ts` as optional strings.
- [x] Update `ArrivalInformation.tsx` to ensure "Airline" and "Flight Number" are not mandatory and implement blur-based state syncing.
- [x] Update `handleSubmit` in `BookingSubmission.tsx` to include the `airline` field in the API request payload.
- [x] Verify that the registration process works correctly with and without these fields on the `/register` page.
