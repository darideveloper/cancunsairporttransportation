# Proposal: Add Destination Checklist Items

## Summary
Add two checklist items ("Affordable travel" and "Low rates") to the sidebar of the Destinations page to highlight key value propositions for customers.

## Motivation
The user wants to display these specific benefits in the sidebar of the `Destinations.astro` page, between the "Travel with Confidence" and "Transportation Service" cards. This helps in building trust and providing quick information about the service quality and pricing.

## Proposed Changes

### Internationalization (i18n)
- Add new translation keys in `src/messages/en.json` and `src/messages/es.json` under `pages.destinations.checklist`.
  - `affordable`: "Affordable travel" / "Viaje accesible"
  - `lowRates`: "Low rates" / "Tarifas bajas"

### Components
- Use the existing `CheckListItem.astro` component to maintain consistency with the design system.
- If `CheckListItem.astro` is too restrictive (e.g., if it must be a `div` instead of `li` as per user's HTML), refactor it to accept a generic tag or create a variant. However, using it within a `<ul>` is the preferred semantic approach.

### Page Implementation
- Update `src/components/pages/landing/Destinations.astro` to include a section with the two `CheckListItem` components at line 187.
- Use Tailwind CSS to layout the items (e.g., a 2-column grid or a simple list).

## Verification Plan
1. **Manual Verification**: Run the development server and check the Destinations page (`/en/destinations` and `/es/destinations`) to ensure the checklist items are rendered correctly and translated.
2. **Automated Validation**: Run `npm run build` to ensure no regressions in the build process.
3. **OpenSpec Validation**: Run `openspec validate add-destination-checklist-items-ns`.
