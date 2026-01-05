# Proposal: Add Banner Stats Section

## Problem
The website needs a "Banner Stats" section to build trust and highlight key performance indicators (KPIs) like years of experience, number of clients, and support availability.

## Proposed Solution
Create a new Astro component `BannerStats.astro` located in `src/components/organisms/`. This section will be static but will use the internationalization system to handle translations for English and Spanish.

### Key Features
- **Semantic HTML**: Uses `<section>`, reusable `H2` component, and ARIA labels.
- **Accessibility**: Includes `aria-labelledby` for the section and descriptive roles/labels for icons.
- **Components Reuse**: Reuses `src/components/atoms/H2.astro` for the title.
- **Icons**: Uses `react-icons` for the stats icons (e.g., `FaUsers`, `FaRegCalendarAlt`, `FaCustomerService`).
- **i18n**: Fetches translations internally using `getLangFromUrl` and `useTranslations`.
- **Optimization**: Clean HTML structure without inline styles.

## Scope
- Define translation keys in `en.json` and `es.json`.
- Create `BannerStats.astro` with the requested HTML structure.
- Integrate the section into the translation system.
- Add `BannerStats` component to `src/pages/[lang]/index.astro` (e.g., before the footer or after Banner CTA) to verify implementation.
