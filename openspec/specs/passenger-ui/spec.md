# passenger-ui Specification

## Purpose
TBD - created by archiving change create-passenger-information-component. Update Purpose after archive.
## Requirements
### Requirement: Display and capture passenger data
The system SHALL provide a form section to capture essential traveler contact information.

#### Scenario: User enters contact details
- **GIVEN** the `PassengerInformation` component is rendered
- **WHEN** the user enters "John" in the "Full name" field
- **THEN** the `firstName` in the store SHALL be updated to "John"
- **AND** the field SHALL display "John"

#### Scenario: Multi-column layout
- **GIVEN** the component is viewed on a screen larger than 768px (MD)
- **THEN** name fields SHALL appear side-by-side
- **AND** email/phone fields SHALL appear side-by-side
- **AND** the notes field SHALL span the full width

