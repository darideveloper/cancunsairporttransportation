# Proposal: Update Merida Testimonials

## Background
The "Transportation from Cancun to Merida" page currently uses placeholder testimonials and images copied from the Akumal page. The content needs to be updated with specific reviews for Merida, using new random client names and custom profile images.

## Goal
Update the translation files with the correct English and Spanish text for the Merida testimonials, generate new client profile images, and update the Astro page to use these new assets and names.

## Solution
1.  **Translations**: Update `pages.cancunToMerida.testimonials` in `src/messages/en.json` and `src/messages/es.json` with the provided text.
2.  **Images**: Generate 3 new client profile images and save them to `src/assets/images/destinations/cancun-to-merida/`.
3.  **Code**: Update `src/pages/[lang]/transportation-from-cancun-to-merida.astro` to import the new images and pass them to the `Testimonials` component.

## Detailed Content

### Translation Keys (`pages.cancunToMerida.testimonials`)

#### English (`src/messages/en.json`)
-   **title**: "Our client reviews - Cancun to Merida"
-   **description**: "Discover why our customers choose Cancun Airport Transportation by Go"
-   **Structure**:
    -   `item1`: Name: "Emily R.", Text: "I recently used Cancun Airport Transportation's shuttle service from Cancun to Merida, and it was fantastic! The driver was punctual, the vehicle was clean and comfortable, and the entire process was seamless.", Stars: "5"
    -   `item2`: Name: "Michael T.", Text: "Booking the Cancun to Merida shuttle with Cancun Airport Transportation was the best decision. The service was reliable, the driver was professional, and the ride was smooth. It made my trip stress-free and enjoyable.", Stars: "5"
    -   `item3`: Name: "Jessica K.", Text: "I had an amazing experience with Cancun Airport Transportation for my Cancun to Merida transfer. The booking was straightforward, the driver was friendly, and the shuttle was spacious and comfortable. Perfect for a long journey!", Stars: "5"

#### Spanish (`src/messages/es.json`)
-   **title**: "Nuestras reseñas de clientes - Cancún a Mérida"
-   **description**: "Descubre por qué nuestros clientes eligen a Cancun Airport Transportation"
-   **Structure**:
    -   `item1`: Name: "Emily R.", Text: "Recientemente utilicé el servicio de transporte de Cancun Airport Transportation de Cancún a Mérida, ¡y fue fantástico! El conductor fue puntual, el vehículo estaba limpio y cómodo, y todo el proceso fue muy fluido.", Stars: "5"
    -   `item2`: Name: "Michael T.", Text: "Reservar el transporte de Cancún a Mérida con Cancun Airport Transportation fue la mejor decisión. El servicio fue confiable, el conductor fue profesional y el viaje fue muy tranquilo. Hizo que mi viaje fuera relajado y agradable.", Stars: "5"
    -   `item3`: Name: "Jessica K.", Text: "Tuve una experiencia increíble con Cancun Airport Transportation para mi traslado de Cancún a Mérida. La reserva fue sencilla, el conductor fue amable y el transporte era espacioso y cómodo. ¡Perfecto para un viaje largo!", Stars: "5"

## Risks
-   Minor risk of breaking translation if keys don't match exactly (mitigated by verification).
-   Image paths must be correct for Vite/Astro to bundle them.
