# ui-buttons Specification

## Purpose
TBD - created by archiving change add-aria-labels-interactables. Update Purpose after archive.
## Requirements
### Requirement: ButtonCta Accessibility Props
The `ButtonCta` atom component MUST support optional `ariaLabel` prop to provide custom accessible names.

#### Scenario: Explicit aria-label
- **WHEN** a `ButtonCta` component is rendered with an `ariaLabel` prop
- **THEN** the rendered element (`<a>` or `<button>`) MUST include `aria-label` with the provided value
- **AND** the aria-label MUST be used by screen readers to announce the element

#### Scenario: Inherited accessible name
- **WHEN** a `ButtonCta` component is rendered without an `ariaLabel` prop
- **THEN** the accessible name MUST be derived from the slot content
- **AND** no `aria-label` attribute MUST be added to the element

#### Scenario: Button type with aria-label
- **WHEN** a `ButtonCta` is rendered as a `<button>` element (no `href`) with `ariaLabel` prop
- **THEN** the button MUST include the `aria-label` attribute
- **AND** the `type` attribute MUST remain functional

### Requirement: SubmitButton Accessibility Props
The `SubmitButton` React component MUST support optional `ariaLabel` prop for form submission context.

#### Scenario: Submit button with aria-label
- **WHEN** a `SubmitButton` component is rendered with an `ariaLabel` prop
- **THEN** the rendered `<button>` element MUST include `aria-label` with the provided value

#### Scenario: Submit button default behavior
- **WHEN** a `SubmitButton` component is rendered without an `ariaLabel` prop
- **THEN** the accessible name MUST be derived from the `label` prop text
- **AND** no `aria-label` attribute MUST be added

