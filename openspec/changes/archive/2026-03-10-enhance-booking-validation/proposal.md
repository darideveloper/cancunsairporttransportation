# Proposal: Enhance Booking Form Validation

## Motivation
The current booking registration form lacks robust validation. It only checks for non-empty fields, allowing invalid email addresses and phone numbers to be submitted. This leads to API errors and potential data integrity issues. Furthermore, there is no real-time feedback for the user when a field is invalid, and the "Submit" button is disabled without explanation.

## Proposed Changes
- Introduce a Zod-based validation schema for the booking registration form.
- Update the `useSearchFormStore` to track validation errors.
- Enhance the `PassengerInformation` and `BookingSubmission` components to provide real-time feedback and detailed error messages.
- Ensure that the "Submit" button logic is strictly tied to the validation schema.
- Add support for round-trip specific validation (requiring return details).

## Expected Outcome
- Users will receive immediate feedback if they enter an invalid email or phone number.
- The form will only allow submission of valid data, reducing API failures.
- The user experience will be improved with clear error messages and state indicators.
