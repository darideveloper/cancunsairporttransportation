# Proposal: Update Private Transfer Includes Translations

Update the "Includes" section translations for the Cancun Private Transfers to match the provided content in both English and Spanish.

## Problem
The current "Includes" section translations in `global.sections.includes` do not match the specific marketing content required for the private transfer page.

## Proposed Solution
Update the `global.sections.includes` object in `src/messages/en.json` and `src/messages/es.json` with the new titles, image attributes, and list items.

## Scope
- `src/messages/en.json`
- `src/messages/es.json`

## Out of Scope
- Changes to the `Includes.astro` component logic.
- Changes to other pages using this component (though only one page currently uses it).
