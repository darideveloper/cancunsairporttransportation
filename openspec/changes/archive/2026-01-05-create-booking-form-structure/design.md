# Design: Booking Form Components

## Directory Structure
We will adhere to the Atomic Design principles used in the project:
- **Atoms**: Basic, indivisible components (like Inputs, Selects). Placed in `src/components/atoms/form/`.
- **Molecules**: Compound components or specific control groups. Placed in `src/components/molecules/booking/`.
- **Organisms**: The main composed form. Placed in `src/components/organisms/`.

## Components

### Controls (Top Section)
Located in `src/components/molecules/booking/`

1. **`TripTypeControls.tsx`**
   - Renders "One Way" and "Round Trip" buttons.
   - Using `<button type="button">`.

2. **`CurrencyControls.tsx`**
   - Renders "USD" and "MXN" buttons.
   - Using `<button type="button">`.

3. **`SubmitButton.tsx`**
   - Renders the submit action.
   - Using `<button type="submit">`.

### Form Fields
Located in `src/components/atoms/form/`
Each field component will wrap a standard HTML input/select with a `<label>`.

1. **`LocationSelect.tsx`**
   - Props: `label` (string), `id` (string).
   - Renders a `<select>` with placeholder options.

2. **`DateInput.tsx`**
   - Props: `label` (string), `id` (string).
   - Renders `<input type="date">`.

3. **`TimeInput.tsx`**
   - Props: `label` (string), `id` (string).
   - Renders `<input type="time">`.

4. **`PassengerInput.tsx`**
   - Props: `label` (string), `id` (string).
   - Renders `<input type="number">`.

### Container
Located in `src/components/organisms/`

**`BookingForm.tsx`**
   - Assembles the above molecules and atoms.
   - Uses `type="submit"` for the submit button to allow form submission.

## Internationalization
New `booking` section in `messages/{lang}.json`:
```json
"booking": {
  "tripType": {
    "oneWay": "One Way",
    "roundTrip": "Round Trip"
  },
  "currency": {
    "usd": "USD",
    "mxn": "MXN"
  },
  "labels": {
    "leavingFrom": "Leaving from",
    "goingTo": "Going to",
    "pickupDate": "Pickup date",
    "pickupTime": "Pickup time",
    "passengers": "Passengers"
  },
  "submit": "Submit"
}
```

## Accessibility
- Explicit `htmlFor` on labels matching input `id`s.
- `aria-label` where visual labeling might be insufficient.
