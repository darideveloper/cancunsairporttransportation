# Proposal: Update Group Transportation FAQs

## Summary
Update the FAQ section title and items for the "Group Transfers Cancun" page in both English and Spanish to match the provided requirements.

## Problem
The current FAQs for the group transportation page are outdated or generic and do not match the specific content requested by the product team.

## Solution
Update the `en.json` and `es.json` translation files for the definitions under `pages.group.faq`.
- Update `title`.
- Replace `items` with the new set of questions and answers.
- Verify the description matches the global description (it does, no change needed there).

## Risks
- Minor risk of JSON syntax errors if not careful.
- SEO impact (positive) due to more relevant content.

## Detailed Changes

### `src/messages/en.json`
**Key**: `pages.group.faq`

**Title**: "Cancun Group Transportation - FAQs"

**Items**:
1.  **Key**: `vehicleTypes`
    *   **Question**: "What types of vehicles are available for group transportation?"
    *   **Answer**: "Group transportation services offer a range of vehicles, including large vans, similar to crafters. These vehicles can comfortably accommodate up to 15 passengers, along with their luggage."
2.  **Key**: `availability`
    *   **Question**: "Is the service available 24/7?"
    *   **Answer**: "Our group transportation services from Cancun Airport operate 24/7, accommodating flights arriving at any time of day or night. It is advisable to confirm this when booking your service."
3.  **Key**: `inclusions`
    *   **Question**: "What is included in the price of group transportation?"
    *   **Answer**: "The price typically includes the service, driver, fuel, and any tolls or parking fees."
4.  **Key**: `advanceBooking`
    *   **Question**: "How far in advance should I book my group transportation?"
    *   **Answer**: "It is advisable to book your group transportation as soon as you have your travel details confirmed. This ensures availability and allows the service provider to make any necessary arrangements to meet your specific needs."

### `src/messages/es.json`
**Key**: `pages.group.faq`

**Title**: "Transportación para grupos en Cancún - Preguntas Frecuentes"

**Items**:
1.  **Key**: `vehicleTypes`
    *   **Question**: "¿Qué tipos de vehículos están disponibles para el transporte de grupos?"
    *   **Answer**: "Los servicios de transportación para grupos ofrecen una gama de vehículos, incluyendo camionetas grandes, similares a las crafters. Estos vehículos pueden acomodar cómodamente hasta 15 pasajeros, junto con su equipaje."
2.  **Key**: `availability`
    *   **Question**: "¿El servicio está disponible 24/7?"
    *   **Answer**: "Nuestros servicios de transporte de grupos desde el Aeropuerto de Cancún operan 24/7, acomodando vuelos que llegan a cualquier hora del día o de la noche. Es recomendable confirmar esto al momento de reservar su servicio."
3.  **Key**: `inclusions`
    *   **Question**: "¿Qué está incluido en el precio del transporte de grupo?"
    *   **Answer**: "El precio normalmente incluye el servicio, el conductor, el combustible y cualquier peaje o tarifa de estacionamiento."
4.  **Key**: `advanceBooking`
    *   **Question**: "¿Con cuánta antelación debo reservar el transporte para grupos?"
    *   **Answer**: "Es aconsejable reservar el transporte para grupos en cuanto tenga confirmados los detalles del viaje. Esto garantiza la disponibilidad y permite al proveedor de servicios hacer los arreglos necesarios para satisfacer sus necesidades específicas."
