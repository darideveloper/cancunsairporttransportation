# Change: Update Playa del Carmen Destinations Content

## Why
The stakeholder requested a content update for the "Destinations" section specifically on the Playa del Carmen transportation page to feature relevant destinations (Tulum, Playa del Carmen, Cancun) with updated prices and descriptions.

## What Changes
- Add new translation keys for `pages.playaDelCarmen.destinations` in English and Spanish.
- Update `en.json` and `es.json` with the provided text, prices, and links.
- Update `transportation-from-cancun-airport-to-playa-del-carmen.astro` to use these new specific translation keys instead of the generic home keys.
- Ensure the destination cards display the correct currencies and pricing format from the translation files.

## Impact
- Affected specs: `content`
- Affected code:
    - `src/messages/en.json`
    - `src/messages/es.json`
    - `src/pages/[lang]/transportation-from-cancun-airport-to-playa-del-carmen.astro`
