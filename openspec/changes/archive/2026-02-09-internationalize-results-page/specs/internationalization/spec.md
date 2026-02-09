# Spec: Internationalize Results Page

## ADDED Requirements

### Requirement: Results Page Localization
The Results page MUST display all UI text in the language specified by the URL route (`/` for English, `/es` for Spanish).

#### Scenario: View Results page in English
- **Given** I am on the `/results` page
- **Then** the page title should be "Results"
- **And** the description should be "Showing available transportation options for your trip."
- **And** the sidebar title should be "Your travel route" with "route" highlighted in blue
- **And** the modify button should be "Modify Route"

#### Scenario: View Results page in Spanish
- **Given** I am on the `/es/results` page
- **Then** the page title should be "Resultados"
- **And** the description should be "Mostrando opciones de transporte disponibles para su viaje."
- **And** the sidebar title should be "Tu ruta de viaje" with "ruta" highlighted in blue
- **And** the modify button should be "Modificar Ruta"

### Requirement: Route Map Accessibility
The travel route map MUST have a localized ARIA label.

#### Scenario: Route Map accessibility in English
- **Given** I am on the `/results` page
- **Then** the map container should have `aria-label="Travel route map"`

#### Scenario: Route Map accessibility in Spanish
- **Given** I am on the `/es/results` page
- **Then** the map container should have `aria-label="Mapa de ruta de viaje"`
