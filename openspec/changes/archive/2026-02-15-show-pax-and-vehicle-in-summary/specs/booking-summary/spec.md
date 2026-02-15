# booking-summary Specification

## ADDED Requirements

### Requirement: Display detailed vehicle and passenger info
The booking summary SHALL display the number of selected passengers, the vehicle name, and the maximum capacity in a specific format.

#### Scenario: Selected 2 passengers for a Van
- **GIVEN** the user has selected 2 passengers in the search form
- **AND** the user has selected a 'Van' vehicle with max capacity of 8
- **WHEN** the `BookingSummary` is rendered
- **THEN** it should display "X 2 Van with capacity for up to 8 passengers" in English
- **AND** it should display "X 2 Van con capacidad de hasta 8 pasajeros" in Spanish
