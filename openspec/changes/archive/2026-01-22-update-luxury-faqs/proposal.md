# Proposal: Update Luxury Transportation FAQS

## Problem
The current FAQ section on the Luxury Transportation page contains generic or incorrect information that doesn't match the specific luxury service details provided by the user.

## Proposed Solution
Update the translation files (`en.json` and `es.json`) with the new FAQ content provided by the user. This includes the section title and four specific FAQ items (booking, vehicle types, availability, and advance booking) in both English and Spanish.

## Scope
- Modify `src/messages/en.json`: Update `pages.luxury.faq`.
- Modify `src/messages/es.json`: Update `pages.luxury.faq`.
- No changes to component logic or Astro files are required as they already use these translation keys.

## User-Visible Changes
- The FAQ section on the `/luxury-transportation-cancun` and `/es/transportacion-de-lujo-cancun` (or equivalent Spanish path) will display the updated questions and answers.

## Detailed Content
### English (`en.json`)
- **Title:** Luxury Transportation from Cancun Airport - FAQS
- **Items:**
    - `booking`: How do I book a luxury transportation service from Cancun Airport? / You can book a luxury transportation service online through our website or by contacting our customer service representatives directly via phone or email. Booking is recommended to ensure availability.
    - `vehicleTypes`: What types of vehicles are available for luxury transportation? / Luxury transportation services offer a range of high-end vehicles, including luxury sedans, SUVs and vans. You can choose the type of vehicle based on your preferences and the number of passengers.
    - `availability`: Is the service available 24/7? / Most of our luxury transportation services from Cancun Airport operate 24/7, accommodating flights arriving at any time of day or night. It is advisable to confirm this when booking your service.
    - `advanceBooking`: How far in advance should I book my luxury transportation? / It is advisable to book your luxury transportation as soon as you have your travel details confirmed. This ensures availability and allows the service provider to make any necessary arrangements to meet your specific needs.

### Spanish (`es.json`)
- **Title:** Transporte de Lujo desde el Aeropuerto de Cancún - FAQS
- **Items:**
    - `booking`: ¿Cómo reservar un servicio de transportación de lujo desde el Aeropuerto de Cancún? / Usted puede reservar un servicio de transportación de lujo en línea a través de nuestro sitio web o contactando a nuestros representantes de servicio al cliente directamente por teléfono o correo electrónico. Se recomienda reservar para asegurar la disponibilidad.
    - `vehicleTypes`: ¿Qué tipos de vehículos están disponibles para el transporte de lujo? / Los servicios de transporte de lujo ofrecen una gama de vehículos de alta gama, incluyendo vans de lujo y camionetas. Puede elegir el tipo de vehículo en función de sus preferencias y del número de pasajeros.
    - `availability`: ¿El servicio está disponible 24/7? / La mayoría de nuestros servicios de transporte de lujo desde el Aeropuerto de Cancún operan 24/7, acomodando vuelos que llegan a cualquier hora del día o de la noche. Es aconsejable confirmar esto al reservar su servicio con nuestro equipo de servicio al cliente.
    - `advanceBooking`: ¿Con cuánta antelación debo reservar mi transporte de lujo? / Es aconsejable reservar su transporte de lujo tan pronto como tenga confirmados los detalles de su viaje. Esto asegura la disponibilidad y permite al proveedor de servicios hacer los arreglos necesarios para satisfacer sus necesidades específicas.
