# price-formatting Specification

## Purpose
Replace manual price formatting in VehicleBuyCard component with the project's established `getFormattedPrice()` utility to ensure consistency with other pricing components and enable automatic USD/MXN currency conversion based on language.

## ADDED Requirements

### Requirement: Use getFormattedPrice Utility
The VehicleBuyCard component MUST use the `getFormattedPrice()` utility from `src/lib/utils.ts` for all price displays.

#### Scenario: Import price formatting utility
- GIVEN the VehicleBuyCard component
- THEN it MUST import `getFormattedPrice` from `../../lib/utils`

#### Scenario: Format current price
- GIVEN a VehicleBuyCard component with `price={45.00}` and `lang="en"`
- WHEN the current price is displayed
- THEN it MUST use `getFormattedPrice(price, lang)` instead of `{currency} ${price.toFixed(2)}`
- AND the output MUST be `$45.00 USD` for English
- AND the output MUST be `$810.00 MXN` for Spanish (using configured exchange rate)

#### Scenario: Format original price
- GIVEN a VehicleBuyCard component with `originalPrice={60.00}` and `lang="en"`
- WHEN the original price is displayed with strikethrough
- THEN it MUST use `getFormattedPrice(originalPrice, lang)` instead of `{currency} ${originalPrice.toFixed(2)}`
- AND the output MUST be `$60.00 USD` for English
- AND the output MUST be `$1,080.00 MXN` for Spanish (using configured exchange rate)

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

## MODIFIED Requirements

### Requirement: VehicleBuyCard Props Interface
The VehicleBuyCard component Props interface MUST be updated to remove the currency prop.

#### Scenario: Updated Props interface
- GIVEN the VehicleBuyCard Props interface
- THEN it MUST include: `vehicleImage`, `vehicleName`, `maxPassengers`, `maxLuggage`, `price`, `originalPrice`, `rating`, `description`, `items`
- AND it MUST NOT include `currency` prop
- AND all price-related props MUST remain as `number` type
