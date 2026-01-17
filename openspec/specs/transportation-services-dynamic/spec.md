# transportation-services-dynamic Specification

## Purpose
TBD - created by archiving change make-transportation-services-dynamic. Update Purpose after archive.
## Requirements
### Requirement: dynamic-transportation-loading
The `TransportationServices` component MUST dynamically load content based on the provided `page` prop, allowing for page-specific overrides of item titles.

#### Scenario: Rendering on Home Page (Default Behavior)
- **Given** the component is rendered with `page="home"`
- **When** the page is loaded
- **Then** it should display the title and items specified in `pages.home.transportationServices`
- **And** it should use the global card titles from `global.sections.transportationServicesList.items` IF no page-specific title is defined.

#### Scenario: Rendering on Destination Page with Title Overrides
- **Given** the component is rendered with `page="playaDelCarmen"`
- **And** `pages.playaDelCarmen.transportationServices.items.{key}.title` is defined in the translation file
- **When** the page is loaded
- **Then** it should display the page-specific title for that item INSTEAD of the global title.
- **And** it should display the description from `pages.playaDelCarmen.transportationServices.items.{key}.text`.

#### Scenario: Fallback for missing page-specific titles
- **Given** the component is rendered with `page="playaDelCarmen"`
- **And** `pages.playaDelCarmen.transportationServices.items.{key}.title` is NOT defined
- **When** the page is loaded
- **Then** it should display the global title from `global.sections.transportationServicesList.items.{key}.title`.

