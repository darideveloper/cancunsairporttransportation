# Form Validation Specification

## Purpose
Prevent booking submission until all required location fields have valid, API-verified selections.

## ADDED Requirements

### Requirement: Disable submit button for invalid locations
The submit button MUST be disabled if either the "Leaving from" or "Going to" location does not have a corresponding valid `LocationData` object in the store.

#### Scenario: Initial state
Given the booking form is loaded
And no locations are selected
Then the "Book Now" button should be disabled

#### Scenario: Partial selection
Given the user has selected a valid "Leaving from" location
But "Going to" is empty or has only raw text
Then the "Book Now" button should be disabled

#### Scenario: Valid selection
Given the user has selected a valid "Leaving from" location
And the user has selected a valid "Going to" location
Then the "Book Now" button should be enabled

### Requirement: Visual feedback for disabled state
When the submit button is disabled, it MUST appear visually distinct strictly using `clsx`.
-   It should have reduced opacity (e.g., `opacity-50`).
-   It should have a `not-allowed` cursor.

#### Scenario: Visual styling of disabled button
Given the submit button is disabled
When the user views the button
Then it should have opacity-50
And the cursor should be not-allowed
