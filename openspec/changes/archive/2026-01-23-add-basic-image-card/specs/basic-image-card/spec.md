# Capability: BasicImageCard

## ADDED Requirements

### Requirement: Horizontal Component Structure
The component MUST provide a horizontal layout with an image on the left and text content on the right.

#### Scenario: Rendering with Image
- **Given** a `BasicImageCard` component
- **When** passed an `image` prop with `src`, `alt`, and `title`
- **Then** it should render an `img` (or Astro `Image`) on the left and the title and text on the right

### Requirement: Accessibility and Semantics
The component MUST follow accessible and semantic HTML practices.

#### Scenario: Semantic Wrapper
- **Given** the component is rendered
- **Then** it should use an `<article>` tag and include an `aria-labelledby` attribute pointing to its title
