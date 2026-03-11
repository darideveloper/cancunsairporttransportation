# submission Specification Delta (Currency Fix)

## MODIFIED Requirements

### Requirement: Booking Submission Component

The application **SHALL** include `src/components/organisms/booking/BookingSubmission.tsx` to handle UI interactions, validation, and redirection.

#### Scenario: User Selects Currency and Payment Method
Given the user selects a currency (`USD` or `MXN`)
When the component mounts or the currency changes
Then the component MUST dynamically load the PayPal SDK with the matching `currency` parameter.
AND it MUST clear any previously loaded PayPal SDK instances to avoid currency conflicts.

#### Scenario: User Clicks Submit with Digital Payment (Currency Sync)
Given the user has selected "card" or "paypal"
When they click "Book Your Trip Now"
Then the component MUST call `createReservation`
AND it MUST wait for BOTH the `paypalId` state to be set AND the PayPal SDK to be fully loaded.
AND it MUST then call `renderPayPalButtons` to display the payment UI.

```typescript
// src/components/organisms/booking/BookingSubmission.tsx

// Dynamic SDK Loading Logic
useEffect(() => {
  const loadSdk = () => {
    // 1. Remove old script if exists
    // 2. Inject new script with current currency
    // 3. setSucceeded(true) on script.onload
  };
  loadSdk();
}, [currency]);

// Render Logic with SDK Guard
useEffect(() => {
  if (paypalId && isSdkLoaded && (paymentMethod === "paypal" || paymentMethod === "card")) {
    renderPayPalButtons(paypalId, paymentMethod);
  }
}, [paypalId, isSdkLoaded, paymentMethod]);
```
