# Proposal: Add Destinations Service Cards

## Overview
Add 3 new `BasicImageCard` components to the Destinations page to highlight key service features. These cards will display service benefits with icons (pyramid, excursion, car-seat) and bilingual text content.

## Problem Statement
The Destinations page currently has two `BasicImageCard` components (Reserve and Contact), but lacks visual communication of the core service benefits that differentiate the transportation service. The user has provided HTML with 3 service highlight cards that need to be integrated using the existing `BasicImageCard` component.

## Proposed Solution
Add 3 new `BasicImageCard` instances to the Destinations page between the existing highlights sections, using:
- **Images**: `pyramid.png`, `excursion.png`, `car-seat.png` (already available in `src/assets/images/destinations/`)
- **Content**: Bilingual translations for service benefits
- **Component**: Reuse existing `BasicImageCard.astro` component

The cards will communicate:
1. **Confidence & Security** (pyramid icon) - Travel with confidence and security
2. **Transportation Service** (excursion icon) - Transportation to hotel or destination  
3. **Comfort** (car-seat icon) - Comfort from beginning to end of trip

## Translation Keys
New translation keys will be added under `pages.destinations.serviceCards` in both `en.json` and `es.json`:

### English (`en.json`)
```json
"serviceCards": {
  "confidence": {
    "title": "Travel with Confidence",
    "text": "Travel with confidence, security and the comfort that only we can offer you.",
    "imageAlt": "Pyramid icon representing confidence and security",
    "imageTitle": "Confidence and Security"
  },
  "transportation": {
    "title": "Transportation Service",
    "text": "Transportation to your hotel or destination",
    "imageAlt": "Excursion icon representing transportation service",
    "imageTitle": "Transportation Service"
  },
  "comfort": {
    "title": "Complete Comfort",
    "text": "Comfort from the beginning to the end of your trip",
    "imageAlt": "Car seat icon representing comfort",
    "imageTitle": "Comfort Throughout Your Journey"
  }
}
```

### Spanish (`es.json`)
```json
"serviceCards": {
  "confidence": {
    "title": "Viaja con Confianza",
    "text": "Viaja con confianza, seguridad y la comodidad que solo nosotros te ofrecemos",
    "imageAlt": "Icono de pirámide representando confianza y seguridad",
    "imageTitle": "Confianza y Seguridad"
  },
  "transportation": {
    "title": "Servicio de Transportación",
    "text": "Transportación hasta su hotel o destino",
    "imageAlt": "Icono de excursión representando servicio de transportación",
    "imageTitle": "Servicio de Transportación"
  },
  "comfort": {
    "title": "Comodidad Completa",
    "text": "Comodidad desde el principio hasta el final de tu viaje",
    "imageAlt": "Icono de asiento de auto representando comodidad",
    "imageTitle": "Comodidad Durante Todo Tu Viaje"
  }
}
```

## Implementation Location
- **Component**: `src/components/pages/landing/Destinations.astro` (lines 138-152, after existing highlights)
- **Translations**: `src/messages/en.json` and `src/messages/es.json` under `pages.destinations.serviceCards`
- **Images**: Already exist in `src/assets/images/destinations/` (pyramid.png, excursion.png, car-seat.png)

## Dependencies
- Existing `BasicImageCard` component (no changes needed)
- Existing image assets (already in place)
- Translation system (existing pattern)

## Success Criteria
- [x] 3 new `BasicImageCard` components render on Destinations page
- [x] All text content is properly translated in both English and Spanish
- [x] Images display correctly with proper alt text and titles
- [x] SEO best practices maintained (semantic HTML, proper heading hierarchy)
- [x] Component follows existing DRY patterns
- [x] Validation passes with `openspec validate add-destinations-service-cards --strict`
