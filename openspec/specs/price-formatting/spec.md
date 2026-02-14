# price-formatting Specification

## Purpose
TBD - created by archiving change enhance-vehicle-buy-card. Update Purpose after archive.
## Requirements
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

### Requirement: Remove Currency Prop
The VehicleBuyCard component MUST NOT require a manual `currency` prop since currency is determined by language.

#### Scenario: Remove currency from Props interface
- GIVEN the VehicleBuyCard component Props interface
- THEN the `currency?: string` prop MUST be removed
- AND the component MUST determine currency automatically based on `lang` parameter

#### Scenario: Update component usage
- GIVEN the Results page uses VehicleBuyCard
- THEN it MUST NOT pass a `currency` prop
- AND the component MUST automatically display USD for English and MXN for Spanish

### Requirement: Consistency with Other Components
The VehicleBuyCard price formatting MUST match the formatting used in other pricing components.

#### Scenario: Match RatesTable formatting
- GIVEN RatesTable uses `getFormattedPrice(pricing.private?.ow, lang)`
- AND VehicleBuyCard uses `getFormattedPrice(price, lang)`
- THEN both MUST produce identical formatting for the same price and language
- AND both MUST include the currency code (USD/MXN)
- AND both MUST use locale-specific number formatting

#### Scenario: Match PrivateDetails formatting
- GIVEN PrivateDetails uses `getFormattedPrice()` for price display
- AND VehicleBuyCard uses `getFormattedPrice()` for price display
- THEN both MUST produce identical formatting for the same price and language

### Requirement: Locale-Specific Number Formatting
Prices MUST be formatted according to the locale's number formatting conventions.

#### Scenario: English locale formatting
- GIVEN a VehicleBuyCard with `lang="en"` and `price={1234.56}`
- WHEN the price is formatted
- THEN it MUST display as `$1,234.56 USD`
- AND it MUST use comma as thousands separator
- AND it MUST use period as decimal separator

#### Scenario: Spanish locale formatting
- GIVEN a VehicleBuyCard with `lang="es"` and `price={1234.56}` (USD)
- WHEN the price is formatted and converted to MXN
- THEN it MUST display as `$22,222.08 MXN` (assuming 18.0 exchange rate)
- AND it MUST use comma as thousands separator
- AND it MUST use period as decimal separator (es-MX locale)

### Requirement: VehicleBuyCard Props Interface
The VehicleBuyCard component Props interface MUST be updated to remove the currency prop.

#### Scenario: Updated Props interface
- GIVEN the VehicleBuyCard Props interface
- THEN it MUST include: `vehicleImage`, `vehicleName`, `maxPassengers`, `maxLuggage`, `price`, `originalPrice`, `rating`, `description`, `items`
- AND it MUST NOT include `currency` prop
- AND all price-related props MUST remain as `number` type

