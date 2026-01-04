# Spec: Centralized State Management

## ADDED Requirements

### Requirement: Centralized Store for Booking Data
The application MUST use a Zustand store to manage all booking form state.

#### Scenario: Initial State
Given the user loads the page
Then the store should initialize with default values:
  - tripType: 'roundTrip'
  - currency: 'MXN'
  - passengers: 1
  - atomic fields: empty strings

### Requirement: Trip Type Updates
The `tripType` state MUST update when the user interacts with the controls.

#### Scenario: Switching to One Way
Given the user clicks "One Way"
Then the `tripType` in the store should update to 'oneWay'
And subscribed components should re-render.

### Requirement: Field Updates
The store state MUST update when the user modifies any form input.

#### Scenario: Typing in Date
Given the user updates the Departure Date
Then the `departureDate` in the store should update
And the input value should reflect the change.
