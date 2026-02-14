# register-page Specification

## Purpose
Define requirements for the Arrival Information component on the Register page.

## ADDED Requirements

### Requirement: Arrival Information Display
The arrival information section MUST clearly display the user's flight and pickup details.

#### Scenario: Arrival Information
Given the user is on the Register page
Then the user should see an "Arrival information" section
And it should display the pickup date and time (read-only)
And it should allow entering the airline and flight number.

#### Scenario: Data Persistence
Given the user enters their airline and flight number
Then the airline and flight number should be saved to the store
And persist across page reloads.
