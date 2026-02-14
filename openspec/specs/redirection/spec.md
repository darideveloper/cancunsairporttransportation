# redirection Specification

## Purpose
TBD - created by archiving change redirect-booking-results. Update Purpose after archive.
## Requirements
### Requirement: Redirect on Form Submission
The `BookingForm` component MUST navigate the user to the results page upon valid form submission.

#### Scenario: User submits a valid search
- **GIVEN** the user has filled in "Leaving from" and "Going to" locations
- **AND** the "Search" button is enabled
- **WHEN** the user clicks the "Search" button
- **THEN** the form should prevent default submission
- **AND** the browser should navigate to the localized results URL provided via props.

#### Scenario: User attempts to submit an invalid search
- **GIVEN** the required locations are not selected
- **WHEN** the user attempts to click the "Search" button
- **THEN** the button should remain disabled
- **AND** no navigation should occur.

