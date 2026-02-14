# selected-vehicle-persistence Specification

## Purpose
TBD - created by archiving change store-selected-vehicle-data. Update Purpose after archive.
## Requirements
### Requirement: Persist full selection details
  - The application MUST persist the full `SelectedVehicle` object instead of just the token.
#### Scenario: Selected vehicle is null
  - Given no vehicle is selected
  - Then the stored value should be `null`.
#### Scenario: Selecting a vehicle
  - Given a user browses the vehicle list
  - When they select a vehicle
  - Then the store should persist `token`, `name`, `type`, `image`, `maxPassengers`, `maxLuggage`, `price`, and `currency`.

### Requirement: Retrieve vehicle type
  - The application MUST retrieve the friendly vehicle type name from configuration.
#### Scenario: Fetching vehicle data
  - Given the `VehicleBuyCard` component is populated
  - When fetching vehicle data via the API
  - Then the application should resolve the vehicle type from `src/data/vehicle-features.ts`.

### Requirement: Update store structure
  - The `search-form` store MUST transition from holding a token string to holding a vehicle object.
#### Scenario: Existing store state
  - Given existing users may have a stored token
  - When the app updates
  - Then the store should migrate or reset to accommodate the new object structure.

