# vehicle-list-api Specification

## Purpose
TBD - created by archiving change simulate-vehicle-api. Update Purpose after archive.
## Requirements
### Requirement: vehicle-list-fetching
The `getVehicles` function MUST exclude restricted vehicles from the results.

#### ADDED Scenario: Exclude Van Plus
- Given the API response contains a vehicle with ID "5"
- When `getVehicles` processes the response
- Then it MUST filter out this vehicle
- AND the final returned array MUST NOT contain any item with ID "5".

### Requirement: vehicle-list-loading
The `VehicleBuyCards` component MUST provide visual feedback during data fetching.

#### Scenario: Render skeleton loader
- Given the component is in a `loading` state
- When the user views the component
- Then a specific Skeleton UI (e.g., pulsing placeholders) MUST be displayed instead of the vehicle list
- AND at least 3 skeleton items SHOULD be shown to mimic content density.

### Requirement: vehicle-list-error
The `VehicleBuyCards` component MUST handle API failures gracefully.

#### Scenario: Render error message
- Given the `getVehicles` API call fails (rejects or throws)
- When the component catches the error
- Then it MUST display a localized error message (e.g., "Error loading vehicles")
- AND the `loading` state MUST be set to `false`.

#### Scenario: Retry capability (Optional)
- Given an error has occurred
- When the user clicks a "Retry" button (if available)
- Then the component MUST attempt to fetch data again.

### Requirement: vehicle-list-empty
The component MUST handle empty result sets.

#### Scenario: Render empty state
- Given the `getVehicles` API returns an empty array `[]`
- When the `loading` state is complete
- Then a localized "No vehicles found" message MUST be displayed.

### Requirement: vehicle-filtering
The `getVehicles` function MUST exclude restricted vehicles from the results.

#### Scenario: Exclude Van Plus
- Given the API response contains a vehicle with ID "5"
- When `getVehicles` processes the response
- Then it MUST filter out this vehicle
- AND the final returned array MUST NOT contain any item with ID "5".

