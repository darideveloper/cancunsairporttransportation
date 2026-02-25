# Capability: Booking Form Responsive Layout

## MODIFIED Requirements

### Requirement: REQ-001 - The booking form must be fully contained within the viewport on mobile devices.
The booking form MUST NOT cause horizontal overflow on small screens, ensuring a clean and usable interface on devices like iPhone 16.

#### Scenario: Prevent horizontal overflow on narrow screens (e.g., iPhone 16)
- GIVEN a mobile device with a viewport width of 390px or less
- WHEN the user views the booking form
- THEN the form and its inputs (including date and time pickers) must not exceed the width of the viewport
- AND there should be sufficient space for the input content without horizontal scrolling within the form.

### Requirement: REQ-002 - Form inputs must respect their container width.
Native browser inputs with intrinsic widths MUST be forced to shrink to fit their allocated grid space to prevent layout breakage.

#### Scenario: Force intrinsic width inputs to shrink
- GIVEN the booking form uses native `type="date"` or `type="time"` inputs
- WHEN rendered in Safari on iOS
- THEN the inputs must shrink to fit their grid column even if their intrinsic width is larger
- AND the `.input-container` must behave as a block element to correctly participate in the grid layout.
