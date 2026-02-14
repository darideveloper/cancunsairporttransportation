# state-management Specification

## MODIFIED Requirements

### Requirement: Centralized Store for Booking Data
The application MUST use a Zustand store to manage all booking form state, including flight details.

#### Scenario: Initial State
Given the user loads the page
Then the store should initialize with default values:
  - tripType: 'roundTrip'
  - currency: 'MXN'
  - passengers: 1
  - airline: empty string
  - flightNumber: empty string
  - atomic fields: empty strings

## ADDED Requirements

### Requirement: Flight Information Updates
The `airline` and `flightNumber` state MUST update when the user enters the corresponding information.

#### Scenario: Typing in Airline
Given the user types an airline name
Then the `airline` in the store should update
And the change should persist across sessions.

#### Scenario: Typing in Flight Number
Given the user types a flight number
Then the `flightNumber` in the store should update
And the change should persist across sessions.
