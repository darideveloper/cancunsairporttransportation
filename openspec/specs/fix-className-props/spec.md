# fix-className-props Specification

## Purpose
TBD - created by archiving change fix-react-component-props. Update Purpose after archive.
## Requirements
### Requirement: Use `className` for React components in Astro templates
React components SHALL receive the `className` prop instead of `class` to correctly apply styles.

#### Scenario: Update ButtonCta usage
Given an Astro component using `ButtonCta`
When a `class` attribute is present
Then it should be renamed to `className`

#### Scenario: Update CheckListItem usage
Given an Astro component using `CheckListItem`
When a `class` attribute is present
Then it should be renamed to `className`

