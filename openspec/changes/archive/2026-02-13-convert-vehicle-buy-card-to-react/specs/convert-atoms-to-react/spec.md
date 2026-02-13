# Capability: convert-atoms-to-react

## ADDED Requirements

### Requirement: atoms-conversion-to-react
Base atomic components MUST be available as React components.

#### Scenario: ButtonCta React conversion
- **WHEN** `ButtonCta.tsx` is implemented
- **THEN** it MUST support both `<a>` and `<button>` rendering based on `href` prop.
- **AND** it MUST use React `children` for content.
- **AND** it MUST support `variant` prop for styling.

#### Scenario: CheckListItem React conversion
- **WHEN** `CheckListItem.tsx` is implemented
- **THEN** it MUST render an `<li>` with an icon and text.

#### Scenario: StarRating React conversion
- **WHEN** `StarRating.tsx` is implemented
- **THEN** it MUST render stars based on numeric `rating`.
- **AND** it MUST support `withSchema` for microdata.
