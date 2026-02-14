# results-page-translations Specification Delta

## ADDED Requirements

### Requirement: Results Page Header Content
The Results page SHALL display the updated marketing copy for the header section in both English and Spanish.

#### Scenario: English Header
Given the `en.json` translation file
When the user views the results page in English
Then they should see:
- Title: "Discover the perfect trip with us!"
- Description: "Select the vehicle that suits your style and get ready for an unforgettable experience full of comfort, safety and fun - your adventure starts with choosing your ideal vehicle! 🚗✨"

#### Scenario: Spanish Header
Given the `es.json` translation file
When the user views the results page in Spanish
Then they should see:
- Title: "¡Descubre el viaje perfecto con nosotros!"
- Description: "Selecciona el vehículo que se adapte a tu estilo y prepárate para una experiencia inolvidable llena de comodidad, seguridad y diversión. ¡Tu aventura empieza con la elección de tu vehículo ideal! 🚗✨"
