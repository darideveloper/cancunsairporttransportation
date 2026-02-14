# Validate Location Selection

## Goal
Prevent users from submitting the booking form with invalid or unselected locations by enforcing API-validated selections and disabling the submit action until requirements are met.

## Problems and Solutions
1.  **Problem**: Users can type text into the location fields without selecting a valid option from the dropdown. The store currently retains the previous valid selection object even if the text is changed.
    *   **Solution**: Update the `search-form` store to clear the `LocationData` object whenever the user inputs raw text (string), ensuring state consistency.

2.  **Problem**: The submit button is always active, allowing users to submit partial or invalid data.
    *   **Solution**: Update the `BookingForm` to calculate validity (both `locationFromData` and `locationToData` must be present) and disable the `SubmitButton` when invalid.

## Components and Systems
-   **Store**: `src/store/search-form.tsx`
-   **UI**: `src/components/organisms/BookingForm.tsx`
-   **UI**: `src/components/atoms/form/SubmitButton.tsx`
