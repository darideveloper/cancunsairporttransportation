# Proposal: Update Transportation Services Texts

## Goal
Update the `TransportationServices` component to support page-specific item titles and implement the specific texts requested for the "Playa del Carmen" page in both English and Spanish.

## Context
The user has provided specific HTML content with titles and descriptions for the `TransportationServices` section on the Playa del Carmen page. Currently, the component uses global titles for the service items (`Airport to Hotel`, etc.) and only allows page-specific descriptions. The Spanish content requested ("De Hotel a Hotel" vs "Hotel a Hotel") requires overriding these global titles on a per-page basis.

## Plan
1.  **Refactor Component**: Update `TransportationServices.astro` to look for page-specific item titles in the translation files (e.g., `pages.playaDelCarmen.transportationServices.items.hotelToHotel.title`). If found, use them; otherwise, fall back to the global titles.
2.  **Update Translations**: Add the requested texts (titles and descriptions) to `src/messages/en.json` and `src/messages/es.json` under `pages.playaDelCarmen.transportationServices`.
