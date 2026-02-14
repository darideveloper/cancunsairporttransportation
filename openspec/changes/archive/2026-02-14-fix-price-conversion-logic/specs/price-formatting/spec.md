# price-formatting Spec Delta

## MODIFIED Requirements

### Requirement: Use getFormattedPrice Utility
The `getFormattedPrice` utility MUST support an optional `currency` in its options to bypass automatic conversion.

#### Scenario: Support explicit currency override
- GIVEN a price of `500.00` (already in MXN)
- AND `lang="es"`
- AND `options.currency="mxn"`
- WHEN `getFormattedPrice(500, "es", { currency: "mxn" })` is called
- THEN it MUST NOT apply any exchange rate conversion
- AND it MUST return `$500.00 MXN`

#### Scenario: Support explicit currency override for different language
- GIVEN a price of `500.00` (MXN)
- AND `lang="en"`
- AND `options.currency="mxn"`
- WHEN `getFormattedPrice(500, "en", { currency: "mxn" })` is called
- THEN it MUST return `$500.00 MXN` (independent of language)

## NEW Requirements

### Requirement: Update Supporting Utilities
The `getPriceValue` and `getCurrencyCode` utilities MUST support an optional `currency` parameter.

#### Scenario: getPriceValue override
- GIVEN a price of `500.00` (MXN)
- AND `lang="en"`
- AND `options.currency="mxn"`
- WHEN `getPriceValue(500, "en", { currency: "mxn" })` is called
- THEN it MUST return `"500.00"` without conversion.
