# Tasks for fix-booking-form-validation

## Implementation Tasks

- [x] **Update validation logic in BookingForm.tsx**
  - File: `src/components/organisms/booking/BookingForm.tsx`
  - Line: 59-66
  - Replaced: `const isValid = !!locationFromData && !!locationToData;`
  - With: Multi-field validation expression that checks all required fields based on trip type

## Validation Tasks

- [x] **Test one-way trip validation**
  - Verify button disabled on initial load
  - Verify button disabled with only locations selected
  - Verify button disabled with locations + date only
  - Verify button disabled with locations + time only
  - Verify button enabled with all 4 required fields

- [x] **Test round trip validation**
  - Verify button disabled with only departure fields
  - Verify button disabled with departure + return date only
  - Verify button disabled with departure + return time only
  - Verify button enabled with all 6 required fields

- [x] **Test dynamic behavior**
  - Verify switching from one-way to round trip updates validation
  - Verify switching from round trip to one-way updates validation
  - Verify clearing a required field re-disables the button
  - Verify re-filling a cleared field re-enables the button

- [x] **Verify visual feedback**
  - Confirm disabled button shows opacity-50
  - Confirm disabled button shows cursor-not-allowed
  - Confirm enabled button shows normal styling

## Documentation Tasks

- [x] **Update existing spec if needed**
  - Review `openspec/specs/form-validation/spec.md`
  - Merge new requirements if this change is approved
