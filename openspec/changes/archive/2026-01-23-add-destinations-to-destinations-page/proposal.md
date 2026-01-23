# Proposal: Add Destinations Section to Destinations Page

This proposal outlines the steps to render the `Destinations` organism at the bottom of the `Destinations` page, including the localized content for both English and Spanish as provided by the user.

## Problem
The `Destinations` page currently only contains a booking form and lacks the visual list of top destinations that is already implemented as an organism. The user wants to display this list with specific localized data.

## Solution
1. Add the `pages.destinations` key to `src/messages/en.json` and `src/messages/es.json` with the provided content.
2. Update `src/components/pages/landing/Destinations.astro` to import and render the `Destinations` organism (from `src/components/organisms/Destinations.astro`).
3. Ensure the translations follow the existing nested structure expected by the `Destinations` organism.

## Scope
- Translation files: `src/messages/en.json`, `src/messages/es.json`.
- Page component: `src/components/pages/landing/Destinations.astro`.

## Dependencies
- `src/components/organisms/Destinations.astro` must be correctly configured to receive the `page="destinations"` prop.
