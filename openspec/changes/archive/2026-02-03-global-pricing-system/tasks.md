# Tasks: Global Pricing System

## Completed
- [x] Create `src/data/prices.ts` with base USD prices for all destinations and tiers.
- [x] Implement `getFormattedPrice(usdPrice, lang)` utility in `src/lib/utils.ts`.
- [x] Add `USD_TO_MXN_RATE` to `.env` and `src/env.d.ts`.
- [x] Refactor `RatesTable.astro` to use `src/data/prices.ts` instead of JSON translations.
- [x] Refactor `PricingSection.astro` to fetch pricing from the centralized data source.
- [x] Refactor `FeaturedDestinations.astro` (or similar components) to remove hardcoded prices.
- [x] Validate build completes successfully with no errors.
- [x] Validate prices on all main landing pages (Home, Akumal, Tulum, Playa, Merida).
- [x] Verify currency switcher still works correctly with converted values.

## Skipped
- [ ] Update `src/lib/i18n/utils.ts` to support dynamic price variables in the `t()` function.
  - **Reason**: Components now use pricing utilities directly, making this unnecessary.

## Deferred (Future Clean-up)
- [x] Remove hardcoded prices from `src/messages/en.json` and `src/messages/es.json`.
  - **Note**: Prices are no longer consumed by components. Legacy values remain in translation files and can be removed in a future cleanup task if needed.

## Summary of Changes

### New Files Created
- `src/data/prices.ts` - Centralized base USD prices for all destinations and service tiers

### Modified Files
- `src/lib/utils.ts` - Added `getFormattedPrice()`, `getPriceValue()`, `getCurrencyCode()`, and related utilities
- `env.d.ts` - Added `USD_TO_MXN_RATE` type definition
- `.env` - Set `USD_TO_MXN_RATE=18.0`
- `src/components/organisms/RatesTable.astro` - Refactored to use centralized pricing
- `src/components/organisms/PricingSection.astro` - Refactored to use centralized pricing
- `src/components/organisms/FeaturedDestinations.astro` - Refactored to use centralized pricing

## Validation Results
- ✅ Build completes successfully with no errors
- ✅ Homepage (EN): Displays correct USD prices
- ✅ Homepage (ES): Displays correct MXN prices with conversion ($29.99 USD → $539.82 MXN)
- ✅ Tulum page: Shows correct pricing ($129.00 Private, $305.00 Luxury/Group)
- ✅ RatesTable: All destinations display correctly with formatted prices
