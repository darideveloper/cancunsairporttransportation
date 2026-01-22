# Capability: Private Transfer Includes Translations

Update the global "Includes" section to reflect the specific benefits of private transfers.

## ADDED Requirements

### Requirement: Update English Includes Content
The translation SHALL update the English includes section content.

#### Scenario: Apply new English text
- Given the `en.json` file
- When updating `global.sections.includes`
- Then the `title` SHALL be "All our Cancun Private Transfers include:"
- And the `imageAlt` and `imageTitle` SHALL be "Private service in Suburban"
- And the `items` SHALL be:
    - "Highly Trained Staff"
    - "Flight Monitoring"
    - "Travel Insurance"
    - "Reception at the airport"
    - "Free Schedule Changes (See our terms and conditions)"
    - "Vehicles in content maintenance"
    - "24-Hour Service"

### Requirement: Update Spanish Includes Content
The translation SHALL update the Spanish includes section content.

#### Scenario: Apply new Spanish text
- Given the `es.json` file
- When updating `global.sections.includes`
- Then the `title` SHALL be "Todos nuestros Traslados Privados en Cancún incluyen:"
- And the `imageAlt` and `imageTitle` SHALL be "Servicio privado en Suburban"
- And the `items` SHALL be:
    - "Personal Altamente Capacitado"
    - "Monitoreo de Vuelo"
    - "Seguro de Viaje"
    - "Recepción en el aeropuerto"
    - "Cambios de horario gratuitos (Consulte nuestros términos y condiciones)"
    - "Vehículos en mantenimiento de contenido"
    - "Servicio 24 horas"
