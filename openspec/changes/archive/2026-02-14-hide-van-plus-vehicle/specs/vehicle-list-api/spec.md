# vehicle-list-api Specification Delta

## MODIFIED Requirements

### Requirement: vehicle-list-fetching
The `getVehicles` function MUST exclude restricted vehicles from the results.

#### ADDED Scenario: Exclude Van Plus
- Given the API response contains a vehicle with ID "5"
- When `getVehicles` processes the response
- Then it MUST filter out this vehicle
- AND the final returned array MUST NOT contain any item with ID "5".
