# destinations-page-ui Specification Delta

## Purpose
Updates to the Destinations page to fix heading hierarchy violation by adding section headings.

## ADDED Requirements

### Requirement: Highlight Section Heading
The Destinations page MUST include an `<h2>` section heading before the BasicImageCard highlight components.

#### Scenario: Highlight Cards Have Parent H2
Given the Destinations page is rendered
When viewing the highlight cards section (book now, contact, etc.)
Then there MUST be an `<h2>` section heading above the BasicImageCard components
And the BasicImageCard `<h3>` titles follow this H2
And the heading hierarchy is: H1 (title) → H2 (section) → H3 (cards)

#### Scenario: Section Heading Translation
Given the Destinations page in English (`/destinations`)
When viewing the highlights section
Then the H2 heading MUST be displayed in English
And when viewing `/es/destinos`, the H2 heading MUST be displayed in Spanish

#### Scenario: Heading Hierarchy Validation
Given the built Destinations page HTML
When parsing heading elements in document order
Then no heading level skips MUST occur
And H3 elements MUST NOT appear before any H2 element after the H1
