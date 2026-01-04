# Tasks: Booking Form State & Dynamic Layout

- [x] Update `src/store/search-form.tsx` to implement the full `SearchFormState` interface and export the hook. <!-- id: 0 -->
- [x] Refactor `LocationSelect.tsx` to accept `value`, `onChange`, and `disabled` props. <!-- id: 1 -->
- [x] Refactor `DateInput.tsx` to accept `value`, `onChange`, and `disabled` props. <!-- id: 2 -->
- [x] Refactor `TimeInput.tsx` to accept `value`, `onChange`, and `disabled` props. <!-- id: 3 -->
- [x] Refactor `PassengerInput.tsx` to accept `value`, `onChange`, and `disabled` props. <!-- id: 4 -->
- [x] Update `TripTypeControls.tsx` to connect to `useSearchFormStore`. <!-- id: 5 -->
- [x] Update `CurrencyControls.tsx` to connect to `useSearchFormStore`. <!-- id: 6 -->
- [x] Create `src/components/organisms/BookingFields.tsx` to implement the dynamic field doubling logic. <!-- id: 7 -->
- [x] Update `BookingForm.astro` to replace individual field atoms with `BookingFields` and pass necessary translations. <!-- id: 8 -->
- [x] Verify `SubmitButton` relies on the store or implement a connection if needed (optional). <!-- id: 9 -->
