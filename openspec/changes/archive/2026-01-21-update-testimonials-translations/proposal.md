# Update Testimonials Translations

## Problem
The `private-airport-transfer-cancun.astro` page currently uses the default home page testimonials. We need to display specific testimonials for the private transportation service, with specific text provided by the product team.

## Solution
1. Create new translation keys under `pages.private.testimonials` in both `en.json` and `es.json`.
2. Populate these keys with the text provided in the request, using new random names for the clients as requested.
3. Create new image assets for these specific testimonials.
4. Update the `Testimonials` component usage in `private-airport-transfer-cancun.astro` to use the new `private` scope and new images.

## Impact
- `messages/en.json`
- `messages/es.json`
- `src/pages/[lang]/private-airport-transfer-cancun.astro`
- `src/assets/images/clients/` (new files)

## Detailed Content

### English (en.json)
- **Title**: Private Transportation in Cancun - What our clients say about us
- **Description**: The opinion of our customers is the most important thing for us.
- **Testimonial 1**: "I hired the private transportation service to go from Cancun to Tulum and was impressed with the punctuality and professionalism of the driver." (Robert D.)
- **Testimonial 2**: "Our private transfer from Cancun airport to our hotel in Playa del Carmen was perfect. The driver was amiable and gave us excellent recommendations on places to visit. Also, the price was very reasonable. Excellent service!" (Emily S.)
- **Testimonial 3**: "I used this Cancun Airport Private Transportation service for a day trip to Chichen Itza and everything was wonderful." (Michael B.)

### Spanish (es.json)
- **Title**: Transporte Privado en Cancun - Lo que nuestros clientes dicen de nosotros
- **Description**: La opinión de nuestros clientes es lo más importante para nosotros.
- **Testimonial 1**: "Contraté el servicio de transporte privado para ir de Cancún a Tulum y quedé impresionada con la puntualidad y profesionalismo del conductor." (Roberto D.)
- **Testimonial 2**: "Nuestro traslado privado desde el aeropuerto de Cancún a nuestro hotel en Playa del Carmen fue perfecto. El conductor era amable y nos dio excelentes recomendaciones sobre lugares para visitar. Además, el precio era muy razonable. ¡Excelente servicio!" (Emilia S.)
- **Testimonial 3**: "He utilizado este servicio de transporte privado del aeropuerto de Cancún para un viaje de un día a Chichen Itza y todo fue maravilloso." (Miguel B.)
