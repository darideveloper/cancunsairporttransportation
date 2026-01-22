º# Proposal: Enable Dynamic PrivateDetails Component

## Context
The `PrivateDetails` component is currently hardcoded to fetch content from the translation key `pages.privateAirportTransfer.privateDetails`. This prevents it from being reused effectively on other pages like "Group Transfers" or "Luxury Transportation", which share the same layout but require different content.

## Objective
Make `PrivateDetails` dynamic by accepting a `page` prop, allowing it to fetch content based on the current page's translation key (e.g., `pages.group.privateDetails`).

## Changes
- Update `PrivateDetails.astro` to accept a `page` prop.
- Update `group-transfers-cancun.astro`, `luxury-transportation-cancun.astro`, and `private-airport-transfer-cancun.astro` to pass the `page` prop.
- Add/Update translation keys in `en.json` and `es.json` to support `privateDetails` for `group`, `luxury`, and `private` keys.

## Impact
- **Reuse**: The component becomes a generic organism usable across any page with similar data needs.
- **Maintainability**: Content for each page is isolated in its respective translation section.
