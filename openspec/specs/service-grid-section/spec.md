# service-grid-section Specification

## Purpose
TBD - created by archiving change genericize-service-grid. Update Purpose after archive.
## Requirements
### Requirement: Architecture: Generic Configuration
The `InfoIconCard.astro` component MUST be configurable via props, including its title, description, styling, and items.

#### Scenario: Configuring the component
Given I use the `InfoIconCard.astro` component
Then I must be able to pass a `title`, an optional `description`, a list of `items`, and a `class` for container styling.

### Requirement: Styling: Dynamic Title Color
The component MUST accept a `titleColor` prop to customize the appearance of the section heading.

#### Scenario: Applying custom title color
Given I pass `titleColor="#FF0000"` to `InfoIconCard`
Then the section title MUST be rendered in red.

### Requirement: Optional Header and Footer Icons
The component MUST support an optional icon to the left of the title (`TopIcon`) and an optional icon at the bottom of the section (`BottomIcon`).

#### Scenario: Rendering icons
Given I provide `TopIcon={FaInfo}` and `BottomIcon={FaCheck}`
Then `FaInfo` should appear next to the title
And `FaCheck` should appear at the bottom of the section content.

### Requirement: Preservation of Transportation Services
The existing `TransportationServices.astro` component MUST be maintained as a specific instance of `InfoIconCard`.

#### Scenario: Verifying existing section
Given a user views the homepage
Then the "Transportation Services" section should still be present and functional
But its implementation should now rely on `InfoIconCard`.

