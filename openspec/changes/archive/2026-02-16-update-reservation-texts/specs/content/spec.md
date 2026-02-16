# Content Updates

## ADDED Requirements

### Requirement: Reservation Detail Texts match approved copy
The reservation detail page SHALL display texts matching the approved HTML copy in both English and Spanish.

#### Scenario: English Copy
Given the user is viewing the reservation detail page in English
Then the heading says "Reservations data"
And the status label says "Status of your reservation"
And the payment update text says "If you have already made your payment and it is still not reflected, click on the button to update"
And the details labels are "From" and "To" (without colons)
And the booking summary description says "X {count} private transportation services".

#### Scenario: Spanish Copy
Given the user is viewing the reservation detail page in Spanish
Then the heading says "Datos de reservación"
And the status label says "Estatus de tu reservación"
And the payment update text says "Si ya ha realizado el pago y aún no se ha reflejado, haga clic en el botón para actualizar"
And the details labels are "Desde" and "Hacia"
And the booking summary description says "X {count} servicios de transportación privada".

### Requirement: Booking Summary Component Customization
The `BookingSummary` component SHALL support displaying custom text passed via props instead of the default vehicle description.

#### Scenario: Custom Description
Given the `BookingSummary` component is rendered with a `customDescription` prop
Then it displays the `customDescription` text
And it does not display the default vehicle description format.
