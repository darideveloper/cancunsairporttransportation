# Proposal: Add Missing Pages (Contact, Privacy, My Reservation)

## Problem Statement
The website currently has several links in its navigation (Header and Footer) that point to non-existent pages or are not properly integrated into the routing system. Specifically:
- The **Contact** page is linked but lacks a component and routing mapping.
- The **Privacy Policy** page is linked in the translation files but is missing from both the routing system and components.
- There is no **My Reservation** page, although the "My Booking" button in the menu currently incorrectly points to the Contact page.

## Objectives
- Implement the **Contact**, **Privacy**, and **My Reservation** pages with full i18n support.
- Integrate these pages into the centralized routing system (`src/lib/i18n/routes.ts` and `src/pages/[...path].astro`).
- Update the **Header CTA button** to redirect to the new **My Reservation** page instead of the Contact page.
- Update global components (Footer and BottomBar) to point to the correct localized routes.
- Ensure all new pages follow the project's design system and SEO standards.

## Scope
- **Routing**: Update `src/lib/i18n/routes.ts` and `src/pages/[...path].astro`.
- **Components**: Create `Contact.astro`, `Privacy.astro`, and `Reservation.astro` components.
- **Translations**: Add English and Spanish strings for the new pages.
- **UI**: Update `MenuBar.astro` (CTA link), `Footer.astro`, and `BottomBar.astro`.


## Out of Scope
- Implementing the backend logic for sending contact emails or fetching reservations (UI and frontend routing only).
- Refactoring the entire booking flow.
