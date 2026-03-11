# Design: Enhance Booking Form Validation

## Architecture Overview
The solution will leverage the existing `zod` library for schema-based validation, mirroring the pattern used in the `ContactForm`.

### Store Changes (`src/store/search-form.ts`)
- Add an `errors` property to the `SearchFormState` to store validation error messages per field.
- Introduce a `validateField` function in the store or as a separate utility to update errors when a field changes.
- Ensure that the store's setters also trigger validation or clear existing errors.

### Validation Schema
A new validation schema will be defined (either in the store or a utility file) that covers:
- `firstName`: Min 2 characters.
- `lastName`: Min 2 characters.
- `email`: Valid email format.
- `phone`: Valid phone number format (min 8 characters).
- `departureDate`/`departureTime`: Required strings.
- `returnDate`/`returnTime`: Required only if `tripType` is `roundTrip`.

### Component Enhancements
- **`Input.tsx`**: Already supports an `error` prop.
- **`PassengerInformation.tsx`**: Pass error messages from the store to each `Input` component. Trigger field-level validation on blur or change.
- **`BookingSubmission.tsx`**:
    - Perform a final full-schema validation before calling `createReservation`.
    - Display a `Swal.fire` error if any validation fails during submission.
    - Keep the "Submit" button disabled if the schema is invalid.

## Alternatives Considered
- **Direct HTML5 Validation**: Insufficient for cross-browser consistency and complex requirements (like round-trip logic).
- **In-component state**: Harder to sync across the multi-component `RegisterForm`. Global store state is more robust here.

## Trade-offs
- **Performance**: Zod validation is lightweight enough for this form size.
- **Complexity**: Adds some boilerplate to the store, but improves reliability significantly.
