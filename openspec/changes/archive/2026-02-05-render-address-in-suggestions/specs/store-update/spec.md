# store-update Specification

## MODIFIED Requirements

### Requirement: The store must strictly type location data
The store state MUST be enhanced to support rich location objects containing geolocation coordinates alongside the location name and optional address.

#### Scenario: Storing Geo Data
- **Given** the `useSearchFormStore`
- **When** a location is selected in the autocomplete component
- **Then** the store must be able to hold the `latitude`, `longitude`, and optionally `address`
- **And** the `locationFrom` / `locationTo` fields (names) must still be accessible.
