# data-centralization Specification

## ADDED Requirements

### Requirement: Removal of Hardcoded Prices
Hardcoded price strings MUST be removed from `en.json` and `es.json` to prevent synchronization errors.

#### Scenario: Verify Translation Files
When I inspect `src/messages/en.json`
Then there should be NO numeric price values like "$29.99 USD" hardcoded in the destinations or cards objects.

### Requirement: Price Data Schema
The Pricing data file MUST provide a strongly typed schema for all supported destinations and vehicle tiers.

#### Scenario: Type Safety
When a developer adds a new destination to `src/data/prices.ts`
Then the `RatesTable` and `PricingSection` MUST automatically receive the new data without manual component updates.
