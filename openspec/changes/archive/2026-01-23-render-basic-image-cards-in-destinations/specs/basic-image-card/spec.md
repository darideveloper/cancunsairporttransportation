# basic-image-card Specification

## ADDED Requirements

### Requirement: BasicImageCard Styling
The `BasicImageCard` component MUST be style-less to allow parent components or global styles to control its appearance.

#### Scenario: Headless Component
- **Given** a `BasicImageCard` component
- **When** rendered
- **Then** it should not have any opinionated CSS classes (Tailwind or otherwise)
- **And** it should retain empty `class` attributes on its core elements for semantic structure
