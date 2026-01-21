# translation-update Specification

## Purpose
TBD - created by archiving change update-pricing-section-translations. Update Purpose after archive.
## Requirements
### Requirement: Pricing Section Text Updates
The pricing section MUST display the updated localized text for titles, subtitles, and pricing cards.

#### Scenario: Spanish Pricing Content
Given the user visits the Private Airport Transfer page in Spanish
Then the Pricing Section title should be "Otros servicios similares al transporte privado en Cancún"
And the Pricing Section subtitle should be "Lista de nuestros servicios de transporte"
And the "Transportación de Lujo" card should show price "$1512.00 MXN" and the updated description.
And the "Servicio de Taxi" card should show price "$664.81 MXN" and the updated description.
And the "Transporte de grupos" card should show price "$1512.00 MXN" and the updated description.

#### Scenario: English Pricing Content
Given the user visits the Private Airport Transfer page in English
Then the Pricing Section title should be "Other services similar to private transportation in Cancun"
And the Pricing Section subtitle should be "List of our transportation services"
And the "Luxury Transportation" card should show price "$84.00 USD" and the updated description.
And the "Taxi Service" card should show price "$34.99 USD" and the updated description.
And the "Group Transportation" card should show price "$84.00 USD" and the updated description.

### Requirement: Global UI Text Updates
Global UI elements referenced by the pricing card MUST reflect the updated terminology.

#### Scenario: Global UI Text (Spanish)
Given the user sees the pricing features list in Spanish
Then the "taxes included" item should read "Incluye tasas de aeropuerto y seguro del viajero".

