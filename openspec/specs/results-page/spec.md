# results-page Specification

## Purpose
TBD - created by archiving change redirect-booking-results. Update Purpose after archive.
## Requirements
### Requirement: Display Booking Summary
The results page SHALL display a clear summary of the user's booking selection to provide immediate feedback.

#### Scenario: Display persisted search data
- **GIVEN** a user has been redirected from the booking form
- **WHEN** the results page loads
- **THEN** the `BookingSummary` component should retrieve data from the Zustand store
- **AND** display:
  - Origin and Destination names
  - Departure Date and Time
  - Return Date and Time (if applicable)
  - Number of passengers
  - Current currency.

### Requirement: i18n Support for Summary
The booking summary SHALL be fully translated.

#### Scenario: Display summary in Spanish
- **GIVEN** the user is on the `/es/resultados` page
- **WHEN** the summary component renders
- **THEN** all labels (e.g., "Leaving from", "Pickup date") must be in Spanish.

