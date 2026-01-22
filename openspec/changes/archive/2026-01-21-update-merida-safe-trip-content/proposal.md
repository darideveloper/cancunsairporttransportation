# Proposal: Update Merida Safe Trip Content

Update the "Safe Trip" section in the Merida transportation page with final texts and correct image paths.

## Change ID
`update-merida-safe-trip-content`

## Context
The Merida page was recently updated but some sections still have placeholder or incorrect content from other pages (like Tulum or Akumal). This proposal addresses the `safeTrip` section.

## Proposed Changes
- Update `en.json` and `es.json` with the provided texts for `pages.cancunToMerida.safeTrip`.
- Move `trip-advisor.webp` to `src/assets/images/destinations/cancun-to-merida/` if needed.
- Update the Astro page to import the image from the correct path.

## Impact
- Corrects information for Merida travelers.
- Aligns assets with established project structure.
