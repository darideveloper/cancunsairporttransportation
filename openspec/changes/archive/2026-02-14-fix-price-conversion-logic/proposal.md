# Proposal: Fix Price Conversion Logic

## Problem
The current price formatting logic couples currency to language (English = USD, Spanish = MXN) and performs automatic conversion from USD to MXN when the language is Spanish. This causes issues in the vehicle results page where the API already returns prices in the requested currency (MXN or USD). As a result:
1. Prices in MXN are converted a second time, leading to inflated values.
2. Changing the language changes the displayed currency, even if the user explicitly requested a specific currency in the search form.

## Proposed Solution
Decouple currency formatting from the language by adding an explicit currency override to the pricing utilities.
1. Update `getFormattedPrice`, `getPriceValue`, and `getCurrencyCode` to accept an optional `currency` parameter.
2. If `currency` is provided, skip the automatic conversion and format the value as-is with the specified currency label.
3. Update the `getVehicles` API call to use the currency from the search store when formatting prices.
4. Maintain backward compatibility for components that don't provide a currency (defaulting to the language-based logic).

## Impact
- **Fixed**: Correct prices on the results page regardless of language.
- **Improved**: Users can see prices in their preferred currency even if they change the site language.
- **Consistent**: Existing components like `RatesTable` will continue to work as intended but can be updated to support explicit currency if needed.
