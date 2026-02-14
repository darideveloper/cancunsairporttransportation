# Quote API integration

## ADDED Requirements

### Requirement: Real API Communication
The `getVehicles` function MUST fetch data from the configured `PUBLIC_API_BASE` endpoint and handle network states.

#### Scenario: Successful Request
Given the user has filled out the search form with valid data
When the `Results` page loads
Then `getVehicles` sends a POST request to `/legacy/quote/` with the correct payload derived from `SearchFormStore`.

#### Scenario: API Error
Given the API is down or returns 500
When the `Results` page loads
Then `getVehicles` throws an error
And the UI displays the error state (handled by component).

#### Scenario: No Availability
Given the API returns a 404 error with code `availability`
When the `Results` page loads
Then `getVehicles` returns an empty array
And the UI displays the "No Availability" component.

### Requirement: Static Data Enrichment
The API response items MUST be enriched with static descriptions, features, and ratings from `src/data/vehicle-features.ts` based on the vehicle ID.

#### Scenario: Map Features
Given the API returns a vehicle with ID "1"
When mapping the response
Then the vehicle props include the description and items list from `vehicleFeatures["1"]` matching the current language.

#### Scenario: Description Interpolation
Given the vehicle data contains a `{pax}` placeholder in the description
When mapping the API response to component props
Then the `{pax}` placeholder is replaced with the `passengers` value from the API response items.
