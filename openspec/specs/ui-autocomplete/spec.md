# ui-autocomplete Specification

## Purpose
TBD - created by archiving change replace-fixed-locations-with-autocomplete. Update Purpose after archive.
## Requirements
### Requirement: The component must fetch results based on user input
The component MUST listen to user input and asynchronously fetch matching locations from the backend proxy after a debounce period.
#### Scenario: User types a search term
- **Given** the `LocationAutocomplete` component is rendered
- **When** the user types "Playa" into the input
- **And** waits for 500ms (debounce)
- **Then** the component should trigger a fetch to the endpoint `${PUBLIC_LEGACY_API_URL}/api/v1/autocomplete-affiliates`
- **And** include the header `app-key` with the value from `PUBLIC_LEGACY_API_KEY`
- **And** show a "Loading..." indicator (optional)
- **And** upon response, display a dropdown list of results.

### Requirement: The component must display search results
Returned results MUST be presented in a clear, clickable dropdown list to allow user selection, including address context.

#### Scenario: Displaying Results
- **Given** the API returns a list of locations
- **When** the dropdown renders
- **Then** each item should show the location `name`
- **And** MUST show the `address` below the name in a smaller font/lighter color if available
- **And** the items should be clickable.

### Requirement: The component must allow selecting a location
Selecting a result MUST update the input value and trigger the parent callback with the complete location data.
#### Scenario: Selecting a location
- **Given** the dropdown is open with results
- **When** the user clicks on "Playa del Carmen"
- **Then** the input value should update to "Playa del Carmen"
- **And** the dropdown should close
- **And** the `onSelect` callback should be fired with the full item object (containing lat/lng).

### Requirement: The component should handle empty results
If the search returns no matches, the user MUST be informed appropriately.
#### Scenario: No Results
- **Given** the API returns an empty list
- **When** the dropdown renders
- **Then** it should display a "No results found" message.

