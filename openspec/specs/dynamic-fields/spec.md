# dynamic-fields Specification

## Purpose
TBD - created by archiving change feat-booking-form-state. Update Purpose after archive.
## Requirements
### Requirement: Input Duplication for Round Trip
The form MUST display a second set of inputs (Return Trip) when `tripType` is 'roundTrip'.

#### Scenario: Round Trip Enabled
Given `tripType` is 'roundTrip'
Then the form should display two rows of inputs:
  1. Departure Trip (Location From/To, Date, Time, Passengers)
  2. Return Trip (Location From/To, Date, Time, Passengers)

#### Scenario: One Way Enabled
Given `tripType` is 'oneWay'
Then the form should display only the Departure Trip inputs.

### Requirement: Read-Only Fields in Return Trip
Specific fields in the Return Trip section MUST be read-only/disabled.

#### Scenario: Return Trip Fields
Given the Return Trip row is visible
Then the "Location From", "Location To", and "Passengers" inputs in that row should be disabled
And the "Date" and "Time" inputs in that row should be editable.

