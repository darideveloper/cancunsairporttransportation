# Update Rates Table Content

## Goal Description
Update the `RatesTable` component's content to match the new pricing strategy. This includes updating existing destinations, adding new destinations (e.g., Mahahual, Holbox, Merida), and appending the currency code (USD or MXN) to the prices in the translation files.

## User Review Required
> [!NOTE]
> Prices will now include the currency suffix directly in the translation string (e.g., "$29.99 USD").

## Proposed Changes

### Translations
#### [MODIFY] [en.json](file:///develop/astro/cancunsairporttransportation/src/messages/en.json)
- Update `ratesTable.destinations` object to include all new destinations in the specified order.
- Update `ratesTable.headers` if necessary.
- Add " USD" suffix to all prices.

#### [MODIFY] [es.json](file:///develop/astro/cancunsairporttransportation/src/messages/es.json)
- Update `ratesTable.destinations` object to include all new destinations in the specified order.
- Update `ratesTable.headers` if necessary.
- Add " MXN" suffix to all prices.

## Verification Plan

### Automated Tests
- Run `npm run dev` and verify the table renders with all rows.

### Manual Verification
- Check the Rates Table on the homepage (English) and verify:
    - Order of destinations matches the proposal.
    - Prices have " USD" suffix.
    - All 19 destinations are present.
- Check the Rates Table on the homepage (Spanish) and verify:
    - Order of destinations matches the proposal.
    - Prices have " MXN" suffix.
    - All 19 destinations are present.
