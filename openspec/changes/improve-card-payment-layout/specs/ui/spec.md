# Specification: UI Improvements for Card Payment

## MODIFIED Requirements

### Requirement: Shared Store-Managed `paypalId`
The `SearchFormStore` SHALL manage the `paypalId` state to synchronize the visibility of the payment selection list and the card payment form.

#### Scenario: Shared paypalId state
- **Definition**: The `SearchFormStore` MUST include a `paypalId` field (nullable string) and a `setPaypalId` action.
- **Given**: The user has not started a digital payment.
- **Then**: `paypalId` is initialized as null.
- **When**: `setPaypalId` is called with a value.
- **Then**: The state is updated across all components using the store.

### Requirement: Payment Selection Visibility Logic
The `PaymentMethods` component SHALL implement a "compact view" when a card payment order is active to optimize vertical space.

#### Scenario: Hide selection list for Card method
- **Given**: `paymentMethod` is set to `card`.
- **And**: `paypalId` in the store is NOT null.
- **Then**: The `PaymentMethods` title, intro text, and all individual `PaymentMethod` selection items SHALL be hidden.
- **And**: The "Back" button SHALL be rendered.

#### Scenario: "Back" Button for Method Selection
- **Given**: `paymentMethod` is set to `card`.
- **And**: `paypalId` in the store is NOT null.
- **When**: The user clicks the "Back" button.
- **Then**: `setPaypalId(null)` SHALL be called in the store.
- **And**: The original payment selection UI SHALL be restored.

### Requirement: Automatic Scroll to Summary
The UI SHALL automatically scroll to the top of the summary section when a card payment order is initialized to ensure optimal form positioning.

#### Scenario: Scroll when Card method becomes active
- **Given**: `paymentMethod` is set to `card`.
- **When**: `paypalId` in the store transitions from `null` to a non-null value.
- **Then**: The browser window SHOULD smoothly scroll to the top of the `SelectedVehicleCard` summary component.

