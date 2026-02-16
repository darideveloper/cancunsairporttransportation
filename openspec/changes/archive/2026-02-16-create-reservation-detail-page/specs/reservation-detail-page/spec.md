# Capability: Reservation Detail Page

Define the existence and basic structure of the Reservation Detail page.

## ADDED Requirements

### Requirement: The application must provide a Reservation Detail route
The system MUST support a new route specifically for viewing reservation details, accessible in both supported languages.

#### Scenario: Viewing the reservation detail page in English
- **Given** the user is on the website
- **When** the user navigates to `/my-reservation-detail`
- **Then** the application should render the Reservation Detail component.

#### Scenario: Viewing the reservation detail page in Spanish
- **Given** the user is on the website
- **When** the user navigates to `/es/detalle-mi-reservacion`
- **Then** the application should render the Reservation Detail component translated into Spanish.

### Requirement: Use central routing catch-all system
All new pages SHALL be integrated into the existing dynamic routing infrastructure to ensure consistency in i18n handling and build-time path generation.

#### Scenario: Route registration
- **Given** the `src/lib/i18n/routes.ts` file
- **When** defining the `reservationDetail` key
- **Then** it must include both `en` and `es` paths to be picked up by `src/pages/[...path].astro`.
