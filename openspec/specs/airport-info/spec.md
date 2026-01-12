# airport-info Specification

## Purpose
TBD - created by archiving change add-airport-info-section. Update Purpose after archive.
## Requirements
### Requirement: Locations Section
The application MUST display a section containing contact information, a location map, and transportation times.

#### Scenario: Display contact information
- **GIVEN** a user is on the landing page
- **THEN** they SHOULD see contact details for USA/Canada, Mexico, and the physical address.
- **AND** phone numbers SHOULD be clickable `tel:` links.

#### Scenario: Display location map
- **GIVEN** a user is on the landing page
- **THEN** they SHOULD see an embedded Google Map showing the office location.
- **AND** the map SHOULD have a descriptive `title` or `aria-label`.

#### Scenario: Display transportation times
- **GIVEN** a user is on the landing page
- **THEN** they SHOULD see travel times and distances to major destinations (Cancun, Isla Mujeres, Playa del Carmen, Tulum).

### Requirement: Enhanced InfoIconCard
The `InfoIconCard` component MUST support displaying a text label before the bottom icon.

#### Scenario: Display buttomText
- **GIVEN** `buttomText` prop is provided to `InfoIconCard`
- **THEN** the text SHOULD be rendered before the `BottomIcon` (if present).

