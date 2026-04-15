# Proposal: Integrate Google Tag Manager

## Problem
The project currently uses a direct `gtag.js` implementation for Google Ads, which makes it difficult to manage multiple tracking pixels and marketing tags without manual code changes.

## Proposed Solution
Integrate Google Tag Manager (GTM) with ID `GTM-WKXM5PMV` in the main `Layout.astro`. This will allow for centralized management of tracking tags through the GTM interface. The existing `gtag.js` for Google Ads will remain for now (as per the user's request to "integrate GTM in the same way"), but future tags should be managed via GTM.

## Benefits
- Centralized tag management.
- Marketing team can add/update tags without developer intervention.
- Improved site performance by consolidating multiple tracking scripts into a single container.
