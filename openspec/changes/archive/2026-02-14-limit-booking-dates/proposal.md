# Limit Booking Dates Proposal

## Summary
Updates the `BookingForm`, `DateInput`, and `TimeInput` components to restrict users from selecting past dates or times for their bookings. This ensures data integrity and prevents accidental booking errors.

## Motivation
Currently, users can select any date in the past, leading to potentially invalid bookings. We need to enforce constraints so that departure and return dates/times are always valid and future-oriented.

## Proposed Changes

### 1. Update `DateInput` Component
Modify `src/components/atoms/form/DateInput.tsx` to accept a `min` prop.

```tsx
interface Props {
  // ... existing props
  min?: string;
}

export default function DateInput({
  // ... existing props
  min,
}: Props) {
  // ... (existing handleChange)
  return (
    <div className='input-container'>
      <label htmlFor={id}>{label}</label>
      <input
        type='date'
        // ...
        min={min}
      />
    </div>
  )
}
```

### 2. Update `TimeInput` Component
Modify `src/components/atoms/form/TimeInput.tsx` to accept a `min` prop.

```tsx
interface Props {
  // ... existing props
  min?: string;
}

export default function TimeInput({
  // ... existing props
  min,
}: Props) {
  // ... (existing handleChange)
  return (
    <div className='input-container'>
      <label htmlFor={id}>{label}</label>
      <input
        type='time'
        // ...
        min={min}
      />
    </div>
  )
}
```

### 3. Update `BookingForm` Logic (Changes)
In `src/components/organisms/BookingForm.tsx`, calculate the minimum allowable dates and times based on the current date/time and the user's selection, then pass these via the `min` props.

**Implementation Logic:**
```tsx
// Inside BookingForm component

// Get 'today' in YYYY-MM-DD format (local timezone sensitive)
const today = new Date().toLocaleDateString('en-CA'); // en-CA uses YYYY-MM-DD

// Get 'now' in HH:MM format (local timezone sensitive)
const now = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

// Determine Departure Constraints:
const minDepartureDate = today;

// If departure date is selected as today, restrict time to current or future.
// If departure date is strictly in the future, allow any time.
const minDepartureTime = (departureDate === today) ? now : undefined;

// Determine Return Constraints:
// Return date cannot be before Departure date (or Today if nothing selected yet).
const minReturnDate = departureDate || today;

// If return date is same as departure date, restrict time (must be >= departure time).
// If return date is strictly after departure date, allow any time.
const minReturnTime = (returnDate === departureDate) ? departureTime : undefined;

// JSX Application:
/*
<DateInput
  id="departure-date"
  label={translations.labels.pickupDate}
  value={departureDate}
  onChange={setDepartureDate}
  min={minDepartureDate}
/>
<TimeInput
  id="departure-time"
  label={translations.labels.pickupTime}
  value={departureTime}
  onChange={setDepartureTime}
  min={minDepartureTime}
/>
// Similar changes for Return Date/Time
*/
```

## Alternatives Considered
- **Moment.js / date-fns**: Adding a heavy library for this check is unnecessary. Native `Date` and string manipulation suffice.
- **Store Validation**: Validating this in the store logic (`src/store/search-form.ts`) would complicate state management and is less UX-friendly than preventing invalid input at the UI level.

## Validation
- Validate manually locally by checking input fields.
- Ensure `min` attributes are correctly applied in the DOM.
