# Design: Improve Booking Registration Validation

## Architectural Changes

### 1. Store Validation Layer
The Zod schema `bookingRegistrationSchema` in `src/store/search-form.ts` will now explicitly include the optional arrival fields. 

Adding the following fields:
- `airline`: `z.string().optional()`
- `flightNumber`: `z.string().optional()`

### 2. UI Updates (`ArrivalInformation.tsx`)
- Ensure the `required` prop is `false` (default) for both fields.
- Add an `onBlur` handler to trigger `validateField` for consistency with other fields in the store.
- If we want to suggest a format, we can add a basic regex validation to `flightNumber` even if it remains optional.

### 3. Submission Flow (`BookingSubmission.tsx`)
In `handleSubmit`, the payload construction needs to include the `airline` field if it's not empty. 

Modify the payload to include:
- `airline`: `airline || undefined`
- `flight_number`: `flightNumber || undefined`

Note: The `CreateReservationPayload` type in `src/lib/transportation/legacy-api.types.ts` should be updated to include `airline` as an optional string.

### 4. Internationalization
Since these fields are optional, specific "required" error keys are no longer needed. However, if we add format validation (e.g., regex for flight numbers), we would add corresponding error keys. For now, the focus is on data capture.

## Potential Risks
- **No significant risks**: Marking these as optional in the schema and ensuring they are sent to the API is a safe enhancement.
