# Enhance Booking Form Validation and Defaults

## Goal
Improve the `BookingForm` component by enforcing validation on the "Leaving from" field and allowing default values for locations and date/time to be set via props and automatic initialization.

## User Review Required
None.

## Proposed Changes

### Components

#### [MODIFY] [LocationSelect.tsx](file:///develop/astro/cancunsairporttransportation/src/components/atoms/form/LocationSelect.tsx)
- Add `required` prop to interface and `select` element.

#### [MODIFY] [BookingFields.tsx](file:///develop/astro/cancunsairporttransportation/src/components/organisms/BookingFields.tsx)
- Pass `required` to "Leaving from" `LocationSelect`.
- Accept `defaultFrom`, `defaultTo` props.
- Initialize `locationFrom`, `locationTo`, `departureDate`, `departureTime` on mount if not set, using props and current Date/Time.

#### [MODIFY] [BookingForm.astro](file:///develop/astro/cancunsairporttransportation/src/components/organisms/BookingForm.astro)
- Add `defaultFrom`, `defaultTo` to `Props`.
- Pass these props to `BookingFields`.

## Verification Plan

### Automated Tests
- None (Visual/Behavioral changes).

### Manual Verification
1.  **Validation**:
    - Open the booking form.
    - Ensure "Leaving from" is empty.
    - Click "Book Now".
    - Verify that the browser prevents submission and shows a validation message on the "Leaving from" field.
2.  **Default Location Values**:
    - Modify a page to pass `defaultFrom="hotel-zone"` to `BookingForm`.
    - Reload.
    - Verify "Leaving from" is selected as "Hotel Zone".
3.  **Default Date/Time**:
    - Reload the page.
    - Verify "Pickup Date" is set to the current date.
    - Verify "Pickup Time" is set to the current time.
