# basic-icon-card Specification

## Purpose
TBD - created by archiving change update-contact-cards. Update Purpose after archive.
## Requirements
### Requirement: Visual Style Variants
The component MUST accept a `variant` prop to control its background and text colors.

#### Scenario: Default Variant
- **Given** the component is used without a `variant` prop
- **When** it renders
- **Then** it must use the "white" variant style (white background, gray text, existing shadow behavior).

#### Scenario: Orange Variant
- **Given** the component is used with `variant="orange"`
- **When** it renders
- **Then** it must have an orange background (e.g., `bg-accent` or `bg-orange-500`).
- **And** the text must be white.
- **And** the icon must be white.

#### Scenario: Black Variant
- **Given** the component is used with `variant="black"`
- **When** it renders
- **Then** it must have a black background (e.g., `bg-primary` or `bg-black`).
- **And** the text must be white.
- **And** the icon must be white.

