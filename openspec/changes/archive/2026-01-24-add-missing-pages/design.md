# Design: Missing Pages Implementation

## Routing Strategy
The project uses a centralized routing system in `src/lib/i18n/routes.ts`. New pages must be added there as keys with their English and Spanish slugs.
The `src/pages/[...path].astro` file uses these keys to fetch static paths and map them to Astro components.

### Planned Route Keys
- `contact`: `/contact` (en), `/es/contacto` (es) - *Existing key, needs mapping*
- `privacy`: `/privacy` (en), `/es/privacidad` (es) - *New key*
- `reservation`: `/my-reservation` (en), `/es/mi-reservacion` (es) - *New key*

## Component Architecture

### Privacy Page
- Will use `LegalLayout.astro` to ensure consistency with the existing Terms & Conditions page.
- Content will be fetched from translation files.

### Contact Page
- Will use the standard `Layout.astro`.
- Will include a contact form (reactive component if needed, but Astro + simple form for now as per minimal implementation guideline).
- Will include contact details (Phones, Email, Address) reused from the translation `global` section.

### My Reservation Page
- Will use the standard `Layout.astro`.
- Will provide a simple form for users to input their Reservation ID/Email.
- Will be linked from the "My Booking" button in the `MenuBar.astro`.

## Translation Structure
New nested objects will be added to `src/messages/en.json` and `src/messages/es.json` under `pages.contact`, `pages.privacy`, and `pages.reservation`.

## UI Updates
- **MenuBar**: Update `CTA_LINK` logic to point to the `reservation` route.
- **BottomBar**: Add the Privacy link next to the Terms link.
- **Footer**: Ensure columns point to the correct localized routes using `getLocalizedPath`.
