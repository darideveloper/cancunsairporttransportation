# Content

## ADDED Requirements

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

