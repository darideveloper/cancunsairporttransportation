## ADDED Requirements
### Requirement: Reservation Search Form Component
The Reservation page MUST feature a search form implemented using standard UI atoms to maintain visual consistency.

#### Scenario: Form Fields and Submission
- **GIVEN** a user is on the Reservation page
- **WHEN** the form is rendered
- **THEN** it MUST contain an input for "Reservation Code" (name="code") and "Email" (name="email")
- **AND** it MUST include a submit button with the text "SEARCH" (EN) or "BUSCAR" (ES)
- **AND** the form MUST submit via POST to the language-appropriate reservation endpoint

## MODIFIED Requirements
### Requirement: Reservation Page Functionality
The My Reservation page SHALL provide a mechanism for users to look up their booking details.

#### Scenario: Rendering Reservation Page
- **GIVEN** a user visits the My Reservation page
- **WHEN** the page loads
- **THEN** it should display a title and introductory text
- **AND** it should include a lookup form requiring a Reservation ID and Email
- **AND** it should be translated into the active language (English or Spanish)
