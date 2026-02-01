# ui-navigation Specification

## Purpose
TBD - created by archiving change add-aria-labels-interactables. Update Purpose after archive.
## Requirements
### Requirement: NavLink Accessibility Props
The `NavLink` atom component MUST support optional accessibility props to enhance screen reader experience.

#### Scenario: NavLink with aria-label
- **WHEN** a `NavLink` component is rendered with an `ariaLabel` prop
- **THEN** the rendered `<a>` element MUST include `aria-label` with the provided value

#### Scenario: NavLink with title attribute
- **WHEN** a `NavLink` component is rendered with a `title` prop
- **THEN** the rendered `<a>` element MUST include the `title` attribute
- **AND** the title SHOULD provide expanded context about the destination

#### Scenario: NavLink default behavior
- **WHEN** a `NavLink` component is rendered without accessibility props
- **THEN** it MUST use the visible `label` text as the accessible name
- **AND** no redundant ARIA attributes MUST be added

### Requirement: ContactItem Accessible Phone Links
The `ContactItem` atom component MUST render phone links with auto-generated `aria-label` attributes.

#### Scenario: Phone link aria-label generation
- **WHEN** a `ContactItem` component is rendered with `label` and `phone` props
- **THEN** the phone link MUST include an `aria-label` in the format "Call {label}: {phone}"
- **AND** the aria-label MUST be translatable using the i18n system

#### Scenario: Localized phone aria-label
- **WHEN** a `ContactItem` is rendered on a Spanish page
- **THEN** the aria-label MUST use Spanish translation (e.g., "Llamar México: +52...")

### Requirement: BottomBar Legal Links
The `BottomBar` component MUST render legal navigation links with `title` attributes.

#### Scenario: Terms link title
- **WHEN** the Terms and Conditions link is rendered
- **THEN** it MUST include a `title` attribute describing the link destination
- **AND** the title MUST be translated for the current language

#### Scenario: Privacy link title
- **WHEN** the Privacy Policy link is rendered
- **THEN** it MUST include a `title` attribute describing the link destination
- **AND** the title MUST be translated for the current language

