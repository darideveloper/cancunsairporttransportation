# form-validation Specification (Extended)

## Purpose
Ensure the booking form submit button is only enabled when all required fields are populated, preventing incomplete form submissions and improving user experience.

## MODIFIED Requirements

### Requirement: Comprehensive Form Validation
The submit button MUST be disabled unless all required fields are populated based on the trip type.

#### Scenario: One-Way Trip - All Required Fields
```gherkin
GIVEN the user has selected trip type "One Way"
WHEN all of the following conditions are met:
  - locationFromData is a valid LocationData object
  - locationToData is a valid LocationData object
  - departureDate is a non-empty string
  - departureTime is a non-empty string
THEN the submit button should be enabled
```

#### Scenario: One-Way Trip - Missing Departure Date
```gherkin
GIVEN the user has selected trip type "One Way"
AND locationFromData and locationToData are valid
AND departureTime is populated
BUT departureDate is empty
THEN the submit button should be disabled
```

#### Scenario: One-Way Trip - Missing Departure Time
```gherkin
GIVEN the user has selected trip type "One Way"
AND locationFromData and locationToData are valid
AND departureDate is populated
BUT departureTime is empty
THEN the submit button should be disabled
```

#### Scenario: Round Trip - All Required Fields
```gherkin
GIVEN the user has selected trip type "Round Trip"
WHEN all of the following conditions are met:
  - locationFromData is a valid LocationData object
  - locationToData is a valid LocationData object
  - departureDate is a non-empty string
  - departureTime is a non-empty string
  - returnDate is a non-empty string
  - returnTime is a non-empty string
THEN the submit button should be enabled
```

#### Scenario: Round Trip - Missing Return Date
```gherkin
GIVEN the user has selected trip type "Round Trip"
AND all departure fields are valid
AND returnTime is populated
BUT returnDate is empty
THEN the submit button should be disabled
```

#### Scenario: Round Trip - Missing Return Time
```gherkin
GIVEN the user has selected trip type "Round Trip"
AND all departure fields are valid
AND returnDate is populated
BUT returnTime is empty
THEN the submit button should be disabled
```

### Requirement: Validation Logic Implementation
The validation logic MUST be implemented in `BookingForm.tsx` using a conditional expression that checks trip type.

#### Scenario: Validation Expression Structure
```typescript
// Current (INCORRECT) - Line 59 in BookingForm.tsx
const isValid = !!locationFromData && !!locationToData;

// Updated (CORRECT)
const isValid = 
  !!locationFromData && 
  !!locationToData && 
  !!departureDate && 
  !!departureTime &&
  (tripType === "oneWay" || (!!returnDate && !!returnTime));
```

**Explanation:**
- `!!locationFromData && !!locationToData`: Both locations must be valid objects
- `!!departureDate && !!departureTime`: Departure date and time must be non-empty strings
- `(tripType === "oneWay" || (!!returnDate && !!returnTime))`: 
  - If one-way trip: validation passes (no return fields needed)
  - If round trip: both return date and time must be non-empty strings

#### Scenario: Integration with Existing Code
```typescript
// File: src/components/organisms/booking/BookingForm.tsx
// Lines 23-59 (context)

export default function BookingForm({
  translations,
  title,
  className,
  ariaLabel,
}: Props) {
  const state = useSearchFormStore();

  const {
    tripType,              // ← Used in validation
    locationFrom,
    locationFromData,      // ← Validated
    locationTo,
    locationToData,        // ← Validated
    departureDate,         // ← Validated
    departureTime,         // ← Validated
    returnDate,            // ← Validated (round trip only)
    returnTime,            // ← Validated (round trip only)
    passengers,
    setLocationFrom,
    setLocationTo,
    setDepartureDate,
    setDepartureTime,
    setReturnDate,
    setReturnTime,
    setPassengers,
  } = state;

  // Date and Time constraints calculation
  const today = new Date().toLocaleDateString("en-CA");
  const now = new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const minDepartureDate = today;
  const minDepartureTime = departureDate === today ? now : undefined;

  const minReturnDate = departureDate || today;
  const minReturnTime =
    returnDate === departureDate ? departureTime : undefined;

  // ✅ UPDATED VALIDATION LOGIC
  const isValid = 
    !!locationFromData && 
    !!locationToData && 
    !!departureDate && 
    !!departureTime &&
    (tripType === "oneWay" || (!!returnDate && !!returnTime));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    // Determine locale-based redirect URL
    const isSpanish = window.location.pathname.startsWith("/es");
    const resultsUrl = isSpanish ? "/es/resultados" : "/results";

    window.location.assign(resultsUrl);
  };

  // ... rest of component
}
```

### Requirement: Visual Feedback Preservation
The existing visual feedback for the disabled state MUST be preserved.

#### Scenario: Disabled Button Styling
```typescript
// File: src/components/atoms/form/SubmitButton.tsx
// Lines 16-29 (unchanged)

return (
  <button
    type="submit"
    aria-label={ariaLabel}
    disabled={disabled}
    className={clsx(
      "bg-blue rounded-md px-5 py-4 text-white uppercase transition-all",
      className,
      disabled && "cursor-not-allowed opacity-50",  // ← Preserved
    )}
  >
    {label}
  </button>
);
```

**Visual States:**
- **Enabled**: Full opacity, normal cursor, blue background
- **Disabled**: 50% opacity, not-allowed cursor, blue background (dimmed)

## Implementation Notes

### Files Modified
1. **`src/components/organisms/booking/BookingForm.tsx`**
   - Line 59: Update `isValid` calculation
   - No other changes required

### Files NOT Modified
- ✅ `src/components/atoms/form/SubmitButton.tsx` (no changes needed)
- ✅ `src/store/search-form.ts` (no changes needed)
- ✅ Any other form field components (no changes needed)

### Testing Checklist
- [ ] Initial load: Submit button is disabled
- [ ] One-way: Button disabled with only locations selected
- [ ] One-way: Button disabled with locations + date (no time)
- [ ] One-way: Button disabled with locations + time (no date)
- [ ] One-way: Button enabled with all 4 required fields
- [ ] Round trip: Button disabled with only departure fields
- [ ] Round trip: Button disabled with departure + return date (no return time)
- [ ] Round trip: Button disabled with departure + return time (no return date)
- [ ] Round trip: Button enabled with all 6 required fields
- [ ] Switching trip type updates validation correctly
- [ ] Clearing a required field re-disables the button
