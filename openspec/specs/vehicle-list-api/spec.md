# vehicle-list-api Specification

## Purpose
TBD - created by archiving change simulate-vehicle-api. Update Purpose after archive.
## Requirements
### Requirement: vehicle-list-fetching
The `VehicleBuyCards` component MUST manage vehicle data fetching asynchronously.

#### Scenario: Verify fetch on mount
- Given the `VehicleBuyCards` component is mounted without `initialVehicles`
- When the component initializes
- Then it MUST call `getVehicles(lang)` from `src/lib/transportation/api.ts`
- AND the `loading` state MUST be set to `true`.

#### Scenario: Verify prop override
- Given the `VehicleBuyCards` component receives `initialVehicles` prop
- When the component initializes
- Then it MUST use the provided vehicles
- AND it MUST NOT call `getVehicles`.

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

