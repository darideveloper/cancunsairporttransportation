# ButtonCta Variants Proposal

## Goal
Add support for visual variants to the `ButtonCta` component to support "primary" (existing) and "secondary" (black background) styles, while ensuring extensibility and DRY code.

## Motivation
The user requires a secondary button style for specific UI contexts. The current component is hardcoded to the primary accent color. A variant system will allow easy addition of future styles without code duplication.

## Users
- Developers using the `ButtonCta` component.

## Dependencies
- `clsx` (already installed) for class conditional logic.
- Tailwind CSS (already installed) for styling.

## Risks
- Minor risk of breaking existing usage if default prop is not handled correctly (mitigated by setting default to 'primary').
