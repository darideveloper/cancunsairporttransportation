# component-library Specification

## Purpose
TBD - created by archiving change optimize-textcard-accessibility. Update Purpose after archive.
## Requirements
### Requirement: H2 Component ID Support
The `H2` component MUST accept an `id` prop and pass it to the underlying `<h2>` element to support accessibility features like `aria-labelledby`.

#### Scenario: Supporting ID for Accessibility
Given I am using the `H2` component
When I pass an `id` prop to it
Then the rendered `<h2>` element should have that `id` attribute
And any other standard HTML attributes passed should also be applied to the heading.

### Requirement: TextCard Component Reverse Prop
The `TextCard` component MUST accept a `reverse` prop to control the visual order of text and image, replacing the need for non-semantic `direction:rtl` CSS.

#### Scenario: Reverse Layout via Prop
Given I am using the `TextCard` component
When I pass the `reverse={true}` prop
Then the image should appear visually before the text on desktop screens (using CSS order/flex-direction)
And no `direction:rtl` style should be applied to the container.

#### Scenario: Semantic Labelling
Given a `TextCard` with an `id` of "my-feature"
When the component renders
Then the main container should be a `<section>`
And the `<section>` should have `aria-labelledby="my-feature-title"`
And the internal `H2` should have `id="my-feature-title"`.

