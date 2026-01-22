# Update Akumal Shuttle Translations

## Summary
Update the text content for the "Cancun to Akumal Shuttle" page in both English and Spanish translation files (`en.json` and `es.json`). This includes the FAQ section, page title/description, and adding missing keys where necessary, ensuring the provided content is accurately reflected.

## Problem
The current translations for the Akumal Shuttle page are outdated or missing specific details provided by the content team. The page needs to reflect the new copy to improve SEO and user information.

## Solution
Update the `cancunToAkumalShuttle` object in `src/messages/en.json` and `src/messages/es.json` with the provided content. Map the HTML snippet content to appropriate keys within the `faq` and `destinations` sections (if applicable, though the snippet focuses on FAQ/Rates text).

## Risks
- Potential mismatch between the provided English "Top" text (Rates-themed) and the FAQ section it seemingly targets. This proposal implements the text as provided but notes the discrepancy.
- Adding new keys to the `faq.items` object requires ensuring the `FaqSection` component iterates them correctly (it does `Object.keys`).

