# Proposal: Cleanup Translation Prices

## Problem Statement

The `src/messages/en.json` and `src/messages/es.json` translation files contain **300+ hardcoded price values** that are now redundant after the global pricing system implementation. Additionally, at least one component (`Destinations.astro`) still consumes these legacy prices, and FAQ sections render static text without dynamic price capability.

## Scope

1. Refactor remaining components (`Destinations.astro`) to consume `src/data/prices.ts`.
2. Refactor `FaqSection.astro` to support dynamic variable interpolation for prices.
3. Remove all hardcoded prices from translation files.
4. Replace text content prices (FAQs, descriptions) with dynamic interpolation placeholders.

---

## Price Categories to Clean Up

### Category 1: RatesTable Destinations (115 values per language = 230 total)

**Location**: `global.ratesTable.destinations.[destination].[priceField]`

| Destination                                                                                                                                                                                                                     | Fields to Remove                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| cancunDowntown, cancunZone, puertoMorelos, playaMujeres, puertoJuarez, playaDelCarmen, costaMujeres, cozumel, puertoAventuras, akumal, tulum, mahahual, holbox, valladolid, merida, bacalar, coba, tulumHotelZone, tulumAirport | privateOw, privateRt, luxuryOw, luxuryRt, groupOw, groupRt        |
| **merida (page specific)**                                                                                                                                                                                                | `pages.merida.ratesTable.destinations.merida` (privateOw, etc.) |

---

### Category 2: Pricing Cards (45 values per language = 90 total)

**Location**: `pages.[page].pricing.cards.[tier].price`

| Page                               | Cards to Update                          |
| ---------------------------------- | ---------------------------------------- |
| home, playa, akumal, tulum, merida | luxury.price, private.price, group.price |

---

### Category 3: Destination Cards (48 values per language = 96 total)

**Location**: `pages.[page].destinations.cards.[destination].price`

| Page                               | Cards to Update                        |
| ---------------------------------- | -------------------------------------- |
| home, playa, akumal, tulum, merida | tulum.price, playa.price, cancun.price |
| **destinations**             | tulum.price, playa.price, cancun.price |

---

### Category 4: Inline Tables (20 values per language = 40 total)

**Location**: `pages.[page].privateDetails.table.rows[*].oneWay/roundTrip`

| Page                   | Table Prices                          |
| ---------------------- | ------------------------------------- |
| home                   | rows[0,1].oneWay, rows[0,1].roundTrip |
| luxury                 | rows[0,1].oneWay, rows[0,1].roundTrip |
| group                  | rows[0,1].oneWay, rows[0,1].roundTrip |
| privateAirportTransfer | rows[0,1].oneWay, rows[0,1].roundTrip |

---

### Category 5: FAQ/Text Content with Embedded Prices (6 values per language = 12 total)

**Location**: Various FAQ answers containing hardcoded price mentions

| Location                                   | Action                                 |
| ------------------------------------------ | :------------------------------------- |
| `pages.playa.faq.items.cost.answer`      | Interpolate `{pricePrivateOw}` ...   |
| `pages.playa.faq.items.cheapest.answer`  | Interpolate `{pricePrivateOw}`       |
| `pages.tulum.faq.items.cheapest.answer`  | Interpolate `{priceTulumPrivateOw}`  |
| `pages.akumal.faq.items.cost.answer`     | Interpolate `{priceAkumalPrivateOw}` |
| `pages.akumal.faq.items.cheapest.answer` | Interpolate `{priceAkumalPrivateOw}` |

---

## Required Code Changes

Before cleaning up translation files, the following code changes are required:

1. **`Destinations.astro`**: Refactor to use `src/data/prices.ts` instead of `t(pages.destinations.cards.price)`.
2. **`FaqSection.astro`**: Implement logic to fetching pricing for the current page and replace placeholders (e.g., `{pricePrivateOw}`) in FAQ answer text before rendering.
3. **`PrivateDetails.astro`**: Refactor `privateDetails` table usage to use dynamic prices.

## Benefits

- Complete removal of redundant data
- Guaranteed consistency across all 19 destinations
- Dynamic currency conversion for all price displays including text content
