# validation-enhancements Specification Delta (improve-booking-validation)

## ADDED Requirements

### Requirement: Include optional arrival details in registration
The booking registration form SHALL include fields for "Airline" and "Flight Number" that are optional for the user. If provided, these values SHALL be included in the reservation payload.

#### Scenario: User provides arrival fields
- **Given** a user is on the registration page (`/register`)
- **And** the "Airline" and "Flight Number" fields are filled out
- **When** the user clicks the "Submit" button
- **Then** the registration payload SHALL include the `airline` and `flight_number` values

#### Scenario: User omits optional arrival fields
- **Given** a user is on the registration page (`/register`)
- **And** the "Airline" and "Flight Number" fields are empty
- **When** the user clicks the "Submit" button
- **Then** the registration process SHALL still proceed successfully
- **And** the registration payload MAY omit or send these fields as null/empty
