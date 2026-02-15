# Fix Booking Form Validation

**Change ID**: `fix-booking-form-validation`  
**Status**: Proposed  
**Created**: 2026-02-14

## Summary

The booking form's submit button currently activates prematurely after only selecting the "from" and "to" locations, ignoring the required date and time fields. This change fixes the validation logic to ensure all required fields are populated before enabling the submit button.

## Motivation

### Current Behavior (Incorrect)
The submit button becomes enabled as soon as:
- `locationFromData` is populated (user selects a valid "from" location)
- `locationToData` is populated (user selects a valid "to" location)

**Problem**: The validation logic in `BookingForm.tsx` (line 59) only checks:
```typescript
const isValid = !!locationFromData && !!locationToData;
```

This ignores the following **required** fields:
- Departure date (`departureDate`)
- Departure time (`departureTime`)
- For round trips: Return date (`returnDate`) and return time (`returnTime`)

### Expected Behavior (Correct)
The submit button should only be enabled when:

**For One-Way Trips:**
1. ✅ Valid "from" location selected (`locationFromData` exists)
2. ✅ Valid "to" location selected (`locationToData` exists)
3. ✅ Departure date selected (`departureDate` is not empty)
4. ✅ Departure time selected (`departureTime` is not empty)

**For Round Trips:**
1. ✅ Valid "from" location selected (`locationFromData` exists)
2. ✅ Valid "to" location selected (`locationToData` exists)
3. ✅ Departure date selected (`departureDate` is not empty)
4. ✅ Departure time selected (`departureTime` is not empty)
5. ✅ Return date selected (`returnDate` is not empty)
6. ✅ Return time selected (`returnTime` is not empty)

### User Impact
Users can currently submit incomplete forms, leading to:
- Failed API requests (missing required parameters)
- Poor user experience (error messages after submission instead of prevention)
- Potential data integrity issues

## Technical Approach

This change modifies the validation logic in `BookingForm.tsx` to check all required fields based on the trip type before enabling the submit button.

### Affected Components
- **Primary**: `src/components/organisms/booking/BookingForm.tsx`
  - Update the `isValid` calculation (line 59)
  - Add trip-type-aware validation logic

### Implementation Strategy
1. Replace the simple location-only validation with comprehensive field validation
2. Differentiate validation rules between `oneWay` and `roundTrip` trip types
3. Maintain existing visual feedback (disabled button styling via `clsx`)

## Scope

### In Scope
- ✅ Update validation logic in `BookingForm.tsx`
- ✅ Add trip-type-aware validation (one-way vs round trip)
- ✅ Ensure all required fields are validated before form submission

### Out of Scope
- ❌ Adding new visual validation indicators (error messages, field highlighting)
- ❌ Changing the form's UI/UX layout
- ❌ Modifying the Zustand store structure
- ❌ Adding client-side validation for field formats (dates, times)
- ❌ Server-side validation changes

## Dependencies

### Existing Specs
- **`booking-form`**: Defines the form structure and field components
- **`form-validation`**: Currently only validates location fields; will be extended

### Related Changes
None. This is a standalone bug fix.

## Risks & Considerations

### Low Risk
- **Minimal code change**: Single validation expression update
- **No breaking changes**: Existing functionality preserved
- **No UI changes**: Only affects button enable/disable state

### Testing Considerations
- Verify one-way trip validation (4 required fields)
- Verify round trip validation (6 required fields)
- Verify button state transitions as fields are filled
- Test edge cases (clearing fields after filling)

## Success Criteria

1. ✅ Submit button is disabled on initial page load
2. ✅ Submit button remains disabled if any required field is empty (one-way)
3. ✅ Submit button remains disabled if any required field is empty (round trip)
4. ✅ Submit button enables only when all required fields are populated
5. ✅ Existing visual feedback (opacity, cursor) works correctly
6. ✅ Form submission still redirects to results page when valid
