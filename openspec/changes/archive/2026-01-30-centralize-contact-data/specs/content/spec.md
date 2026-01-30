# content Specification Delta

## MODIFIED Requirements

### Requirement: Update English Footer Content
The footer MUST display the correct English content as provided by the stakeholder, including logo, tagline, social links, navigation columns, and contact details. Contact values MUST be sourced from the centralized contact data file.

#### Scenario: Display English Footer Content
- **Given** the user is viewing the site in English
- **When** they scroll to the footer
- **Then** they should see the logo with alt "Logo | Cancun Airport Transportation"
- **And** the tagline "More than a decade of experience, we offer the safest, fastest and most reliable transfer in Cancun."
- **And** social links for Facebook and Instagram using URLs from `SOCIAL_LINKS.facebook` and `SOCIAL_LINKS.instagram`
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
    - Email from `EMAIL.address`
    - USA phone from `PHONES.usa.formatted`
    - Mexico phone from `PHONES.mexico.formatted`
- **And** a "More services" link to `https://caribbean-transfers.com`

#### Scenario: Footer Social Links Import Verification
- **Given** the Footer component source code
- **When** inspected for social link URLs
- **Then** there MUST be an import statement: `import { SOCIAL_LINKS } from "../../lib/contact";`
- **And** social URLs MUST NOT be hardcoded in the component

### Requirement: Update Spanish Footer Content
The footer MUST display the correct Spanish content as provided by the stakeholder, ensuring all links and texts are localized. Contact values MUST remain in their original format (not translated).

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
- **And** contact values (phone numbers, email) MUST be identical to English version (sourced from contact data file).
- **And** a "Más servicios" link to `https://caribbean-transfers.com/es`
