# Contact Page Update

## ADDED Requirements

### Requirement: Regional Contact Cards
The contact page MUST display three contact cards at the bottom for specific regions and email.

#### Scenario: Additional Contact Info
- **Given** the user is at the bottom of the Contact page (below the main form/map)
- **When** the page renders
- **Then** a new container (grid or flex) must be visible.
- **And** it must contain 3 `BasicIconCard` components using the new variants.
- **And** Card 1 must use the `phone` icon, title "From USA / Canada", text "+1 (929) 999-1258", and `white` (default) variant logic.
- **And** Card 2 must use the `phone` icon, title "México & Rest of the world", text "+52 (998) 387-0435", and `orange` variant logic.
- **And** Card 3 must use the `envelope` icon, title "Send us an email at:", text "bookings@gotransfers.us", and `black` variant logic.

#### Scenario: Spanish Translations
- **Given** the user views the page in Spanish
- **When** the cards render
- **Then** Card 1 title must be "Desde USA / Canada".
- **And** Card 2 title must be "México & Resto del mundo".
- **And** Card 3 title must be "Mándanos un email a:".
