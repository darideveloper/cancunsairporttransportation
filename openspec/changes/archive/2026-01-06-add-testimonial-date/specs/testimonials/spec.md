# Spec: Date Display

## ADDED Requirements

### Requirement: Date Prop
The `Testimonial` component MUST accept a `date` prop as a string.

#### Scenario: Component accepts date
- **Given** a `Testimonial` component.
- **When** a `date` prop is passed.
- **Then** the component prop validation (TypeScript) should pass.

### Requirement: Render Date Before Name
The `Testimonial` component MUST render the `date` string before the `name` within the author section.

#### Scenario: Display date before name
- **Given** a `Testimonial` component with `date="01/2026"` and `name="John Doe"`.
- **Then** the rendered output should show "01/2026" followed by "John Doe".

### Requirement: Semantic Date
The `date` display MUST be semantic (e.g., using a `<time>` tag or appropriate attribute).

#### Scenario: Use time tag
- **Given** a `Testimonial` with a date.
- **Then** it should be wrapped in a `<time>` tag or have semantic attributes.

### Requirement: Parent Provides Date
The `Testimonials` component MUST provide a `date` for each testimonial from a local data constant.

#### Scenario: Provide date from parent data
- **Given** the `Testimonials` organism.
- **When** it renders `Testimonial` items.
- **Then** it passes a `date` prop to each item from a local data constant and not from translations.
