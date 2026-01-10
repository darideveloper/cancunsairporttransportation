# Create Transportation Services Section

## Goal
Implement a new "Cancun Airport Transportation Services" section on the landing page using a self-contained component (organism) that manages its own data and logic, similar to `<BannerStats />`.

## Requirements
- **Architecture:** 
    - Create `TransportationServices.astro` as an organism.
    - Component must NOT take props; it should retrieve the current language and translations internally.
- **Transportation Services Section:**
    - Use `SectionHeading` for the title and intro text.
    - Display 4 service cards with Title, Description, and Icon.
- **Constraint:** HTML structure only. No CSS styles (use empty `class=""`).
- **SEO:** Use semantic HTML tags (`<section>`, `<article>`, `<h3>`) and ARIA labels.

## Content Extraction

### Transportation Services Section
#### English (en.json)
- **Title**: "Cancun Airport Transportation Services"
- **Description**: "At Cancun Airport Transportation by Go Transfers, we offer modern and comfortable vehicles to ensure smooth and reliable transfers from Cancun Airport. You can easily book any of our services through our website.\n\nIn addition to airport transfers, we provide comprehensive transportation solutions to take you anywhere in Cancun and the Riviera Maya. Our wide range of services is designed to meet all your travel needs."
- **Items**:
    - **Airport to Hotel**: "Visiting the Caribbean and need transportation to your hotel or back to the airport? This service is perfect for you." (Icon: `FaPlane`)
    - **Hotel to Hotel**: "Need to switch hotels during your stay in Cancun? We've got you covered with our seamless hotel-to-hotel transportation." (Icon: `FaBed`)
    - **Hotel to Restaurant**: "When you're on vacation, the last thing you want to worry about is driving, especially if you plan to enjoy a few drinks. Let us take you to your restaurant and back to your hotel safely." (Icon: `FaUtensils`)
    - **Hotel to Park**: "Planning to visit Xcaret, Xel-Ha, Xoximilco, or the Mayan Museum in Cancun? Cancun Transfer Services can take you to any of these amazing parks." (Icon: `FaTree`)

#### Spanish (es.json)
- **Title**: "Servicios de Transportación en el Aeropuerto de Cancún"
- **Description**: "En Cancun Airport Transportation por Go Transfers, ofrecemos vehículos modernos y cómodos para asegurar traslados suaves y confiables desde el Aeropuerto de Cancún. Puede reservar fácilmente cualquiera de nuestros servicios a través de nuestro sitio web.\n\nAdemás de los traslados al aeropuerto, proporcionamos soluciones integrales de transporte para llevarlo a cualquier lugar de Cancún y la Riviera Maya. Nuestra amplia gama de servicios está diseñada para satisfacer todas sus necesidades de viaje."
- **Items**:
    - **Aeropuerto a Hotel**: "¿Visita el Caribe y necesita transporte a su hotel o de regreso al aeropuerto? Este servicio es perfecto para usted."
    - **Hotel a Hotel**: "¿Necesita cambiar de hotel durante su estancia en Cancún? Le tenemos cubierto con nuestro transporte sin interrupciones de hotel a hotel."
    - **Hotel a Restaurante**: "Cuando está de vacaciones, lo último por lo que quiere preocuparse es por conducir, especialmente si planea disfrutar de unas copas. Permítanos llevarle a su restaurante y de vuelta a su hotel con seguridad."
    - **Hotel a Parque**: "¿Planea visitar Xcaret, Xel-Ha, Xoximilco o el Museo Maya de Cancún? Cancun Transfer Services puede llevarle a cualquiera de estos increíbles parques."


## Implementation

### 1. Register translations
Add the content to `src/messages/en.json` and `src/messages/es.json`.

### 2. Create Components
- `src/components/molecules/ServiceCard.tsx`: Individual service item.
- `src/components/organisms/TransportationServices.astro`: Main section component.

### 3. Render Component
Add `<TransportationServices />` at the bottom of the landing page:
- **File:** `src/pages/[lang]/index.astro`
- **Location:** After the FAQ section (`#faq-section`), before the closing `</Layout>` tag.
