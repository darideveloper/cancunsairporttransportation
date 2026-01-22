# dynamic-includes-capability Specification

## Purpose
TBD - created by archiving change dynamic-includes-component. Update Purpose after archive.
## Requirements
### Requirement: Mandatory Dynamic Metadata
The `Includes` component MUST receive a `page` prop and an `image` prop to render. It MUST NOT provide fallbacks for these props or the metadata they represent.

#### Scenario: Rendering with Required Props
Given a page identifier "luxury" and a valid ImageMetadata object
When the `<Includes />` component is rendered with these props
Then it MUST retrieve its title from `pages.luxury.includes.title`
And it MUST retrieve its image metadata from `pages.luxury.includes.imageAlt` and `pages.luxury.includes.imageTitle`

#### Scenario: Missing Props
Given a developer attempts to render `<Includes />` without a `page` or `image`
Then the component SHOULD fail to build or render (strict prop enforcement)

### Requirement: Global Service Features List
The list of service features (items) MUST remain global and shared across all instances of the `Includes` component.

#### Scenario: Shared Service Items
Given multiple pages use the `<Includes />` component (e.g., Luxury and Private)
When they are rendered
Then both components display the same list of features retrieved from `global.sections.includes.items`

