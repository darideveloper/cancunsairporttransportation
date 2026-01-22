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

### Requirement: Playa del Carmen Page Content

The Playa del Carmen destination page MUST display specific "Safe and Reliable" content.

#### Scenario: Displaying localized content
- WHEN the user visits the Playa del Carmen page in Spanish
- THEN they see the title "Transportación desde Cancún a Playa del Carmen, segura y confiable"
- AND they see the specific 3-paragraph description provided.
- AND they see the Trip Advisor image.

#### Scenario: English localization
- WHEN the user visits the Playa del Carmen page in English
- THEN they see the title "Transportation from Cancun to Playa del Carmen, safe and reliable"
- AND they see the translated description.

### Requirement: Pricing Section Content (English)

The pricing section MUST contain the exact English text provided.

#### Scenario: English Pricing Display
- WHEN the user views the Pricing section in English
- THEN the Section Title is "Transportation Services to and from Playa del Carmen"
- AND the Section Subtitle is "List of our transportation services"
- AND the "Luxury" card contains:
  - Title: "Cancun to Playa del Carmen Luxury Transportation"
  - Price: "$145.00 USD"
  - Description: "Elevate your transportation experience between Cancun Airport to Playa del Carmen with our luxury transportation service. Designed for 1 to 5 passengers, enjoy the comfort and luxury of a Suburban or similar vehicle."
- AND the "Private" card contains:
  - Title: "Private Transportation from Cancun to Playa del Carmen"
  - Price: "$69.99 USD"
  - Description: "Our transportation service from Cancun Airport to Playa del Carmen is the most popular and affordable option in the Riviera Maya. We offer spacious, air-conditioned, safe, and clean vehicles that accommodate groups ranging from 1 to 8 people."
  - It is marked as "Most Popular"
- AND the "Group" card contains:
  - Title: "Cancun to Playa del Carmen Group Transportation"
  - Price: "$145.00 USD"
  - Description: "Traveling with a group of more than 8 passengers? Save money and book our group transportation service, accommodating up to 16 passengers. Enjoy a comfortable and safe journey in our spacious vehicles."

### Requirement: Pricing Section Content (Spanish)

The pricing section MUST contain the exact Spanish text provided.

#### Scenario: Spanish Pricing Display
- WHEN the user views the Pricing section in Spanish
- THEN the Section Title is "Servicios de transporte desde y hacia Playa del Carmen"
- AND the Section Subtitle is "Lista de nuestros servicios de transporte"
- AND the "Luxury" card contains:
  - Title: "Transportación de Lujo de Cancún a Playa del Carmen"
  - Price: "$2610.00 MXN"
  - Description: "Eleve su experiencia de transportación entre el Aeropuerto de Cancún y Playa del Carmen con nuestro servicio de transportación de lujo. Diseñado para 1 a 5 pasajeros, disfrute de la comodidad y el lujo de una Suburban o vehículo similar."
- AND the "Private" card contains:
  - Title: "Transportación Privada de Cancún a Playa del Carmen"
  - Price: "$1259.82 MXN"
  - Description: "Nuestro servicio de transportación del Aeropuerto de Cancún a Playa del Carmen es la opción más popular y económica en la Riviera Maya. Ofrecemos vehículos espaciosos, con aire acondicionado, seguros y limpios que acomodan grupos de 1 a 8 personas."
  - It is marked as "Más Vendido"
- AND the "Group" card contains:
  - Title: "Transportación de Cancún a Playa del Carmen para Grupos"
  - Price: "$2610.00 MXN"
  - Description: "¿Viaja con un grupo de más de 8 pasajeros? Ahorre dinero y reserve nuestro servicio de transporte para grupos, con capacidad para hasta 16 pasajeros. Disfrute de un viaje cómodo y seguro en nuestros espaciosos vehículos."

### Requirement: Shared Labels
- Fixed labels MUST be separated from dynamic content.
- "Most Popular" / "Más Vendido"
- "Price from" / "Precio desde"
- "Book now" / "Reservar"
- Feature list:
  - EN: "Private Service", "Includes airport taxes and traveler's insurance", "24H service hours"
  - ES: "Servicio privado", "Incluye impuestos de aeropuerto y seguro del viajero", "Servicio 24H"

#### Scenario: Shared Labels Consistency
- WHEN the user views the Pricing section in any language
- THEN the static labels (e.g., "Price from", "Most Popular") are rendered from the `shared` translation scope
- AND the feature list items are consistent across all cards.

### Requirement: "How to Move" Section Content

The "How to Move" section (formerly "Why Choose Us") MUST contain the exact localized text provided by the user.

#### Scenario: English Content
- WHEN the user views the "How to Move" section in English
- THEN the title is "How to move to Playa del Carmen from Cancun?"
- AND the content includes 5 specific paragraphs describing the service, location, options, commitment, and communication.
- AND the image displayed is `destination.webp`.

#### Scenario: Spanish Content
- WHEN the user views the "How to Move" section in Spanish
- THEN the title is "¿Cómo trasladarse a Playa del Carmen desde Cancún?"
- AND the content includes 5 specific paragraphs (translated) matching the English structure.
- AND the image displayed is `destination.webp`.

### Requirement: Client Gallery Display
The system MUST render a gallery reference section with client photos.

#### Scenario: Displaying gallery on desktop
Given I am on the Playa del Carmen transportation page
When I scroll to the client gallery section
Then I should see a title and subtitle
And I should see a grid of 4 client images in a single row (for 4 images)

#### Scenario: Responsive layout
Given I am on the Playa del Carmen transportation page on a mobile device
When I view the gallery section
Then the images should be stacked or in a 2-column grid appropriate for mobile width

#### Scenario: Content Localization
Given I am viewing the page in Spanish
Then the gallery title and subtitle should be in Spanish

### Requirement: Update Popular Hotels Content
The popular hotels section MUST use the specific, approved list of hotels and titles provided by stakeholders to improved SEO and user relevance.

#### Scenario: Display Popular Hotels in English
Given I am on the English Playa del Carmen page
When I view the "Most popular hotels" section
Then I should see the title "Most popular hotels in Playa del Carmen"
And I should see a list of 8 specific hotel transportation options starting with "Transportation from Cancun Airport to..."
And I should see a link "View More Hotels" pointing to destinations

#### Scenario: Display Popular Hotels in Spanish
Given I am on the Spanish Playa del Carmen page
When I view the "Hoteles más populares" section
Then I should see the title "Hoteles más populares en Playa del Carmen"
And I should see a list of 8 specific hotel transportation options starting with "Transportación del Aeropuerto de Cancún..."
And I should see a link "Ver más hoteles" pointing to destinations

