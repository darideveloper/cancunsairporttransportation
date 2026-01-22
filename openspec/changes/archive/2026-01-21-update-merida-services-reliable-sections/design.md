# Design: Update Merida Pricing Section

## Overview
This change is a data-only update to the translation files (`en.json` and `es.json`). It follows the established pattern of using the `pages.cancunToMerida` key to store page-specific content.

## Architectural Reasoning
- **Minimal Impact**: By only editing translation files, we avoid any logic changes in components or Astro files.
- **Consistency**: Using existing keys (`pricing`) ensures that components like `PricingSection` correctly pick up the new content without modification.
- **Localization**: Providing both EN and ES translations maintains parity across supported languages.

## Trade-offs
- **Static Content**: The translations are hardcoded in JSON files. Any future updates will require manual edits, but this is consistent with the current project architecture.
- **Currency Conversion**: ES prices are calculated using a 18:1 MXN/USD ratio, based on existing patterns in the codebase.
