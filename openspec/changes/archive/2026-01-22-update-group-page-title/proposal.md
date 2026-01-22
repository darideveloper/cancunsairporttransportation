# Change: Update group page title in BookingForm

## Why

The group-transfers-cancun page is missing translations for the title displayed in the BookingForm component. This causes the form to show incorrect or missing text when rendering the group page booking form.

## What Changes

- Add title translations for the group page in both English and Spanish
- English: "Cancun Group Transfers"
- Spanish: "Traslados para grupos en Cancún"

## Impact

- Affected specs: booking-translations
- Affected code: src/messages/en.json, src/messages/es.json
