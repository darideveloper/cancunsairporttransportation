# api-integration Specification

## Purpose
TBD - created by archiving change fix-return-date-api-payload. Update Purpose after archive.
## Requirements
### Requirement: Pass Return Schedule in Payload
The system MUST construct the API request payload to include the return date and time when applicable. This ensures round-trip bookings are correctly processed by the backend.

#### Scenario: Include Return Date for Round Trips
Given a user selects "Round Trip" and selects a departure date/time AND a return date/time
When the user submits the search form
Then the `getVehicles` function constructs a payload where `end.pickup` contains the formatted return date and time (e.g., "YYYY-MM-DD HH:mm").

#### Scenario: Omit Return Date for One Way Trips
Given a user selects "One Way"
When the user submits the search form
Then the `getVehicles` function constructs a payload where `end.pickup` is undefined or omitted.

### Requirement: Validate Return Schedule
The system MUST validate that the return schedule is provided for round-trip bookings to prevent incomplete API requests.

#### Scenario: Validate Required Date/Time for Round Trips
Given a user selects "Round Trip"
When the user attempts to search without a return date or time
Then the system should ensure both fields are present before making the API request.

