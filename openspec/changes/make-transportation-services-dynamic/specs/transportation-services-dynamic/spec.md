# Specification: Dynamic Transportation Services

## ADDED Requirements

### Requirement: dynamic-transportation-loading
The `TransportationServices` component MUST dynamically load content based on the provided `page` prop.

#### Scenario: Rendering on Home Page
- **Given** the component is rendered with `page="home"`
- **When** the page is loaded
- **Then** it should display the title and items specified in `pages.home.transportationServices`
- **And** it should use the global card titles from `global.sections.transportationServicesList.items`

#### Scenario: Rendering on Destination Page
- **Given** the component is rendered with `page="playaDelCarmen"`
- **When** the page is loaded
- **Then** it should display the title and items specified in `pages.playaDelCarmen.transportationServices`

#### Scenario: Optional Description
- **Given** `pages.[page].transportationServices.description` is empty or undefined
- **When** the component is rendered
- **Then** no description paragraph should be rendered under the section heading
