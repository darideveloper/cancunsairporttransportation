# Tasks: Implement Empty Results State

1.  **[x] Add translations**
    - File: `src/messages/en.json`, `src/messages/es.json`
    - Added keys under `pages.results`: `sorry`, `noAvailabilityMessage`, `usaCanada`, `mexicoRest`, `whatsapp`, `chat`.

2.  **[x] Update ButtonCta**
    - File: `src/components/atoms/ButtonCta.tsx`
    - Added `blackGhost` variant.

3.  **[x] Create NoAvailability component**
    - File: `src/components/organisms/NoAvailability.tsx`
    - Implemented UI structure with contact CTA buttons and icons.

4.  **[x] Integrate into VehicleBuyCards**
    - File: `src/components/organisms/VehicleBuyCards.tsx`
    - Replaced the generic empty text with the `<NoAvailability />` component.
