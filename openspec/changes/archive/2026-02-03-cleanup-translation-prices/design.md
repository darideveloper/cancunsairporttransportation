# Design: Translation Price Cleanup

## Architecture
The removal of hardcoded prices from translation files completes the transition to the Global Pricing System.

### Data Flow
**Before:**
`Component` -> `useTranslations` -> `messages.json` (Static "$100")

**After:**
`Component` -> `useTranslations` -> `messages.json` (Text "Prices start at {price}")
             + `getFormattedPrice(prices.ts)` -> (Dynamic "$100")

## Migration Strategy
1. **Destructive Updates**: We will directly remove the `price`, `privateOw`, etc. keys from JSON files.
2. **Backward Compatibility**: Since components have already been refactored to use `prices.ts`, removing these keys is safe and will not cause runtime errors (undefined values would just be ignored if code was still trying to access them, but the code is already updated).

## Validation Plan
- **Static Analysis**: Verify keys are absent from JSON files.
- **Visual Regression**: Check FAQs and Pricing components to ensure placeholders are correctly replaced and no raw `{variable}` syntaxes are exposed to users.
