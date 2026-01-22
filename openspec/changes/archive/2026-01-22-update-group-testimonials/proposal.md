# Update Group Transfers Testimonials

Update the testimonials section on the Group Transfers page with new, specific content and authentic-looking client profiles to improve social proof and credibility.

## Motivation
The current testimonials are generic or reused. We want to feature specific feedback related to group transfers (Cancun to Tulum, Playa del Carmen, Chichen Itza) with fresh, high-quality images and names that match the demographics.

## Proposed Changes
1.  **Update Translations**: Replace existing `pages.group.testimonials` entries in `en.json` and `es.json` with new text provided in the design.
2.  **Update Assets**: Add 3 new client profile images (`group-1.webp`, `group-2.webp`, `group-3.webp`) to `src/assets/images/clients/`.
3.  **Update Component Integration**: Update `group-transfers-cancun.astro` to import and use the new images instead of the recycled `privateClient` images.
