# Restyle Booking Submit Button

## Summary
Refactor the submit button in the booking submission component to use a native HTML `<button>` tag instead of a reusable `<ButtonCta>` component. The new button will feature custom styling implemented via Tailwind CSS classes, mapping specifically requested design properties while preserving the existing submission logic and behavior.

## Motivation
The user requested a distinct, new style for the booking submission button that diverges from the standard `ButtonCta` component. To achieve this without affecting the rest of the application's CTA buttons or over-complicating the reusable component, the button is being refactored to a vanilla HTML `<button>` styled specifically for the registration form using Tailwind CSS utility classes.

## Affected Areas
- `src/components/organisms/booking/BookingSubmission.tsx`
