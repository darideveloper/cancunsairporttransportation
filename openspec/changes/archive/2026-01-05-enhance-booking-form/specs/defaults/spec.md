## ADDED Requirements

### Requirement: The Booking Form must support default values via props
The `BookingForm` component MUST accept props to set the initial values of "Leaving from" and "Going to" fields.

#### Scenario: Component receives default values
Given the `BookingForm` component is rendered
And `defaultFrom` prop is set to "Location A"
When the page loads
Then the "Leaving from" field should be selected as "Location A"

### Requirement: The Booking Form must default to current date and time
When no explicit date/time is provided, the form fields "Pickup Date" and "Pickup Time" MUST initialize to the current user's date and time.

#### Scenario: Default date and time
Given the user is on the booking form
When the page loads
Then the "Pickup Date" should be set to the current date
And the "Pickup Time" should be set to the current time
