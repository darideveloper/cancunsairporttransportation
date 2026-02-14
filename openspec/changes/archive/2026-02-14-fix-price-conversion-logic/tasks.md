# Tasks: Fix Price Conversion Logic

- [x] Update `getFormattedPrice` in `src/lib/utils.ts` to support optional `currency` in options.
- [x] Update `getPriceValue` in `src/lib/utils.ts` to support optional `currency` parameter.
- [x] Update `getCurrencyCode` in `src/lib/utils.ts` to support optional `currency` parameter.
- [x] Update `getVehicles` in `src/lib/transportation/api.ts` to pass the store's currency to `getFormattedPrice`.
- [x] Verify that prices on the results page match the API response exactly without double conversion.
- [x] Verify that language switching on the results page preserves the currency selected by the user.
