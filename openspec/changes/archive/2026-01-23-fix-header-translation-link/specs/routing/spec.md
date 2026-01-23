# Routing Specification

## ADDED Requirements

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
