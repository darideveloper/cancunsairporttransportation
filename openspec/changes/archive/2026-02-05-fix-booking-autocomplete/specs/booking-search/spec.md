# Booking Search

## ADDED Requirements

### Requirement: API Response Parsing
The locations search MUST correctly parse the legacy API response format.

#### Scenario: User searches for a location
- Given the user types "Cancun" into the location search field
- When the API returns a response with `{ "items": [...] }` and string geo coordinates
- Then the autocomplete dropdown should display the list of matching locations
- And selecting a location should correctly store the `lat` and `lng` as numbers
