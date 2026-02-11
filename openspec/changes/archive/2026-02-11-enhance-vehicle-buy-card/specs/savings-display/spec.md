# savings-display Specification

## Purpose
Calculate and display the savings percentage when a vehicle has a discounted price, emphasizing the value proposition to users and potentially increasing conversion rates.

## ADDED Requirements

### Requirement: Savings Calculation
The VehicleBuyCard component MUST calculate savings when the original price is higher than the current price.

#### Scenario: Calculate dollar savings
- GIVEN a VehicleBuyCard with `originalPrice={60.00}` and `price={45.00}`
- WHEN the component renders
- THEN it MUST calculate `savings = originalPrice - price`
- AND the savings MUST equal `15.00`

#### Scenario: Calculate savings percentage
- GIVEN a VehicleBuyCard with `originalPrice={60.00}` and `price={45.00}`
- WHEN the component renders
- THEN it MUST calculate `savingsPercentage = Math.round((savings / originalPrice) * 100)`
- AND the savingsPercentage MUST equal `25`

#### Scenario: Handle zero original price
- GIVEN a VehicleBuyCard with `originalPrice={0}` and `price={45.00}`
- WHEN the component renders
- THEN it MUST set `savingsPercentage = 0` to avoid division by zero
- AND it MUST NOT display savings

#### Scenario: Determine if savings exist
- GIVEN a VehicleBuyCard with calculated `savingsPercentage`
- WHEN `savingsPercentage > 0`
- THEN `hasSavings` MUST be `true`
- WHEN `savingsPercentage <= 0`
- THEN `hasSavings` MUST be `false`

### Requirement: Savings Display
The VehicleBuyCard component MUST display the savings percentage when savings exist.

#### Scenario: Display savings when present
- GIVEN a VehicleBuyCard with `hasSavings={true}` and `savingsPercentage={25}`
- WHEN the component renders
- THEN it MUST display a savings indicator
- AND it MUST show the text from `t("global.ui.vehicleCard.save")` followed by the percentage
- AND the output MUST be "Save 25%" in English or "Ahorra 25%" in Spanish

#### Scenario: Hide savings when not present
- GIVEN a VehicleBuyCard with `hasSavings={false}`
- WHEN the component renders
- THEN it MUST NOT display any savings indicator

#### Scenario: Savings placement
- GIVEN a VehicleBuyCard displays savings
- THEN the savings indicator MUST appear in the pricing section
- AND it MUST appear after the original price display
- AND it MUST appear before or alongside the current price display

### Requirement: Accessibility for Savings
The savings display MUST be accessible to screen readers and assistive technologies.

#### Scenario: ARIA live region
- GIVEN a VehicleBuyCard displays savings
- THEN the savings container MUST have `role="status"`
- AND it MUST have `aria-live="polite"`
- AND this ensures screen readers announce the savings when the component loads

### Requirement: Translation Support
The savings display MUST support both English and Spanish languages.

#### Scenario: English savings text
- GIVEN the language is English (`lang="en"`)
- WHEN savings are displayed
- THEN the text MUST use `t("global.ui.vehicleCard.save")`
- AND it MUST resolve to "Save"
- AND the full display MUST be "Save 25%" (for 25% savings)

#### Scenario: Spanish savings text
- GIVEN the language is Spanish (`lang="es"`)
- WHEN savings are displayed
- THEN the text MUST use `t("global.ui.vehicleCard.save")`
- AND it MUST resolve to "Ahorra"
- AND the full display MUST be "Ahorra 25%" (for 25% savings)

#### Scenario: Translation keys exist
- GIVEN the translation files `src/messages/en.json` and `src/messages/es.json`
- THEN `global.ui.vehicleCard.save` MUST exist in both files
- AND the English value MUST be "Save"
- AND the Spanish value MUST be "Ahorra"

### Requirement: Visual Styling Preparation
The savings display MUST have empty class attributes ready for styling.

#### Scenario: Empty class attributes
- GIVEN a VehicleBuyCard displays savings
- THEN the savings container div MUST have `class=""`
- AND the savings text span MUST have `class=""`
- AND this allows for future styling without modifying the component structure

### Requirement: Translation System
The global UI translation keys MUST include savings-related text.

#### Scenario: Add savings translation key
- GIVEN the translation files under `global.ui.vehicleCard`
- THEN a new key `save` MUST be added
- AND it MUST have the value "Save" in English
- AND it MUST have the value "Ahorra" in Spanish
