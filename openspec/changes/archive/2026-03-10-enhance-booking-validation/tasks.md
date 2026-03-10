# Tasks: Enhance Booking Form Validation

- [x] Define the `bookingRegistrationSchema` in `src/store/search-form.ts` or a new utility file using Zod.
- [x] Update `SearchFormState` to include an `errors` object.
- [x] Implement `validateField` logic in the store to update field-level errors.
- [x] Connect `PassengerInformation.tsx` to the store's `errors` object and pass them to `Input` components.
- [x] Implement a full-schema validation check in `BookingSubmission.tsx` within the `handleSubmit` function.
- [x] Ensure that `isValid` in `BookingSubmission.tsx` uses the Zod schema's `safeParse` for its boolean value.
- [x] Test the form with invalid inputs and verify that appropriate error messages are displayed.
- [x] Verify that the form correctly handles round-trip specific validation.
- [x] Validate the entire change with `openspec validate enhance-booking-validation`.
