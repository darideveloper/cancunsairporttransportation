# Capability: why-choose-us-organism

## ADDED Requirements
### Requirement: Create `WhyChooseUs` marketing section
A new organism component MUST be created to display the "Why Choose Us" marketing section according to the requested design.

#### Scenario: Section Structure
- **Given** the `WhyChooseUs` component is rendered
- **Then** it MUST display a title using the `H2` atom
- **And** it MUST display the Trip Advisor Traveller's Choice GIF linked to their review page
- **And** it MUST display a list of value propositions as defined in the translations

#### Scenario: Visual styling
- **Given** the component is rendered on desktop
- **Then** the title, image, and list should be vertically stacked and centered
- **And** the list items should be displayed in a responsive grid
- **And** the GIF image should NOT have a background (be transparent)

#### Scenario: Localization
- **Given** the user is in Spanish mode
- **Then** all texts including the title and every list item MUST be in Spanish
- **And** the list item "10 years of experience" MUST show a star icon instead of a checkmark
