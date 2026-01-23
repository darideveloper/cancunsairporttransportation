# destinations-component Specification

## ADDED Requirements

### Requirement: Display Highlight Cards in Destinations
The `Destinations.astro` organism MUST display two highlight cards using the `BasicImageCard` component.

#### Scenario: Rendering in Destinations
- **Given** the `Destinations.astro` component
- **When** rendered on any page
- **Then** it should include two `BasicImageCard` components at the bottom of the section
- **And** the content must be localized via the translation system
