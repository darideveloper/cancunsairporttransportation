# reservation-page Specification Delta

## Purpose
Updates to the Reservation page to fix heading hierarchy violation.

## ADDED Requirements

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
