# Proposal: Global Pricing System

## Problem
Currently, prices for transportation services are hardcoded as strings inside the `en.json` and `es.json` translation files. This duplication makes it difficult to maintain and leads to inconsistencies (e.g., Akumal page private price is $69.99 while the Rates Table lists it as $108.00). Additionally, there is no automatic currency conversion; MXN prices must be manually calculated and updated.

## Solution
Implement a centralized pricing engine using a single source of truth for base USD prices. This system will:
1. Define all prices in a static data file (`src/data/prices.ts`).
2. Provide a dynamic translation utility that formats prices and calculates MXN values using an environment variable (`USD_TO_MXN_RATE`).
3. Replace hardcoded price strings in translation files with keys or dynamic calculations.
4. Refactor `RatesTable` and `PricingCard` components to use this centralized data.

## Key Changes
- **Data Layer**: Create `src/data/prices.ts` with all USD prices.
- **Library Layer**: Update `src/lib/i18n/utils.ts` (or add a new utility) to handle price formatting and conversion.
- **Component Layer**:
  - Update `RatesTable.astro` to fetch pricing from the new data source.
  - Update `PricingCard.astro` and `PricingSection.astro` to use dynamic prices.
- **Configuration**: Add `USD_TO_MXN_RATE` to `.env` (default 18.0) and expose it via Astro config.

## Benefits
- **Maintainability**: Update a price in one place, and it reflects everywhere (Cards, Tables, SEO).
- **Automation**: MXN prices update automatically when the exchange rate is changed in `.env`.
- **Accuracy**: Eliminates inconsistencies between landing pages and the rates table.
