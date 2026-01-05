# Spec: Transportation Translations

Define the requirements for the localized transportation service information.

## MODIFIED Requirements

### Requirement: Localized Service Details
The system MUST provide localized titles, descriptions, prices, and image metadata for each transportation service type.

#### Scenario: English Content Rendering
Given the language is English
When the pricing section is rendered
Then the service titles MUST be "Luxury Transportation", "Private Transportation", and "Group Transportation"
And the prices MUST be "$84.00 USD", "$29.99 USD", and "$84.00 USD" respectively
And the descriptions MUST match the provided marketing copy including bullet points.

#### Scenario: Spanish Content Rendering
Given the language is Spanish
When the pricing section is rendered
Then the service titles MUST be "Transporte de Lujo", "Transporte privado", and "Transporte de grupos"
And the prices MUST be "$1,512.00 MXN", "$539.82 MXN", and "$1,512.00 MXN" respectively
And the descriptions MUST match the provided Spanish marketing copy including bullet points.

### Requirement: Descriptors for Accessibility
Each service image MUST have a localized `alt` and `title` attribute for SEO and accessibility.

#### Scenario: Image Metadata
Given a service like "Luxury Transportation"
When viewed in English
Then the `alt` and `title` tags MUST be "Private service in Suburban"
When viewed in Spanish
Then the `alt` and `title` tags MUST be "Servicio privado en Suburban"
