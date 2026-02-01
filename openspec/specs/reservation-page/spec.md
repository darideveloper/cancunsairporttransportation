# reservation-page Specification

## Purpose
TBD - created by archiving change add-missing-pages. Update Purpose after archive.
## Requirements
### Requirement: Reservation Page Functionality
The My Reservation page SHALL provide a mechanism for users to look up their booking details.

#### Scenario: Rendering Reservation Page
- **GIVEN** a user visits the My Reservation page
- **WHEN** the page loads
- **THEN** it should display a title and introductory text
- **AND** it should include a lookup form requiring a Reservation ID and Email
- **AND** it should be translated into the active language (English or Spanish)

### Requirement: Reservation Search Form Component
The Reservation page MUST feature a search form implemented using standard UI atoms to maintain visual consistency.

#### Scenario: Form Fields and Submission
- **GIVEN** a user is on the Reservation page
- **WHEN** the form is rendered
- **THEN** it MUST contain an input for "Reservation Code" (name="code") and "Email" (name="email")
- **AND** it MUST include a submit button with the text "SEARCH" (EN) or "BUSCAR" (ES)
- **AND** the form MUST submit via POST to the language-appropriate reservation endpoint

### Requirement: Help Section Heading Level
The "Need help?" section MUST use `<h3>` instead of `<h4>` to maintain proper heading hierarchy.

#### Scenario: Help Section Follows H2 Form Heading
Given the Reservation page is rendered
When viewing the help section below the form
Then the heading "Need help?" (English) or "¿Necesitas ayuda?" (Spanish) MUST be an `<h3>`
And it follows the `<h2>` "MY RESERVATION" form heading
And no heading levels are skipped

#### Scenario: Heading Hierarchy Validation
Given the built Reservation page HTML
When parsing heading elements
Then the heading sequence MUST be: H1 → H2 → H3
And H4 MUST NOT appear before H3 in the document flow

