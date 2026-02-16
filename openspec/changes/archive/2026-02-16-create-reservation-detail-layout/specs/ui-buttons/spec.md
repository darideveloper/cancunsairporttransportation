# Capability: ButtonCta

Extend the core button component with destructive action variants.

## MODIFIED Requirements

### Requirement: ButtonCta Color Variants
The `ButtonCta` component MUST support `red` and `redGhost` variants to provide destructive or high-alert action styles.

#### Scenario: Solid Red Button
- **WHEN** a `ButtonCta` is rendered with `variant="red"`
- **THEN** it MUST have a red background (`bg-red-600`)
- **AND** it MUST have white text (`text-white`)

#### Scenario: Red Ghost Button
- **WHEN** a `ButtonCta` is rendered with `variant="redGhost"`
- **THEN** it MUST have a transparent red background (`bg-red-600/10`)
- **AND** it MUST have a red border (`border border-red-600`)
- **AND** it MUST have red text (`text-red-600`)
