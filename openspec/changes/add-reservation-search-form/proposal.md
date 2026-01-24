# Change: Add Reservation Search Form

## Why
The "My Reservation" page currently lacks a functional search form for users to retrieve their booking details. This form is essential for user self-service and reducing support inquiries.

## What Changes
- Implement a search form in `src/components/pages/store/Reservation.astro` using project standard components (`Input.astro`, `ButtonCta.astro`).
- The form will include:
    - `SectionHeading` for the title.
    - `Input` for "Reservation Code" (name="code").
    - `Input` for "Email" (name="email", type="email").
    - `ButtonCta` (type="submit") for the "SEARCH" button.
- The form will submit via POST to the language-specific `/my-reservation` or `/es/mi-reservacion` endpoint.
- Add necessary translations for the form labels and buttons, specifically matching the user's provided text.

### Component Structure:
- **Location**: `src/components/pages/store/Reservation.astro`
- **Props**: `lang: "en" | "es"`, `pageKey: string`
- **Translations (New/Updated)**:
  - `pages.reservation.form.heading`: "MY RESERVATION" / "MI RESERVACIÓN"
  - `pages.reservation.form.code.label`: "RESERVATION CODE:" / "CÓDIGO DE RESERVACIÓN:"
  - `pages.reservation.form.email.label`: "EMAIL:" / "EMAIL:"
  - `pages.reservation.form.submit`: "SEARCH" / "BUSCAR"


## Impact
- Affected specs: `reservation-page`
- Affected code: 
  - `src/components/pages/store/Reservation.astro`
  - `src/messages/en.json`
  - `src/messages/es.json`
