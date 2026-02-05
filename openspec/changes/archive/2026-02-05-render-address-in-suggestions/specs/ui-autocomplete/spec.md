# ui-autocomplete Specification

## MODIFIED Requirements

### Requirement: The component must display search results
Returned results MUST be presented in a clear, clickable dropdown list to allow user selection, including address context.

#### Scenario: Displaying Results
- **Given** the API returns a list of locations
- **When** the dropdown renders
- **Then** each item should show the location `name`
- **And** MUST show the `address` below the name in a smaller font/lighter color if available
- **And** the items should be clickable.
