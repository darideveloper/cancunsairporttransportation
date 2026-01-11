# Proposal: Add Airport Information Section

## Why
Users need quick access to contact information, the physical location of the Cancun Airport Transportation office, and estimated travel times to major destinations. This information improves user trust and provides essential logistics for their trip.

## What Changes
- Update `InfoIconCard.astro` to support an optional `buttonText` prop rendered next to the bottom icon.
- Create a new organism `AirportInfo.astro` that includes:
    - Contact details (USA/Canada, México, Address) using `InfoIconCard`.
    - Google Maps embed using an `<iframe>`.
    - Transportation times to major destinations (Cancun, Isla Mujeres, Playa del Carmen, Tulum) using `InfoIconCard`.
- Add necessary translation strings to `src/messages/en.json` and `src/messages/es.json`.
- Integrate the `AirportInfo` component into the landing page.

## Impact
- **SEO**: Improved local SEO by including address and proximity information. Use of semantic tags (`<section>`, `<article>`, `<h2>`, `<address>`).
- **UX**: One-stop section for all essential airport and transportation logistics.
- **Accessibility**: ARIA labels for the map and icons, semantic heading hierarchy.
