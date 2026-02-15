# return-info-display Specification

## Purpose
TBD - created by archiving change show-return-info-on-register. Update Purpose after archive.
## Requirements
### Requirement: Show return information on register page
The registration page SHALL display return trip information to the user when a round trip is selected.

#### Scenario: Round trip selected
- GIVEN the user is on the register page
- AND the `tripType` is set to "roundTrip"
- THEN the return information section should be visible.

#### Scenario: One way selected
- GIVEN the user is on the register page
- AND the `tripType` is set to "oneWay"
- THEN the return information section should NOT be visible.

#### Scenario: Read-only fields
- GIVEN the return information section is displayed
- THEN the "Return Date" field MUST be read-only.
- AND the "Return Time" field MUST be read-only.

