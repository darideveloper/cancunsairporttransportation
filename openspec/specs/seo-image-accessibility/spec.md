# seo-image-accessibility Specification

## Purpose
TBD - created by archiving change add-image-title-attributes. Update Purpose after archive.
## Requirements
### Requirement: Image Title Attribute Consistency
All `<Image>` components MUST include both `alt` and `title` attributes for SEO optimization and accessibility compliance.

#### Scenario: TextCard components include title attribute
- **GIVEN** a `TextCardSmall` or `TextCardHalf` component is rendered
- **WHEN** the Image component is displayed
- **THEN** it SHALL have both `alt` and `title` attributes set to the same descriptive value

#### Scenario: FeaturedDestinations images include title attribute
- **GIVEN** the `FeaturedDestinations` component renders destination cards
- **WHEN** each destination Image is displayed
- **THEN** it SHALL have both `alt` and `title` attributes matching the destination title

#### Scenario: Page-level images include title attribute
- **GIVEN** a landing page (`Home.astro` or `Destinations.astro`) renders images
- **WHEN** an Image component is used directly in the page
- **THEN** it SHALL have both `alt` and `title` attributes set to descriptive values

### Requirement: Title and Alt Value Parity
When adding `title` attributes to images, the value SHALL match the `alt` attribute value for consistency and reduced translation overhead.

#### Scenario: Same value used for alt and title
- **GIVEN** an Image component requires both `alt` and `title` attributes
- **WHEN** the component is rendered
- **THEN** the `title` attribute value SHALL equal the `alt` attribute value

