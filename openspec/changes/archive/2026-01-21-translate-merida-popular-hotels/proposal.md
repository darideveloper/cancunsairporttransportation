# Proposal: Update Merida Popular Hotels Translations

## Why
The "Popular Hotels" section on the Merida transportation page (`cancunToMerida`) currently displays placeholder or incorrect content (referencing Tulum) in both English and Spanish translation files.

## Proposed Solution
Update `src/messages/en.json` and `src/messages/es.json` with the correct Merida hotel information provided by the user.

## What Changes
- Corrects `popularHotels` title and items for `cancunToMerida` key in English.
- Corrects `popularHotels` title and items for `cancunToMerida` key in Spanish.

## Impact
- Corrects localized content for the Merida landing page.
- Improves user trust and SEO relevance for Merida-specific searches.
- Fixes the discrepancy where Merida pages were showing Tulum hotels.

## Detailed Texts

### English (`en.json`)
- **Title**: Transportation from Cancun Airport to the most popular hotels in Mérida
- **Button**: View More Hotels
- **Items**:
  - Transportation from Cancun Airport to Hotel el Cid Merida
  - Transportation from Cancun Airport to Hotel Colonial Merida
  - Transportation from Cancun Airport to Ibis Styles Merida
  - Transportation from Cancun Airport to Gran Hotel Merida
  - Transportation from Cancun Airport to Hyatt Regency Merida
  - Transportation from Cancun Airport to Marriott Merida
  - Transportation from Cancun Airport to Doralba Inn Merida
  - Transportation from Cancun Airport to Hotel el Español Merida

### Spanish (`es.json`)
- **Title**: Transporte desde el aeropuerto de Cancún a los hoteles más populares de Mérida
- **Button**: Ver más hoteles
- **Items**:
  - Transporte del Aeropuerto de Cancún al Hotel el Cid Mérida
  - Transporte del Aeropuerto de Cancún al Hotel Colonial Merida
  - Transporte del Aeropuerto de Cancún al Ibis Styles Mérida
  - Transporte del Aeropuerto de Cancún al Gran Hotel Merida
  - Transporte del Aeropuerto de Cancún al Hyatt Regency Merida
  - Transporte del Aeropuerto Cancún al Marriott Mérida
  - Transporte del Aeropuerto de Cancún al Doralba Inn Merida
  - Transporte del Aeropuerto de Cancún al Hotel el Español Mérida
