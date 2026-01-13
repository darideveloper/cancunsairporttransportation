# content Specification

## Purpose
TBD - created by archiving change update-safe-trip-translations. Update Purpose after archive.
## Requirements
### Requirement: Localization of Safe Trip Booking
- The application MUST provide Spanish translations for the "Safe Trip Booking" section.

#### Scenario: User views Safe Trip section in Spanish
- GIVEN the user is on the Spanish version of the homepage (`/es`)
- WHEN they scroll to the "Safe Trip Booking" component
- THEN the title MUST be "Viaja seguro y reserva con Cancun Airport Transportation by Go Transfers"
- AND the text MUST be the spanish booking description provided
- AND the image alt text MUST be "Transporte Aeropuerto Cancun by Go Transfers"

### Requirement: Update English Footer Content
The footer MUST display the correct English content as provided by the stakeholder, including logo, tagline, social links, navigation columns, and contact details.

#### Scenario: Display English Footer Content
- **Given** the user is viewing the site in English
- **When** they scroll to the footer
- **Then** they should see the logo with alt "Logo | Cancun Airport Transportation"
- **And** the tagline "More than a decade of experience, we offer the safest, fastest and most reliable transfer in Cancun."
- **And** social links for Facebook and Instagram pointing to `gotransfers.us`
- **And** the "Destinations" column with links:
    - "Cancun Airport Transportation" -> `/`
    - "Playa del Carmen Transfers" -> `/transportation-from-cancun-airport-to-playa-del-carmen`
    - "Cancun to Tulum Shuttle" -> `/cancun-to-tulum-shuttle`
    - "Cancun to Akumal" -> `/cancun-to-akumal-shuttle`
    - "Transportation from Cancun to Merida" -> `/transportation-from-cancun-to-merida`
    - "Destinations" -> `/destinations`
- **And** the "Services" column with links:
    - "Standar Transportation" -> `/private-airport-transfer-cancun`
    - "Luxury Trasportation" -> `/luxury-transportation-cancun`
    - "Small Group Trasportation" -> `/group-transfers-cancun`
    - "Cancun Airport Taxi" -> `/cancun-airport-taxi`
- **And** the "Information" column with links to Contact, Terms, and Privacy.
- **And** the "Contact" column with:
    - Email `bookings@gotransfers.us`
    - USA phone `+1 (929) 999-1258`
    - Mexico phone `+52 (998) 387-0435`
- **And** a "More services" link to `https://caribbean-transfers.com`

### Requirement: Update Spanish Footer Content
The footer MUST display the correct Spanish content as provided by the stakeholder, ensuring all links and texts are localized.

#### Scenario: Display Spanish Footer Content
- **Given** the user is viewing the site in Spanish
- **When** they scroll to the footer
- **Then** they should see the tagline "Más de una década de experiencia, ofrecemos el traslado más seguro, veloz y confiable en Cancún."
- **And** the "Destinos" column with localized links:
    - "Taxi Aeropuerto Cancún" -> `/es`
    - "Cancun a Playa del Carmen" -> `/es/transportacion-cancun-a-playa-del-carmen`
    - "Cancun a Tulum" -> `/es/traslado-cancun-tulum`
    - "Cancun a Akumal" -> `/es/transporte-cancun-akumal`
    - "Transporte de Cancún a Mérida" -> `/es/traslado-de-cancun-a-merida`
    - "Destinos" -> `/es/destinos`
- **And** the "Servicios" column with localized links.
- **And** the "Información" column with localized links.
- **And** the "Contáctanos" column with localized labels ("Desde USA...", "México & Resto...").
- **And** a "Más servicios" link to `https://caribbean-transfers.com/es`

### Requirement: Footer Structure
The footer structure MUST be adjusted to accommodate any new content elements, such as the "More services" link, and follow the responsive grid design (9 columns on desktop).

#### Scenario: Footer Structure Update
- **Given** the current layout
- **When** rendering the columns
- **Then** the structure should accommodate the "More services" link in the 4th column (Contact column) in the grid which might have variable column spans (e.g. 9 cols on large screens).

### Requirement: Update Terms Content
The Terms and Conditions page MUST contain the specific legal text provided by the stakeholder.

#### Scenario: English Content
Given the user visits `/en/terms-and-conditions`
Then they should see the updated "Terms and Conditions" content
And it should include sections for "Cancellation and refund policy", "Disclaimer of Liability", and contact information.

#### Scenario: Spanish Content
Given the user visits `/es/terms-and-conditions`
Then they should see the updated "Términos y Condiciones" content
And it should include sections for "Política de cancelación y reembolso", "Renuncia de Responsabilidades", and contact information.

