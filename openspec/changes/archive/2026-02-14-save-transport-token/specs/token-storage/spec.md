# Capability: Transport Token Storage

This spec covers the persistence of the selected transport token in the global search state.

## ADDED Requirements

### Requirement: Selected Vehicle Persistence
The system MUST persist the unique identifier (token) of the selected transport option to ensure the booking can be finalized in subsequent steps.

#### Scenario: User selects a Private Van
- **Given** the user is on the search results page
- **And** multiple transport options are displayed with unique tokens
- **When** the user clicks "Book Now" on a "Private Van" option
- **Then** the `selectedVehicleToken` in `useSearchFormStore` MUST be updated with that vehicle's specific token
- **And** the token MUST be persisted in local storage
