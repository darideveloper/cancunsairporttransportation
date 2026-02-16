# reservation-detail-layout Specification

## Purpose
TBD - created by archiving change create-reservation-detail-layout. Update Purpose after archive.
## Requirements
### Requirement: The Reservation Detail page MUST display the current reservation status
The page MUST prioritize the visibility of the reservation status through a clear visual indicator (e.g., a success icon) and a labeled status badge.

#### Scenario: Viewing a confirmed reservation
- **Given** a user is viewing their reservation details
- **When** the reservation is confirmed
- **Then** a prominent success icon and "CONFIRMED" badge MUST be displayed.

### Requirement: The Reservation Detail page MUST display a detailed data table
The system SHALL present all key reservation metrics in a structured table or list layout to ensure readability.

#### Scenario: Viewing reservation details
- **Given** a reservation with code, service type, passengers, origin, destination, and pickup date
- **When** the detail page loads
- **Then** it MUST display these fields in a clean, readable table format.

### Requirement: The Reservation Detail page MUST show a payment summary sidebar
A dedicated summary area SHALL exist to display financial information and security trust signals.

#### Scenario: Viewing payment information
- **Given** a reservation has a total price and service type
- **When** the user looks at the sidebar
- **Then** a dark card MUST display the total price and service description along with SSL/Stripe trust badges.

### Requirement: Support for multi-language labels
All UI components within the Reservation Detail layout SHALL be fully localized according to the current language context.

#### Scenario: Visiting the page in Spanish
- **Given** the user is on `/es/detalle-mi-reservacion`
- **When** the page renders
- **Then** all labels including "Reservation code", "Service", "Payment methods", etc., MUST be translated into Spanish.

