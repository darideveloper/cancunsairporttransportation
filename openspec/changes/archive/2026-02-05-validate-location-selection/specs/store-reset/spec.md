# Store Reset Specification

## Purpose
Ensure that the application state accurately reflects whether a valid location has been selected from the API or if the user is currently typing raw text.

## ADDED Requirements

### Requirement: Clear location data on text input
When the user modifies the text in the location input (sending a string value to the store), any previously selected `LocationData` object MUST be cleared (set to `null`).

#### Scenario: User types after selecting a location
Given the user has selected "Cancun Airport" and `locationFromData` is populated
When the user types "Cancun A" into the input
Then `locationFrom` is updated to "Cancun A"
And `locationFromData` is set to `null`

#### Scenario: User selects a location
Given the user selects "Hotel X" from the autocomplete list
When the store receives the `LocationData` object
Then `locationFrom` is updated to "Hotel X"
And `locationFromData` is populated with the object
