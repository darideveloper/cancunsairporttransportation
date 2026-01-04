## ADDED Requirements

### Requirement: Visual Variants Support
The `ButtonCta` component MUST support multiple visual variants to adapt to different UI contexts, starting with 'primary' and 'secondary'.

#### Scenario: Default Primary Variant
- Given the `ButtonCta` is used without a `variant` prop
- Then it renders with the `primary` style (`bg-accent text-white`)
- And it retains all base styling (padding, rounded corners).

#### Scenario: Secondary Variant
- Given the `ButtonCta` is used with `variant="secondary"`
- Then it renders with the `secondary` style (`bg-black text-white`)
- And it retains all base styling.

#### Scenario: Extensibility
- Given a developer wants to add a new variant
- Then they can add a new key to the variants configuration object without duplicating base styles.
