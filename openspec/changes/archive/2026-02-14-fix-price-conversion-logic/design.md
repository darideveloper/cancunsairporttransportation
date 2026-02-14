# Design: Pricing Utility Refactoring

## Architecture Overview
The solution involves modifying the core utility functions in `src/lib/utils.ts` and their usage in `src/lib/transportation/api.ts`.

### 1. Utility Updates (`src/lib/utils.ts`)
The `getFormattedPrice` function will be updated to handle an explicit currency:
- **Current Signature**: `getFormattedPrice(usdPrice, lang, options)`
- **New Signature**: `getFormattedPrice(price, lang, options)` where `options` includes an optional `currency: 'usd' | 'mxn'`.

**Logic Flow**:
1. If `options.currency` is provided:
   - Use that currency code for the label.
   - Do NOT multiply by the exchange rate.
   - Format the number using the specified `lang` for locale-specific separators.
2. If `options.currency` is NOT provided:
   - Fallback to the current logic: English means USD, Spanish means MXN with conversion.

### 2. API Utility Updates (`src/lib/transportation/api.ts`)
The `getVehicles` function will be updated:
1. Retrieve the `currency` from `useSearchFormStore.getState()`.
2. Pass this currency to `getFormattedPrice(parseFloat(item.price), lang, { currency: storeCurrency.toLowerCase() })`.

## Data Mapping
The `LegacyQuoteResponse` items will now be mapped correctly since the input price to `getFormattedPrice` will be treated as the final amount if a currency override is present.

## Testing Strategy
- **Unit Test**: Verify `getFormattedPrice` with and without currency overrides.
- **Manual Verification**: Search in MXN, switch language to English, and verify the price remains the same numeric value but with the "USD" label updated if it was meant to stay MXN (Actually, if user selects MXN, it should stay MXN even in English site if that's the intent, or the store currency should be used).
- **Store Sync**: Ensure switching language doesn't reset the store currency unexpectedly.
