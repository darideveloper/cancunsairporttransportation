# ui-autocomplete Specification

## MODIFIED Requirements
### Requirement: The component must fetch results based on user input
The component MUST listen to user input and asynchronously fetch matching locations from the dashboard API after a debounce period.

#### Scenario: User types a search term
- **Given** the `LocationAutocomplete` component is rendered
- **When** the user types "Playa" into the input
- **And** waits for 500ms (debounce)
- **Then** the component should trigger a fetch to the endpoint `${API_BASE}/api/legacy/autocomplete/` (ensuring `API_BASE` is correctly exposed/proxied)
- **And** make a POST request with the body `{"keyword": "Playa"}`
- **And** NOT include the `app-key` header
- **And** show a "Loading..." indicator (optional)
- **And** upon response, display a dropdown list of results.
