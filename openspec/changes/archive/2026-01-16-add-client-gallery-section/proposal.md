# Proposal: Add Client Gallery Section

## Goal
Create a new "ClientGallery" section to display client photos in a grid layout and render it on the Playa del Carmen transportation page.

## Scope
- New `ClientGallery.astro` organism component.
- Integration into `src/pages/[lang]/transportation-from-cancun-airport-to-playa-del-carmen.astro`.
- Translation updates for title and subtitle.
- Responsive grid layout (up to 4 columns).

## Context
The user wants to showcase client photos on specific destination pages to build trust. This section will be static (no zoom/hover effects required initially) and completely data-driven (props for images, i18n for text).

### Final Texts
**English:**
- **Title:** Gallery Of Customer
- **Subtitle:** Find out how our customers are enjoying their time with us.

**Spanish:**
- **Title:** Galería de clientes
- **Subtitle:** Descubra cómo nuestros clientes disfrutan de su tiempo con nosotros.
