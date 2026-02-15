# Design: Register Submission Enhancements

## Dynamic URL Generation
To ensure the payment gateway redirects the user back to the correct environment (localhost, staging, or production), the `success_url` and `cancel_url` will be constructed at runtime:

```typescript
const origin = window.location.origin;
const successUrl = `${origin}/${lang === 'es' ? 'es/gracias' : 'thank-you'}`;
const cancelUrl = `${origin}/${lang === 'es' ? 'es/cancelar' : 'cancel'}`;
```

## Payment Flow Integration
The `handleSubmit` function will be updated to:
1.  Extract `paymentMethod` from the store.
2.  Prepare the payload with the new required fields for V2 API.
3.  Check the response for `payment_link`.
4.  If `payment_link` exists, trigger `window.location.href = response.payment_link`.
5.  If not (e.g. for Cash/Wire if added later), handle as a standard successful reservation.

## Feedback System (SweetAlert2)
SweetAlert2 will be used for:
- **Errors**: High-visibility modals for API errors or validation failures.
- **Success (Non-digital)**: A professional confirmation modal before any internal redirection.

Example implementation:
```typescript
import Swal from 'sweetalert2';

// Error
Swal.fire({
  icon: 'error',
  title: t('pages.register.errors.title'),
  text: errorMessage,
  confirmButtonColor: '#00A651', // Matching theme green
});
```
