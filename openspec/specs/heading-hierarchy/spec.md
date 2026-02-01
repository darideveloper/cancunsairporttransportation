# heading-hierarchy Specification

## Purpose
TBD - created by archiving change fix-heading-hierarchy. Update Purpose after archive.
## Requirements
### Requirement: Heading Level Continuity
All pages MUST NOT skip heading levels. After an H1, the next heading must be H2, after H2 must be H3, and so on.

#### Scenario: No Heading Level Skips
Given any page in the site
When the HTML is rendered
Then heading levels MUST be sequential (H1 → H2 → H3, not H1 → H3)
And no heading level gaps exist between parent and child sections

#### Scenario: Reservation Page Help Section
Given the Reservation page (`/my-reservation` or `/es/mi-reservacion`)
When viewing the "Need help?" section
Then the heading MUST use `<h3>` (not `<h4>`)
And it follows the form's `<h2>` heading

#### Scenario: Destinations Page Section Structure
Given the Destinations page (`/destinations` or `/es/destinos`)
When viewing the highlight cards section (BasicImageCard components)
Then there MUST be an `<h2>` section heading before any `<h3>` card titles
And the section heading describes the highlight content

#### Scenario: Legal Pages Content Structure
Given legal pages (`/privacy`, `/terms` and Spanish equivalents)
When viewing the MDX content
Then there MUST be `<h2>` section headings within the content
And these H2s appear before any footer H3s

#### Scenario: 404 Page Structure
Given the 404 error page
When viewing the page content
Then there SHOULD be an `<h2>` subtitle after the `<h1>` main heading
Or the page MAY omit intermediate headings as it is a utility page

### Requirement: Single H1 Per Page
Each page MUST have exactly one `<h1>` element.

#### Scenario: H1 Count Validation
Given any page in the site
When the HTML is rendered
Then there MUST be exactly one `<h1>` element
And the H1 appears before any H2 elements

### Requirement: H1 First Heading
The first heading on any page MUST be an `<h1>`.

#### Scenario: First Heading is H1
Given any page in the site
When the HTML is parsed in document order
Then the first `<h[1-6]>` element MUST be an `<h1>`

