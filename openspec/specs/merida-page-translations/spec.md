# merida-page-translations Specification

## Purpose
TBD - created by archiving change update-merida-form-title. Update Purpose after archive.
## Requirements
### Requirement: Merida Page Title
The Merida transportation page MUST show the correct localized title in the Booking Form.

#### Scenario: Merida English Title
Given the user is on the Merida transportation page in English
When they view the Booking Form
Then the title MUST be "Transportation from Cancun to Merida".

#### Scenario: Merida Spanish Title
Given the user is on the Merida transportation page in Spanish
When they view the Booking Form
Then the title MUST be "Transporte de Cancún a Mérida".

### Requirement: Merida Banner CTA Content
The Merida transportation page Banner CTA section MUST contain specific content describing Merida, not generic or incorrect content (e.g. from Tulum).

#### Scenario: Merida Banner English Content
Given the user is on the Merida transportation page in English
When they view the Banner CTA section
Then the title MUST be "Transportation from Cancun to Merida by Cancun Airport Transportation"
And the text MUST describe Merida as the "White City" and mention the 3-hour drive.

#### Scenario: Merida Banner Spanish Content
Given the user is on the Merida transportation page in Spanish
When they view the Banner CTA section
Then the title MUST be "Transporte de Cancún a Mérida con Cancun Airport Transportation"
And the text MUST describe Merida as the "Ciudad Blanca" and mention "3 horas".

### Requirement: Popular Hotels Section Content
The `cancunToMerida` page SHALL display Merida-specific hotel content in the Popular Hotels section.

#### Scenario: Merida Hotels in English
- **Given** the user is viewing the Merida page in English (`/en/transportation-from-cancun-to-merida`)
- **Then** the Popular Hotels section title should be "Transportation from Cancun Airport to the most popular hotels in Mérida"
- **And** it should list the 8 Merida hotels specified in `en.json`.

#### Scenario: Merida Hotels in Spanish
- **Given** the user is viewing the Merida page in Spanish (`/es/transportacion-de-cancun-a-merida`)
- **Then** the Popular Hotels section title should be "Transporte desde el aeropuerto de Cancún a los hoteles más populares de Mérida"
- **And** it should list the 8 Merida hotels specified in `es.json`.

### Requirement: Merida Page FAQ Content
The Merida transportation page MUST show the correct localized FAQ content.

#### Scenario: Merida Spanish FAQs
Given the user is on the Merida transportation page in Spanish
When they view the FAQ section
Then the title MUST be "Transporte de Cancún a Mérida - Preguntas frecuentes"
And the description MUST be "Te ayudamos a despejar todas tus dudas sobre nuestro servicio de traslado"
And it MUST display the 4 specific Merida items.

#### Scenario: Merida English FAQs
Given the user is on the Merida transportation page in English
When they view the FAQ section
Then the title MUST be "Cancun to Merida Transportation - FAQs"
And the description MUST be "Rates for Transfer Services in Mérida and the Riviera Maya"
And it MUST display the 4 specific Merida items.

