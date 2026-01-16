# pricing-structure Specification

## Purpose
TBD - created by archiving change refactor-pricing-cards. Update Purpose after archive.
## Requirements
### Requirement: Global Data Source
Prices and images for standard services (Private, Luxury, Group) MUST be sourced from the global translation configuration to ensure site-wide consistency.

#### Scenario: Global Price and Image
Given I am on the Playa del Carmen page
When I view the "Private Transportation" card
Then the price should be displayed from the global translation (`global.sections.pricingServices.cards.private.price`)
And the image should be the standard private vehicle image
And the image alt text should come from global translations.

### Requirement: Local Data Override
Components MUST support overriding titles and descriptions based on the current page context to allow for targeted marketing copy.

#### Scenario: Page Specific Title
Given I am on the Playa del Carmen page
When I view the "Private Transportation" card
Then the title should be specific to Playa del Carmen (e.g., "Private Transportation to Playa del Carmen")
And the description should be specific to Playa del Carmen.

