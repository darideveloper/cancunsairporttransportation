# Spec: Pricing Content Cleanup

## ADDED Requirements

### Requirement: Hardcoded Price Strings
The system MUST NOT store hardcoded pricing information in translation files (`src/messages/*.json`).

#### Scenario: Rates Table Translation
Given I am viewing the Rates Table on the website
When the page loads
Then the destination names are loaded from translation files
And the prices are NOT loaded from translation files
But the prices are dynamically calculated from `src/data/prices.ts`

#### Scenario: Pricing Cards
Given I am viewing a Pricing Section
When the cards are rendered
Then the price value is NOT fetched from `pages.*.pricing.cards.*.price` key in translations

#### Scenario: Destination Cards
Given I am viewing the Destinations list
When the cards are rendered
Then the price value is NOT fetched from `pages.*.destinations.cards.*.price` key in translations

### Requirement: Legacy Price Keys
The translation files MUST NOT contain specific legacy keys which store static pricing data.

#### Scenario: Verify Deleted Keys
Given the translation files `src/messages/en.json` and `src/messages/es.json`
When I inspect the keys
Then the following keys MUST NOT exist:
- `global.ratesTable.destinations.*.privateOw`
- `global.ratesTable.destinations.*.privateRt`
- `global.ratesTable.destinations.*.luxuryOw`
- `global.ratesTable.destinations.*.luxuryRt`
- `global.ratesTable.destinations.*.groupOw`
- `global.ratesTable.destinations.*.groupRt`
- `pages.*.pricing.cards.*.price`
- `pages.*.destinations.cards.*.price`
- `pages.*.privateDetails.table.rows[*].oneWay`
- `pages.*.privateDetails.table.rows[*].roundTrip`



### Requirement: Dynamic Text Interpolation
Text content that references prices (like FAQs or descriptions) MUST use variable placeholders instead of static values.

#### Scenario: FAQ Price Answers
Given a FAQ answer regarding "cheapest shuttle"
When the answer is rendered in the UI
Then it MUST use a placeholder like `{pricePrivateOw}`
And the system MUST replace this placeholder with the current formatted price from `src/data/prices.ts`

#### Scenario: Price Description Text
Given a text block describing price ranges (e.g., "$50 to $100")
When the text is stored in translation files
Then it MUST use placeholders `{minPrice}` and `{maxPrice}`
And the logic MUST inject the current calculated values for those services
