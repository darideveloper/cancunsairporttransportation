# Content Requirements

## ADDED Requirements

### Requirement: Update Group Transportation FAQs
The FAQs for the Group Transportation page MUST be updated to reflect the new vehicle types, 24/7 availability, inclusions, and booking advice.

#### Scenario: Display English FAQs
Given the user is on the Group Transfers page in English
When they scroll to the FAQ section
Then the title should be "Cancun Group Transportation - FAQs"
And the first question should be "What types of vehicles are available for group transportation?"
And the answer to the first question should contain "up to 15 passengers"
And the second question should be "Is the service available 24/7?"
And the third question should be "What is included in the price of group transportation?"
And the fourth question should be "How far in advance should I book my group transportation?"

#### Scenario: Display Spanish FAQs
Given the user is on the Group Transfers page in Spanish
When they scroll to the FAQ section
Then the title should be "Transportación para grupos en Cancún - Preguntas Frecuentes"
And the first question should be "¿Qué tipos de vehículos están disponibles para el transporte de grupos?"
And the answer to the first question should contain "hasta 15 pasajeros"
And the second question should be "¿El servicio está disponible 24/7?"
And the third question should be "¿Qué está incluido en el precio del transporte de grupo?"
And the fourth question should be "¿Con cuánta antelación debo reservar el transporte para grupos?"
