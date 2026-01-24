# ui-section-heading Specification

## MODIFIED Requirements

### Requirement: Component API
The `SectionHeading` component MUST support title, custom class for styling (alignment, color), custom content via slots, and optional H1 heading level.

#### Scenario: H1 Support
Given a page requiring a main title using SectionHeading
When using `<SectionHeading title="Page Title" isH1={true}>...</SectionHeading>`
Then it should render an `<h1>` element instead of `<h2>`
And apply the same base styles (or appropriate size adjustments if defined).

#### Scenario: Default H2 behavior
Given existing usages of SectionHeading
When `isH1` is omitted or false
Then it should continue to render `<h2>`
And maintain all existing styling and behavior.
