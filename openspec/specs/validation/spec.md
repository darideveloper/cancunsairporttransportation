# validation Specification

## Purpose
TBD - created by archiving change enhance-booking-form. Update Purpose after archive.
## Requirements
### Requirement: The Booking Form must validate required fields before submission
The "Leaving from" field MUST be mandatory. If the user attempts to submit the form without selecting a value, the submission MUST be blocked.

#### Scenario: User submits booking form without locations
Given the user is on the booking form
And the "Leaving from" field is empty
When the user clicks "Book Now"
Then the form should not be submitted
And a validation error should be displayed for "Leaving from"

