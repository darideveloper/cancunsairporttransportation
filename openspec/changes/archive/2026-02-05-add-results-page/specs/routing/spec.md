# Routing Specifications

## ADDED Requirements

### Requirement: The application MUST support a dedicated results page.
- The system MUST provide a route for displaying results, accessible in both English and Spanish.

#### Scenario: User visits the English results page
- Given a user navigates to `/results`
- Then the page should load without errors
- And the heading SHOULD be "Results"

#### Scenario: User visits the Spanish results page
- Given a user navigates to `/es/resultados`
- Then the page should load without errors
- And the heading SHOULD be "Results"
