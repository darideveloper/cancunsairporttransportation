# store-update Specification

## Purpose
TBD - created by archiving change replace-fixed-locations-with-autocomplete. Update Purpose after archive.
## Requirements
### Requirement: The store must strictly type location data
The store state MUST be enhanced to support rich location objects containing geolocation coordinates alongside the location name.
#### Scenario: Storing Geo Data
- **Given** the `useSearchFormStore`
- **When** a location is selected in the autocomplete component
- **Then** the store must be able to hold the `latitude` and `longitude`
- **And** the `locationFrom` / `locationTo` fields (names) must still be accessible.

### Requirement: The store must initialize optional location data
Initial state values MUST reflect the absence of selected data, handling null/undefined safely.
#### Scenario: Defaults
- **Given** the store initialization
- **When** no value is set
- **Then** latitude and longitude fields should be null or undefined.

