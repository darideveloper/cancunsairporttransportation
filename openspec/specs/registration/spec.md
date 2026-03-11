# registration Specification

## Purpose
TBD - created by archiving change render-return-info-register. Update Purpose after archive.
## Requirements
### Requirement: Display return information for round trips
The registration page SHALL display the confirmed return date and time if the user has selected a round-trip booking. These details SHALL be presented in a read-only format to inform the user of their selection without allowing modification at this stage.

#### Scenario: User selects a round trip and proceeds to registration
- **Given** a user has selected "Round Trip" and specified return details in the search form
- **When** the user is on the registration page (`/register`)
- **Then** a "Return Information" section SHALL be visible
- **And** it SHALL display the "Return Date" and "Return Time"
- **And** both fields SHALL be read-only and disabled for input

### Requirement: Layout Consistency for Payment Sections
The payment section SHALL adjust its layout based on the active state of the payment method to ensure all information remains accessible.

#### Scenario: Payment section with active card form
- **Given**: The user has selected "Credit / Debit Card" and clicked "CONTINUE".
- **When**: The card form is rendered in the `BookingSubmission` component.
- **Then**: The parent container SHOULD allow the card form to expand downwards while remaining part of the sticky sidebar.
- **And**: The vehicle summary and price total SHALL remain at the top of the sticky sidebar to provide context for the transaction.

