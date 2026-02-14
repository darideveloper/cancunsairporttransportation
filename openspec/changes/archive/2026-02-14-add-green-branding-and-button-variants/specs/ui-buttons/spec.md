# Spec: Button Variants Extension

## ADDED Requirements

### Requirement: ButtonCta Color Variants
The `ButtonCta` component MUST support `green` and `greenGhost` variants to provide affirmative action styles.

#### Scenario: Solid Green Button
- **WHEN** a `ButtonCta` is rendered with `variant="green"`
- **THEN** it MUST have a green background (`bg-green`)
- **AND** it MUST have white text (`text-white`)

#### Scenario: Green Ghost Button
- **WHEN** a `ButtonCta` is rendered with `variant="greenGhost"`
- **THEN** it MUST have a transparent green background (`bg-green/10`)
- **AND** it MUST have a green border (`border border-green`)
- **AND** it MUST have green text (`text-green`)
