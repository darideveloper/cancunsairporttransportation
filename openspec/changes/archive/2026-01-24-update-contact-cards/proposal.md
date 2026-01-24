# Proposal: Update Contact Page with Icon Cards and Variants

## Summary
Add support for styling variants to the `BasicIconCard` component and utilize these variants to display additional contact information at the bottom of the Contact page.

## Motivation
The design requires distinct visual styles for contact information cards (white, orange, black). Currently, the `BasicIconCard` only supports a single style. Additionally, the Contact page needs to display specific regional contact numbers and email addresses using this component.

## Approach
1.  **Refactor `BasicIconCard`**: Introduce a `variant` prop (`white`, `orange`, `black`) that controls background and text colors using Tailwind implementation.
2.  **Update `Contact.astro`**: Add a new section at the bottom containing three `BasicIconCard` components.
3.  **Translations**: Add English and Spanish translations for the new contact details.

## Timeline
Immediate implementation upon approval.
