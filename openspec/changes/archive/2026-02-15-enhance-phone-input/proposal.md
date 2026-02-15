# Proposal: Enhance Phone Input with Country Selection

## Problem
The current phone input in `PassengerInformation.tsx` is a basic text field. It does not provide a way for users to select their country code, which can lead to:
- Formatting inconsistencies (e.g., users omitting country codes).
- User confusion about how to enter their number (international vs. local format).
- Validation issues.

## Solution
We will replace the basic phone input with `react-phone-number-input`. This library offers:
- A built-in country selector with flags.
- Automatic formatting based on the selected country.
- Ability to prioritize specific countries in the list.

We will configure it to prioritize `US`, `GB`, `ES`, and `MX` as requested.
We will create a new reusable atom component `PhoneInput` (wrapping the library) to ensure it matches the design system's styling.

## Risks
- **Styling**: `react-phone-number-input` comes with its own styles. We need to ensure it blends seamlessly with our custom Tailwind-based `Input` component. We will need to override some CSS or provide a custom input component.
- **Bundle Size**: Adding a new library increases bundle size, but `react-phone-number-input` is relatively lightweight and the UX benefit outweighs the cost for a booking form.
