# Tasks: Booking Redirection and Results Mapping

## Phase 1: Booking Form Logic

- [x] **T1.1**: Implement `handleSubmit` in `BookingForm.tsx`.
  - Prevent default form submission.
  - Validate form data (`isValid`).
  - Determine `resultsUrl`: if `window.location.pathname` starts with `/es`, use `/es/resultados`, otherwise `/results`.
  - Execute redirection using `window.location.assign(resultsUrl)`.

## Phase 2: Validation

- [x] **T2.1**: Verify redirection from Home to Results (English).
- [x] **T2.2**: Verify redirection from Home to Results (Spanish).
- [x] **T2.3**: Verify data persistence in Zustand store across navigation.
