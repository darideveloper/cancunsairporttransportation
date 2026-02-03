# Tasks: Cleanup Translation Prices

## Phase 0: Component Refactoring (Pre-requisite)

- [x] **Task 0.1**: Refactor `src/components/pages/landing/Destinations.astro` [COMPLETED]
  - Import `getDestinationPricing`, `getFormattedPrice` from utils
  - Remove usage of `t(...price)`
  - Inject dynamic prices for Tulum, Playa, and Cancun

- [x] **Task 0.2**: Refactor `src/components/organisms/FaqSection.astro` [COMPLETED]
  - Import pricing utils
  - Determine destination based on `page` prop
  - replace variables like `{pricePrivateOw}` in FAQ answers with formatted dynamic prices

- [x] **Task 0.3**: Refactor `src/components/organisms/PrivateDetails.astro` [COMPLETED]
  - Identify usage of `pages.private.privateDetails.table`
  - Refactor to use dynamic prices from `src/data/prices.ts`

## Phase 1: Core Translation Cleanup

- [x] **Task 1.1**: Remove price fields from `global.ratesTable.destinations` in `en.json` (Lines 183-357) [ALREADY DONE]
- [x] **Task 1.2**: Remove price fields from `global.ratesTable.destinations` in `es.json` (Lines 183-357) [ALREADY DONE]
- [x] **Task 1.3**: Remove Merida-specific rates table prices from `es.json` (`pages.merida.ratesTable` lines 1778-1791) and `en.json` [COMPLETED]

## Phase 2: Pricing Cards Cleanup

- [x] **Task 2.1**: Remove `price` field from all pricing cards in `en.json` (home, playa, akumal, tulum, merida) [COMPLETED]
- [x] **Task 2.2**: Remove `price` field from all pricing cards in `es.json` [COMPLETED]

## Phase 3: Destination Cards Cleanup

- [x] **Task 3.1**: Remove `price` field from destination cards in `en.json` (home, playa, akumal, tulum, merida, destinations) [COMPLETED]
- [x] **Task 3.2**: Remove `price` field from destination cards in `es.json` [COMPLETED]

## Phase 4: Inline Table Cleanup

- [x] **Task 4.1**: Remove prices from inline tables in `en.json` (home, luxury, group, privateAirportTransfer) [COMPLETED]
- [x] **Task 4.2**: Remove prices from inline tables in `es.json` [COMPLETED]

## Phase 5: FAQ Text Content Cleanup

- [x] **Task 5.1**: Update FAQ answers with embedded prices in `en.json` (playa, tulum, akumal) [COMPLETED]
- [x] **Task 5.2**: Update FAQ answers with embedded prices in `es.json` [COMPLETED]

## Phase 6: Validation

- [x] **Task 6.1**: Verify build succeeds [COMPLETED]
- [x] **Task 6.2**: Visual validation of Destinations page and FAQ sections [COMPLETED]
