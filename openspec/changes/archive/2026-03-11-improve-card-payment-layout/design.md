# Design: Improve Card Payment Layout

This design addresses the vertical overflow caused by the PayPal Credit/Debit card form by hiding the method selection list and moving the form to the top of the sidebar.

## 1. Store Update (`src/store/search-form.ts`)
The `useSearchFormStore` will be updated to include `paypalId` and its corresponding setter. This state represents the existence of an active PayPal order (received from the backend after clicking "Continue").

```typescript
interface SearchFormState {
  // ... existing fields
  paypalId: string | null;
  setPaypalId: (id: string | null) => void;
}

// ... in create function
paypalId: null,
setPaypalId: (paypalId) => set({ paypalId }),
```

## 2. Updated Component Workflow

### `BookingSubmission.tsx`
*   Instead of using `useState` for `paypalId`, it will pull it from `useSearchFormStore`.
*   The `handleSubmit` function will call the store's `setPaypalId`.
*   The `useEffect` logic for clearing state remains, but now updates the global store.

### `PaymentMethods.tsx`
This component will implement a conditional view based on `paypalId` and `paymentMethod`.

*   **Logic**: `if (paypalId && paymentMethod === 'card')`
*   **Hidden Elements**: `H2` title, `p` intro text, and the `paymentOptions.map` list.
*   **New Element**: A "Back" button (or link) that resets the state.
*   **Action**: Clicking "Back" will call `setPaypalId(null)`.

## 3. UI/UX Considerations
*   The "Back" button should be clearly visible but minimal to maximize vertical space.
*   Hiding the entire list ensures that on mobile devices, the card form is as close to the top of the screen as possible, reducing scrolling.
*   The transition between the list and the "Back" button should be smooth (utilizing Tailwind's `animate-in` if possible).

## 4. Layout Impact
By hiding the selection list, the `BookingSubmission` component moves up in the `RegisterForm.tsx` column. Since `BookingSubmission` is what contains the `#paypal-button-container`, the card form starts at the original position of the `PaymentMethods` header.
