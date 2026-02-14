# Render Address in Suggestions

## Summary
Update the booking form suggestions to display the address below the location name in a smaller font.

## Why
Currently, the autocomplete suggestions only show the location name. Users might need more context (the address) to confirm they are selecting the correct location, especially if multiple locations have similar names.

## Solution
1.  Update `LocationData` interface in the store to include an optional `address` field.
2.  Update `LocationAutocomplete` component to:
    *   Map the `address` field from the API response.
    *   Render the `address` in the suggestion list item, below the name, using a smaller font size.

## Risks
*   **Low**: Minor UI change.
*   **Low**: Store interface update might affect other consumers if strict checking is in place, but adding an optional field is generally safe.
