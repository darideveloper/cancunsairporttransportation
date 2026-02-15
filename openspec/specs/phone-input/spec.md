# phone-input Specification

## Purpose
TBD - created by archiving change enhance-phone-input. Update Purpose after archive.
## Requirements
### Requirement: Phone Input with Country Code
- The phone input field MUST allow users to select a country code from a dropdown list.
- The input field MUST separate the country code selection from the phone number entry.
- The input MUST automatically format the phone number based on the selected country.

#### Scenario: User selects a country
- **Given** the user is on the Passenger Information form
- **When** the user clicks on the country flag/dropdown
- **Then** a list of countries should appear
- **And** selecting a country updates the prefix/formatting of the phone input

### Requirement: Preferred Countries
- The country dropdown MUST prioritize specific countries at the top of the list for quick access.
- The preferred countries are: United States (US), United Kingdom (GB), Spain (ES), and Mexico (MX).
- The default selected country upon loading MUST be United States (US).

#### Scenario: User opens country list
- **Given** the user clicks the country dropdown
- **Then** US, GB, ES, and MX should be the first options in the list
- **And** the rest of the countries follow alphabetically

### Requirement: Styling Consistency
- The phone input component MUST visually match the existing `Input` component style.
- It MUST have the same border, rounded corners, padding, and focus states as other text inputs.

#### Scenario: Focus state
- **Given** the user focuses on the phone input
- **Then** the entire input container (including flag) should show the active focus ring (e.g., `ring-accent`).

