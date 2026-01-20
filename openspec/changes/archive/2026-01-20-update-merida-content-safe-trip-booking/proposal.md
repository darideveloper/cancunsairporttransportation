# Update Merida Content (Safe Trip & Booking)

## Goal
Update the "Safe Trip & Booking" section content of the "Transportation from Cancun to Merida" page (`transportation-from-cancun-to-merida.astro`) with new text and images provided by the user.

## Changes
- Update `src/messages/en.json` and `src/messages/es.json` to include the specific text for the Merida page under the `pages.cancunToMerida` key.
- Update the `page` variable in `transportation-from-cancun-to-merida.astro` to `"cancunToMerida"`.
- Ensure the `TextCardHalf` component on the page displays the correct translated content.

## Detailed Content

### English Content (en.json)
Key: `pages.cancunToMerida.safeTrip`
- **Title**: "Shuttle from Cancun to Mérida, safe and reliable"
- **Text**: 
  "With over 10 years of experience offering transportation services from Cancun to Mérida in the safest, most efficient, and dependable manner, Cancun Airport Transportation by Go is the most honest and trustworthy company you can rely on.\n\nOur primary goal is to provide the highest quality transportation services, ensuring a comfortable and secure journey from the airport to any destination in the Yucatán region.\n\nFrom our wide variety of services, you can select the option that best fits your needs, whether a one-way trip or a round trip. Just reach out to our call center, where our friendly team will be delighted to assist you with any additional details or questions you may have."

### Spanish Content (es.json)
Key: `pages.cancunToMerida.safeTrip`
- **Title**: "Traslado de Cancún a Mérida, seguro y confiable"
- **Text**: 
  "Con más de 10 años de experiencia ofreciendo servicios de transporte de Cancún a Mérida de la manera más segura, eficiente y confiable, Cancun Airport Transportation es la empresa más honesta y confiable en la que puedes depender.\n\nNuestro objetivo principal es brindar servicios de transporte de la más alta calidad, garantizando un viaje cómodo y seguro desde el aeropuerto hasta cualquier destino en la región de Yucatán.\n\nDe nuestra amplia variedad de servicios, puedes seleccionar la opción que mejor se adapte a tus necesidades, ya sea un viaje de ida o ida y vuelta. Solo comunícate con nuestro centro de llamadas, donde nuestro amable equipo estará encantado de ayudarte con cualquier detalle adicional o pregunta que puedas tener."


## Verification
- Validate the translation keys are present and correct.
- Visual inspection of the page (if possible) or unit tests ensuring the keys map to the expected strings.
