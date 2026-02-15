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

### Requirement: Prevent missing keys during build
The build process MUST ensure that both `en.json` and `es.json` have exactly the same keys to avoid missing content on any page.
#### Scenario: Building the application with mismatched translation files
- GIVEN `en.json` has a key `pages.home.title`
- AND `es.json` is missing that key
- WHEN I run `npm run build`
- THEN the command should fail with a non-zero exit code
- AND print exactly which keys are missing in `es.json`.

### Requirement: Improved debugging for missing keys at runtime
The `t()` function MUST notify developers when a key is missing instead of failing silently or returning `undefined`.
#### Scenario: Accessing a non-existent key in development
- GIVEN I am in a development environment
- WHEN a component calls `t('invalid.key')`
- THEN an error should be logged to the console
- AND the returned value should be `MISSING: invalid.key`.

