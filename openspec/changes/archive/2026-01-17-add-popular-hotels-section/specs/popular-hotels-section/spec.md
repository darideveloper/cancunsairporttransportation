# Spec: Popular Hotels Section

## ADDED Requirements

### Requirement: Popular Hotels Section Display
The Playa del Carmen page SHALL display a section listing popular hotels with specific visual elements.

#### Scenario: Display Popular Hotels Section
- **Given** the user is viewing the Playa del Carmen page
- **When** they scroll to the bottom of the content
- **Then** they should see a "Most Popular Hotels" / "Hoteles más populares" section
- **And** it should display a grid of cards with hotel names and transportation text
- **And** each card should have a "hotel-location" icon

#### Scenario: View More Destinations
- **Given** the user sees the "View More" button in the Popular Hotels section
- **When** they click it
- **Then** they should be navigated to the Destinations page (`/destinations` or `/es/destinos`)

### Requirement: Popular Hotels Interaction
The cards in the Popular Hotels section SHALL provide quick navigation to the booking form.

#### Scenario: Navigation to Booking Form
- **Given** the user sees the Popular Hotels cards
- **When** they click on any card
- **Then** the page should focus or scroll to the Booking Form
