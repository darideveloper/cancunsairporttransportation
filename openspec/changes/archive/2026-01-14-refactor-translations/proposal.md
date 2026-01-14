# Refactor Translations to Global/Pages Structure

## Goal
Restructure `src/messages/es.json` and `src/messages/en.json` to have a clean separation between global (shared) content and page-specific content.

## Current State
- Keys are mixed at the root level (`branding`, `shared`, `globalSections`, `baseSections`, `booking`, etc.).
- Some sections are duplicated or ambiguous (e.g., `reliableService` at root vs `pages.playaDelCarmen`).
- Inconsistent naming (`pricingTransportation` vs `transportationServices`).

## Proposed Structure
The new JSON structure will strictly follow:
```json
{
  "global": {
    "branding": { ... },
    "topbar": { ... },
    "footer": { ... },
    "menubar": { ... },
    "booking": { ... },
    "ratesTable": { ... },
    "sections": {
        "bannerCta": { ... },
        "bannerStats": { ... },
        "testimonials": { ... },
        "whyChooseUs": { ... },
        "faq": { ... },
        "safeTrip": { ... },
        "reliableService": { ... },
        "transportationServices": { ... } // Generic description
    },
    "ui": {
        "pricingCard": { ... }, // Labels like "From", "Book Now"
        "contact": { ... }
    }
  },
  "pages": {
    "home": { ... },
    "playaDelCarmen": { ... },
    "404": { ... }
    // layouts or other specific pages
  }
}
```

## Migration Map

### Detailed Moves
- Root `branding` -> `global.branding`
- `shared.pricingCard` -> `global.ui.pricingCard`
- `components.pricingCard` -> `global.ui.pricingCard` (Merge)
- `globalSections.topbar` -> `global.topbar`
- `globalSections.footer` -> `global.footer`
- `globalSections.menubar` -> `global.menubar`
- `booking` -> `global.booking`
- `baseSections.bannerCta` -> `global.sections.bannerCta`
- `baseSections.bannerStats` -> `global.sections.bannerStats`
- `baseSections.testimonials` -> `global.sections.testimonials` (Default content)
- `baseSections.whyChooseUs` -> `global.sections.whyChooseUs`
- `baseSections.faqSection` -> `global.sections.faq`
- `safeTripBooking` -> `global.sections.safeTrip`
- `cancunAirportTransportation` -> `global.sections.airportTransportIntro` (Rename for clarity)
- `pricingTransportation` -> `global.sections.pricingServices` (Generic services list)
- `ratesTable` -> `global.ratesTable`
- `reliableService` (root) -> `global.sections.reliableService` (Static text)
- `transportationServices` -> `global.sections.transportationServicesList`
- `locations` -> `global.locations`

### Page Specifics
- `pages.home`: Retain specific content.
- `pages.playaDelCarmen`: Retain specific content. Ensure `reliableService` inside it only contains overrides if necessary, or use global if identical.
- `pages.404`: Retain.

## User Request Ref
> "global and page sections ... global.ratesTable ... static text should be under the global main key, and the dynamic texts in each page keys"
