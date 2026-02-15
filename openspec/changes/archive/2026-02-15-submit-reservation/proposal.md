# Implement Reservation Submission

## Summary
Add functionality to submit the reservation form on the register page to the `/legacy/create/` API endpoint, with improved form validation and UI hints.

## Motivation
Enable users to complete their booking by sending their details and selected vehicle choice to the backend system, ensuring all required data is present before submission.

## Proposed Changes
1.  Add a new `ReservationService` to handle API communication.
2.  Update `Input` and `PhoneInput` components to visually indicate required fields with an asterisk `*`.
3.  Modify `ArrivalInformation` to make flight number optional, matching API requirements.
4.  Create a `BookingSubmission` component to handle the submission logic, validation (disabling button until valid), and loading states.
5.  Replace the static "Book Now" button in `Register.astro` with the interactive `BookingSubmission` component.
6.  Add success/error handling (e.g., redirect to success page or show error toast).
