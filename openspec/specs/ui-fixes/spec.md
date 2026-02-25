# ui-fixes Specification

## Purpose
TBD - created by archiving change fix-collapsed-booking-inputs. Update Purpose after archive.
## Requirements
### Requirement: REQ-001 - Form inputs MUST fill the available container width.
Inputs MUST NOT collapse to their intrinsic width and MUST always stretch to fill 100% of their parent container's width, even in browsers with stubborn native pickers like Safari.

#### Scenario: Full-width inputs on mobile
- GIVEN a mobile device
- WHEN a form with date or time inputs is rendered
- THEN the inputs MUST span the full width of their allocated column or container.

### Requirement: REQ-002 - Form inputs MUST maintain a minimum height.
To ensure accessibility and visual consistency, all form inputs MUST have a consistent minimum height.

#### Scenario: Consistent touch targets
- GIVEN a form
- WHEN rendered on any device
- THEN all inputs (including date and time) MUST have a minimum height of at least 48px (3rem).

