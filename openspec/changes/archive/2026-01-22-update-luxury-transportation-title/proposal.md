# Proposal: Update Luxury Transportation Page Title

## Problem
The title for the Luxury Transportation page in the translation files is generic or inconsistent with the desired SEO/branding. Specifically, the English title is "Private Shuttle Cancun Airport", which is the same as the private transportation page.

## Proposed Solution
Update the `pages.luxury.title` key in `src/messages/en.json` and `src/messages/es.json` with the new titles provided by the user.

### New Titles
- **English (en):** `Luxury Airport Transfer Cancun`
- **Spanish (es):** `Transportación de lujo en Cancún Aeropuerto`

## Scope
- Modify `src/messages/en.json`
- Modify `src/messages/es.json`

## Out of Scope
- Changing other translation keys unless they are found to be duplicates that cause confusion (e.g., `pages.private.title` in Spanish which also says "Transportación de lujo"). *Decision: Stick strictly to the user request first.*
