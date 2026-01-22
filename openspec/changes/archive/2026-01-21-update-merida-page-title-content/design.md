# Design: Update Merida Page Title Content

## Architectural Reasoning
This change is a simple translation update. No architectural changes are required. We are reusing the existing `cancunToMerida` key in the translation files, as specified by the user.

## Implementation Details
- Directly modify `src/messages/en.json` and `src/messages/es.json`.
- Ensure the `title` field reflects the requested text exactly.
