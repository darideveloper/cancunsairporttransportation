# Spec: Booking Form Structure

## ADDED Requirements

### Requirement: Modular Field Components
The system MUST provide distinct React components for Location, Date, Time, and Passenger inputs, each encapsulating its own HTML structure and label.

#### Scenario: Rendering Location Fields
GIVEN the `LocationSelect` component
WHEN rendered with a specific label
THEN it displays a `<label>` containing the text
AND a `<select>` element associated with that label.

#### Scenario: Rendering Date Field
GIVEN the `DateInput` component
WHEN rendered
THEN it displays a labeled `<input type="date">`.

#### Scenario: Rendering Time Field
GIVEN the `TimeInput` component
WHEN rendered
THEN it displays a labeled `<input type="time">`.

### Requirement: Control Components
The system MUST provide separate components for Trip Type and Currency selection.

#### Scenario: Trip Type Selection
GIVEN the `TripTypeControls` component
WHEN rendered
THEN it shows buttons for "One Way" and "Round Trip" sourced from translations.

### Requirement: Form Container
The system MUST provide a `BookingForm` container that aggregates all fields and controls.

#### Scenario: Form Structure
GIVEN the `BookingForm`
WHEN rendered
THEN it displays the Control components at the top
AND the Field components below them
AND a Submit button at the end.
