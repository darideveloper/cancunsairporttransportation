# Proposal: Translate Cancun Airport Taxi Private Details

Update the translation keys for the `taxi` page in both English and Spanish to reflect the specific taxi service details (3 passengers capacity and corresponding prices) as provided in the HTML snippets.

## Scope
- Modify `src/messages/en.json`
- Modify `src/messages/es.json`

## Why
The current `taxi` page translations for `privateDetails` are placeholders or copies from the `private` transportation service (which supports 8 passengers). The new content specifies the Taxi service which supports up to 3 passengers and has different pricing.

## What Changes
### Translations
#### `en.json`
Update `pages.taxi.privateDetails`:
- Title: "Cancun Airport Taxi"
- Description: Updated with taxi-specific text.
- Table: Updated with taxi prices ($34.99 USD / $69.99 USD) and capacity (3 passengers).

#### `es.json`
Update `pages.taxi.privateDetails`:
- Title: "Taxi Aeropuerto Cancun"
- Description: Updated with taxi-specific text.
- Table: Updated with taxi prices ($664.81 MXN / $1,329.81 MXN) and capacity (3 pasajeros).
