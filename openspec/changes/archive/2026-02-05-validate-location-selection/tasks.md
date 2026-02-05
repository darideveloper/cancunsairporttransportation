# Implementation Tasks

-   [x] **Store Update**: Modify `setLocationFrom` and `setLocationTo` in `src/store/search-form.tsx` to set `data` fields to `null` when receiving string input. <!-- id: 0 -->
-   [x] **Submit Button Update**: Update `SubmitButton.tsx` to accept and handle a `disabled` prop with appropriate styling (e.g., `opacity-50`, `cursor-not-allowed`). <!-- id: 1 -->
-   [x] **Form Logic Update**: Update `BookingForm.tsx` to derive `isValid` state from the store (checking existence of `locationFromData` and `locationToData`) and pass it to `SubmitButton`. <!-- id: 2 -->
