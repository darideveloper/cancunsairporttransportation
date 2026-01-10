# Refactor RatesTable to Apply DRY Principles

## Problem
The `RatesTable.astro` component currently contains repetitive HTML markup for the three service categories (Private, Luxury, Group). This repetition occurs in the main headers, the "One Way"/"Round Trip" subheaders, and the data cells within the table body. This makes the code harder to read and maintain.

## Solution
Refactor the component to define the service categories in a configuration array and iterate over this array to generate the table columns. This will reduce code duplication while preserving the exact same visual output, HTML structure, and accessibility attributes.

## Impact
- **Refactor**: `src/components/molecules/RatesTable.astro`
- No visual changes are expected.
- No changes to translation files are required, as keys will be mapped or maintained.
