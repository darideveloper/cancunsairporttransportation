# Proposal: Improve Empty Results State

## Why
When no vehicles are available, users are currently met with a generic "No vehicles found" message. This is a dead-end and provides poor user experience. Providing actionable contact alternatives (Phone, WhatsApp, Chat) helps retain users and allows them to resolve their needs through direct consultation.

## What Changes
1.  **New Component**: Create `NoAvailability.tsx` matches the requested design.
2.  **Button Variant**: Add `blackGhost` variant to `ButtonCta` for outlined black buttons.
3.  **Integration**: Replace the empty list render in `VehicleBuyCards.tsx` with the new helpful state.
4.  **Translations**: Add required keys to English and Spanish message files.

## Risks
- **Low**: Purely cosmetic/UI change.
- **Translation**: Ensuring all static text matches the brand voice in both languages.
