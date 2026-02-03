# pricing-engine Specification

## ADDED Requirements

### Requirement: Centralized Price Definition
The system MUST use a single source of truth for all base USD prices to ensure consistency across landing pages, the rates table, and search results.

#### Scenario: Update Price in One Place
Given the price for "Cancun Hotel Zone" private service is defined as 29.99 USD in `prices.ts`
When I view the Homepage pricing card
Then it MUST show $29.99 USD
When I view the "Rates Table" for the same zone
Then it MUST show $29.99 USD for one way and $59.99 USD for round trip.

### Requirement: Dynamic Currency Conversion
The system MUST automatically calculate MXN prices based on a configurable exchange rate from the environment variables.

#### Scenario: Change Exchange Rate
Given the exchange rate `USD_TO_MXN_RATE` is set to `20.0`
And a service is priced at `100.00 USD`
When I view the site in Spanish
Then it MUST display `$2,000.00 MXN`.

### Requirement: Consistent Formatting
Prices MUST be formatted according to the locale's conventions (e.g., USD for English, MXN for Spanish).

#### Scenario: Localized Currency Label
When the language is English
Then the price MUST include the "USD" suffix
When the language is Spanish
Then the price MUST include the "MXN" suffix.
