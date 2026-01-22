# merida-content-safe-trip-booking Specification

## Purpose
TBD - created by archiving change update-merida-content-safe-trip-booking. Update Purpose after archive.
## Requirements
### Requirement: Merida Page Content
The "Transportation from Cancun to Merida" page MUST display the correct translated content in the "Safe Trip" section.

#### Scenario: Safe Trip Section Content Updated
Given the user is on the Merida page
When the page loads
Then the "Safe Trip" section should show the title "Traslado de Cancún a Mérida, seguro y confiable" (ES) or "Shuttle from Cancun to Mérida, safe and reliable" (EN)
And the text should match the following:
**ES**: "Con más de 10 años de experiencia ofreciendo servicios de transporte de Cancún a Mérida de la manera más segura, eficiente y confiable, Cancun Airport Transportation es la empresa más honesta y confiable en la que puedes depender.\n\nNuestro objetivo principal es brindar servicios de transporte de la más alta calidad, garantizando un viaje cómodo y seguro desde el aeropuerto hasta cualquier destino en la región de Yucatán.\n\nDe nuestra amplia variedad de servicios, puedes seleccionar la opción que mejor se adapte a tus necesidades, ya sea un viaje de ida o ida y vuelta. Solo comunícate con nuestro centro de llamadas, donde nuestro amable equipo estará encantado de ayudarte con cualquier detalle adicional o pregunta que puedas tener."
**EN**: "With over 10 years of experience offering transportation services from Cancun to Mérida in the safest, most efficient, and dependable manner, Cancun Airport Transportation by Go is the most honest and trustworthy company you can rely on.\n\nOur primary goal is to provide the highest quality transportation services, ensuring a comfortable and secure journey from the airport to any destination in the Yucatán region.\n\nFrom our wide variety of services, you can select the option that best fits your needs, whether a one-way trip or a round trip. Just reach out to our call center, where our friendly team will be delighted to assist you with any additional details or questions you may have."
And the image `trip-advisor.webp` should be displayed and imported from `@/assets/images/destinations/cancun-to-merida/`.

