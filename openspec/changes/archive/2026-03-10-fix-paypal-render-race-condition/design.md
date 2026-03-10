# Design: PayPal Initialization via Effect

Instead of calling `renderPayPalButtons` manually after receiving the API response, we will let React manage the lifecycle by using a `useEffect` hook that responds to the `paypalId` state update.

## Current Flow (Broken)
1. `handleSubmit` receives `response`.
2. `setPaypalId(response.paypal_id)`.
3. `renderPayPalButtons(response.paypal_id, paymentMethod)`.
4. **Error**: `#paypal-button-container` is not yet in the DOM.

## Fixed Flow
1. `handleSubmit` receives `response`.
2. `setPaypalId(response.paypal_id)`.
3. `handleSubmit` completes.
4. React re-renders the component.
5. `#paypal-button-container` is added to the DOM.
6. `useEffect` triggers because `paypalId` changed.
7. `useEffect` calls `renderPayPalButtons()`.
8. PayPal SDK finds the element and renders.

## Implementation Details

### `useEffect` Hook
The hook will look for `paypalId` and `paymentMethod`:

```typescript
useEffect(() => {
  if (paypalId && paymentMethod) {
    const container = document.getElementById("paypal-button-container");
    if (container) {
      // Small delay or next tick to ensure full render if needed, but usually container check is enough
      renderPayPalButtons(paypalId, paymentMethod);
    }
  }
}, [paypalId, paymentMethod]);
```

### `handleSubmit` Update
Remove the `renderPayPalButtons` call:

```typescript
if (paypalId) {
  setPaypalId(paypalId);
  // renderPayPalButtons removed
}
```

## Trade-offs
- **Complexity**: Slightly more logic in `useEffect`.
- **Robustness**: Much higher, as it follows the standard React state-to-DOM update cycle.
