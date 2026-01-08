# ui-section-heading Specification

## Purpose
TBD - created by archiving change refactor-section-heading. Update Purpose after archive.
## Requirements
### Requirement: Component API
The `SectionHeading` component MUST support title, custom class for styling (alignment, color), and custom content via slots.

#### Scenario: Basic Usage (Left Aligned)
Given a standard section
When using `<SectionHeading title="My Title">Description</SectionHeading>`
Then it should render an H2 with "My Title" aligned to the left
And render the description in a paragraph or div below it.

#### Scenario: Center Aligned
Given a centered section like Destinations
When using `<SectionHeading title="My Title" class="text-center">Description</SectionHeading>`
Then the text and H2 should be centered.

#### Scenario: Custom Color
Given a dark section like BannerCta
When using `<SectionHeading title="My Title" class="text-white">Description</SectionHeading>`
Then the text and H2 should be white.

#### Scenario: Custom Content
Given a description that needs HTML (e.g., links)
When passing content to the default slot
Then it should be rendered correctly below the title.

#### Scenario: Styling Consistency
Given the component
Then the H2 should always have `text-3xl font-bold` (or matching the "Destinations" style)
And the container should handle spacing.

### Requirement: Integration
The component MUST be integrated into existing pages.

#### Scenario: Index Page Refactor
Given `src/pages/[lang]/index.astro`
When replacing the "Pricing transportation" and "Destinations" headers
Then the visual output should remain consistent with the standardized design.

