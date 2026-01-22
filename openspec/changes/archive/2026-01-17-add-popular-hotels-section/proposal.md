# Add Popular Hotels Section to Playa del Carmen Page

## Goal
Add a new section "Most Popular Hotels" to the bottom of the Playa del Carmen page (`src/pages/[lang]/transportation-from-cancun-airport-to-playa-del-carmen.astro`). This section will list popular hotel destinations as cards that redirect to the booking form, and include a "View More" call-to-action button.

## Requirements
- **New Section**: A "Most Popular Hotels" section at the bottom of the page.
- **Content**: Title, grid of cards, and a "View More" button.
- **Data**: All text and links must be managed via `src/messages/{lang}.json`.
- **Component**: Use existing `src/components/molecules/BasicIconCard.astro` for the cards.
- **Layout**: 3x3 grid on desktop (responsive).
- **Interactivity**: Cards should link/scroll to the booking form. The "View More" button links to `/destinations` (or language equivalent).
- **Icon**: Use a "hotel-location" icon (likely `FaMapMarkerAlt` or similar from `react-icons`) for the cards.

## Proposed Changes

### Configuration
#### [MODIFY] [en.json](file:///develop/astro/cancunsairporttransportation/src/messages/en.json)
- Add `popularHotels` section to `pages.playaDelCarmen` with the following content:
  - `title`: "Most popular hotels in Playa del Carmen"
  - `viewMore`: "View More Hotels"
  - `viewMoreTitle`: "View More Hotels"
  - `items`: 
    - "Transportation from Cancun Airport to ADO Playa Del Carmen"
    - "Transportation from Cancun Airport to Hotel Xcaret Mexico"
    - "Transportation from Cancun Airport to Grand Riviera Princess - All Inclusive"
    - "Transportation from Cancun Airport to The Royal Haciendas All Suites Resort & Spa"
    - "Transportation from Cancun Airport to Wyndham Garden Playa del Carmen"
    - "Transportation from Cancun Airport to Hotel The Reef Playacar"
    - "Transportation from Cancun Airport to hotel Thompson Playa del Carmen"
    - "Transportation from Cancun Airport to Hyatt Zilara Riviera Maya"

#### [MODIFY] [es.json](file:///develop/astro/cancunsairporttransportation/src/messages/es.json)
- Add `popularHotels` section to `pages.playaDelCarmen` with the following content:
  - `title`: "Hoteles más populares en Playa del Carmen"
  - `viewMore`: "Ver más hoteles"
  - `viewMoreTitle`: "Ver más hoteles"
  - `items`:
    - "Transportación del Aeropuerto de Cancún al ADO Playa Del Carmen"
    - "Transportación del Aeropuerto de Cancún al Hotel Xcaret México"
    - "Transportación del Aeropuerto de Cancún al Grand Riviera Princess - All Inclusive"
    - "Transportación del Aeropuerto de Cancún a The Royal Haciendas All Suites Resort & Spa"
    - "Transportación del Aeropuerto de Cancún al hotel Wyndham Garden Playa del Carmen"
    - "Transportación del Aeropuerto de Cancún al hotel The Reef Playacar"
    - "Transportación del Aeropuerto de Cancún al hotel Thompson Playa del Carmen"
    - "Transportación del Aeropuerto de Cancún al Hyatt Zilara Riviera Maya"

### Components
#### [USE] [BasicIconCard.astro](file:///develop/astro/cancunsairporttransportation/src/components/molecules/BasicIconCard.astro)
- Use the existing `BasicIconCard` molecule component.
- Props: `title` (string), `text` (string), `Icon` (Component, optional), `href` (string, optional).
- Renders an `<h3>` with `title` and the `icon`.

#### [NEW] [PopularHotels.astro](file:///develop/astro/cancunsairporttransportation/src/components/organisms/PopularHotels.astro)
- New organism component to render the section.
- Fetches data from i18n.
- Renders `SectionHeading` and a grid of `BasicIconCard`.
- Handles the "link to form" logic.

### Pages
#### [MODIFY] [transportation-from-cancun-airport-to-playa-del-carmen.astro](file:///develop/astro/cancunsairporttransportation/src/pages/[lang]/transportation-from-cancun-airport-to-playa-del-carmen.astro)
- Import and add `<PopularHotels />` before `<Locations />`.

## Verification Plan
### Automated Tests
- `openspec validate add-popular-hotels-section --strict`

### Manual Verification
- **Visual**: Check the section appears at the bottom of the Playa del Carmen page in both English and Spanish.
- **Layout**: Verify 3-column grid on desktop.
- **Content**: Verify titles and card texts match the provided requirements.
- **Interactivity**: Click a card -> should go to Booking Form. Click "View More" -> should go to Destinations page.
