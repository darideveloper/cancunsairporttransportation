## ADDED Requirements

### Requirement: Group Transfer Includes Translations
The `group` page MUST have specific translation keys for the "Includes" section to support localized content for title and images.

#### Scenario: Displaying Group Transfer Includes Section (Spanish)
Given the user visits the Group Transfers page in Spanish
When the "Includes" section is rendered
Then the title should be "Todos nuestros Traslados de Grupo en el Aeropuerto de Cancún incluyen:"
And the image alt text should be "Servicio privado en Suburban"
And the image title should be "Servicio privado en Suburban"

#### Scenario: Displaying Group Transfer Includes Section (English)
Given the user visits the Group Transfers page in English
When the "Includes" section is rendered
Then the title should be "All our Cancun Airport Group Transportation include:"
And the image alt text should be "Private service in Suburban"
And the image title should be "Private service in Suburban"
