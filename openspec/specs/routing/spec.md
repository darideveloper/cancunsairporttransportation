# routing Specification

## Purpose
TBD - created by archiving change fix-header-translation-link. Update Purpose after archive.
## Requirements
### Requirement: The language switcher MUST redirect to the localized version of the current page
- When a user views a page that has a localized counterpart, the language switcher in the header MUST link to that specific specific localized URL, not the home page.
#### Scenario: User switches language on a specific page
Given I am on the "/cancun-to-tulum-shuttle" page (English)
When I click the "Español" language switcher
Then I should be redirected to "/es/traslado-cancun-tulum"
And I should NOT be redirected to the Spanish home page "/es"

#### Scenario: User switches language on a non-home Spanish page
Given I am on the "/es/taxi-aeropuerto-cancun" page (Spanish)
When I click the "English" language switcher
Then I should be redirected to "/cancun-airport-taxi"
And I should NOT be redirected to the English home page "/"

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

