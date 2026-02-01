# ui-forms Specification

## Purpose
TBD - created by archiving change add-aria-labels-interactables. Update Purpose after archive.
## Requirements
### Requirement: BookingForm Accessibility
The `BookingForm` React component MUST have proper ARIA labeling for the form container.

#### Scenario: Form with title
- **WHEN** the `BookingForm` component is rendered with a `title` prop
- **THEN** the `<form>` element MUST include an `aria-labelledby` attribute
- **AND** the `aria-labelledby` MUST reference the title element's `id`
- **AND** the title element MUST have a unique `id` attribute

#### Scenario: Form without title
- **WHEN** the `BookingForm` component is rendered without a `title` prop
- **THEN** the `<form>` element MUST include an `aria-label` attribute
- **AND** the aria-label MUST describe the form purpose (e.g., "Booking form")
- **AND** the aria-label MUST be translatable using the i18n system

### Requirement: Interactive Card Links Accessibility
Card components (`BasicIconCard`, `InfoIconCard`) that function as links MUST have proper accessible labels.

#### Scenario: BasicIconCard with href
- **WHEN** a `BasicIconCard` component is rendered with an `href` prop
- **THEN** the link container MUST have an accessible name
- **AND** the accessible name SHOULD combine the card title with action context
- **AND** if the card has `aria-labelledby` on the article, the link SHOULD also reference it

#### Scenario: InfoIconCard text link
- **WHEN** an `InfoIconCard` component is rendered with an `href` prop on the text
- **THEN** the link MUST have an `aria-label` if the text alone does not describe the action
- **AND** the aria-label SHOULD indicate the link destination or action type

