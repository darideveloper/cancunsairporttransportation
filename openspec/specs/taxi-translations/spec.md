# taxi-translations Specification

## Purpose
TBD - created by archiving change add-taxi-page-translations. Update Purpose after archive.
## Requirements
### Requirement: Page Translation Keys
The system MUST provide translation keys for the `taxi` page in both English and Spanish.

#### Scenario: Missing Taxi Keys
Given that I am on the `cancun-airport-taxi` page
When I request the translation for the `taxi` page key
Then the system should return the values from the `src/messages/` JSON files under the `pages.taxi` key.

#### Scenario: Correct Page Title
Given the `taxi` translation key is added
When the language is `en`
Then `pages.taxi.title` should be "Cancun Airport Taxi"
And when the language is `es`
Then `pages.taxi.title` should be "Taxi Aeropuerto Cancun".

