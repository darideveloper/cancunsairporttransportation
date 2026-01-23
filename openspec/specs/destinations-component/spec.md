# destinations-component Specification

## Purpose
TBD - created by archiving change refactor-destinations-section. Update Purpose after archive.
## Requirements
### Requirement: `Destinations` Reusability
The destinations section MUST be encapsulated in a reusable component that adapts its content based on the current page.

#### Scenario: Home Page Rendering
Given the `Destinations` is used on the "home" page
When the component renders
Then it should display the title, text, and destination cards defined in `pages.home.destinations`
And it should display a "View More" button linking to `/destinations`.

#### Scenario: Playa del Carmen Page Rendering
Given the `Destinations` is used on the "playaDelCarmen" page
When the component renders
Then it should display the title, text, and destination cards defined in `pages.playaDelCarmen.destinations`
And it should display a "View More" button linking to the appropriate destination list (e.g., `/destinations` or specific link).

### Requirement: Display Highlight Cards in Destinations
The `Destinations.astro` organism MUST display two highlight cards using the `BasicImageCard` component.

#### Scenario: Rendering in Destinations
- **Given** the `Destinations.astro` component
- **When** rendered on any page
- **Then** it should include two `BasicImageCard` components at the bottom of the section
- **And** the content must be localized via the translation system

