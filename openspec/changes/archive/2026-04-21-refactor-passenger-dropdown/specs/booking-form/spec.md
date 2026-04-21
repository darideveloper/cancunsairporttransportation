# Spec Delta: Passenger Input Dropdown
`MODIFIES booking-form`

## MODIFIED Requirements

### Requirement: Modular Field Components
The system MUST provide distinct React components for Location, Date, Time, and Passenger inputs, each encapsulating its own HTML structure and label.

#### Scenario: Rendering Passenger Field
GIVEN the `PassengerInput` component
WHEN rendered
THEN it displays a labeled `<select>` element
AND it contains options from 1 to 25
AND it reflects the current `value` from the store
AND it triggers `onChange` when a new number is selected.

#### Scenario: Styling and Responsiveness
GIVEN the `PassengerInput` component
WHEN rendered
THEN it MUST use `rounded-lg`, `border-gray-300`, and `focus:ring-2` Tailwind classes
AND it MUST have `pl-3` and `pr-10` padding
AND it MUST include a visual indicator (e.g., a chevron arrow) to identify it as a dropdown
AND when `disabled` it MUST have `opacity-50` and `cursor-not-allowed`.
