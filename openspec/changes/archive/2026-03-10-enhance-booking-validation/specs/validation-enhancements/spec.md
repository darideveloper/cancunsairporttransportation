# validation-enhancements Specification

## Purpose
This specification defines the validation requirements for the booking registration form to ensure data integrity and a consistent user experience.

## ADDED Requirements

### Requirement: Robust Registration Validation
The booking registration form MUST validate all required fields using a schema-based approach (e.g., Zod).

#### Scenario: Invalid Email Format
- **Given** the user is on the registration page
- **When** the user enters an invalid email address (e.g., "invalid-email")
- **Then** the form SHALL NOT be submitted
- **And** a clear error message SHALL be displayed near the email field

#### Scenario: Missing Required Fields
- **Given** the user has not filled in all required passenger information (First Name, Last Name, Email, Phone)
- **When** the user attempts to submit the form
- **Then** the "Submit" button SHALL be disabled OR an error message SHALL be displayed for each missing field

#### Scenario: Phone Number Format
- **Given** the user is entering their phone number
- **When** the number is less than 8 characters
- **Then** the field SHALL be marked as invalid with an error message

### Requirement: Round-Trip Contextual Validation
The form MUST dynamically adjust its validation requirements based on the selected trip type.

#### Scenario: Round-Trip with Missing Return Details
- **Given** the user has selected a "Round Trip"
- **When** the `returnDate` or `returnTime` is missing or invalid in the store
- **Then** the registration form SHALL be considered invalid
- **And** submission SHALL be blocked

### Requirement: Real-time Feedback
The UI MUST provide immediate visual feedback for validation errors.

#### Scenario: Displaying Error Messages
- **Given** a field in the `PassengerInformation` component is invalid
- **When** the field loses focus (onBlur) or its value changes
- **Then** the `Input` component SHALL display the corresponding error message using the `error` prop.
