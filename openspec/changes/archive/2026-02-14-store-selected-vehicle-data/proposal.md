# Store Selected Vehicle Data

## Problem
The `Register` page needs to display details of the selected vehicle (image, name, capacity, etc.), but currently, the application only persists the vehicle `token`. Re-fetching this data on the `Register` page is inefficient and requires redundant API calls.

## Solution
Update the `search-form` store (Zustand) to persist the full `SelectedVehicle` object instead of just the token string. This object will include all necessary details (`token`, `name`, `image`, `maxPassengers`, `maxLuggage`, `price`, `currency`, and `type`) populated from the API response and fixed vehicle data.

## Risks
- **Store Size**: Increasing the size of the persisted state in `localStorage`. However, the data size for a single vehicle object is negligible.
- **Breaking Changes**: Any component relying solely on `selectedVehicleToken` as a string will need to be updated to access `selectedVehicle.token`.
