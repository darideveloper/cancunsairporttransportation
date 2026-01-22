# Merida Popular Hotels Content Specification

## ADDED Requirements

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
