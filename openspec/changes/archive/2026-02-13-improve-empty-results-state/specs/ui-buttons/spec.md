# Spec: Button CTA Variants

## ADDED Requirements

### Requirement: Black Ghost Button Variant
The `ButtonCta` component MUST support a new `blackGhost` variant for outlined black buttons. This variant SHALL be designed for secondary actions in high-contrast contexts.

#### Scenario: Supporting outline style for black buttons
Given a `ButtonCta` component
When the `variant` prop is set to `"blackGhost"`
Then the button receives classes `bg-black/5 border border-black text-black` to match the design.
