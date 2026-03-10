# Design: Dynamic PayPal SDK Loading

The PayPal SDK will be managed as a dynamic resource within the `BookingSubmission` React component to ensure synchronization between the user's selected currency and the SDK configuration.

## Logic Flow

1. **Store Observation**: The component retrieves `currency` from `useSearchFormStore`.
2. **SDK Script Management**:
   - A `useEffect` hook monitors the `currency` state.
   - When the component mounts or `currency` changes:
     - It checks if a PayPal SDK script already exists.
     - If it exists and has a different currency, it removes the script and deletes `window.paypal`.
     - It injects a new `<script>` tag with the updated `currency` parameter.
3. **Loading State**: A local `isSdkLoaded` state tracks the script's `onload` event.
4. **Button Rendering**:
   - The existing `useEffect` for rendering buttons will now also depend on `isSdkLoaded`.
   - Rendering only proceeds if `paypalId`, `paymentMethod`, and `isSdkLoaded` are all valid.

## Code Implementation Details

### Script Injection Utility (Mental Model)
```typescript
const loadPayPalSdk = (currency: string, clientId: string) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=${currency}&components=buttons&disable-funding=paylater,venmo`;
    script.id = "paypal-sdk-script";
    script.onload = () => resolve(true);
    document.head.appendChild(script);
  });
};
```

### Dependency Chain
- `currency` changes -> Remove old script -> Load new script -> set `isSdkLoaded(true)`.
- `handleSubmit` completes -> set `paypalId`.
- `isSdkLoaded === true` AND `paypalId !== null` -> `renderPayPalButtons()`.

## Trade-offs
- **Multiple Loads**: If a user toggles currency multiple times on the register page, the SDK will reload. This is acceptable as currency changes are infrequent during checkout.
- **Complexity**: Adds script management logic to the component, but ensures total correctness of the payment flow.
