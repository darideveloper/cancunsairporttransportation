# Design: Contact Form Submission

## 1. State Management (Zustand)

`src/store/contact-form.ts` will hold:

```typescript
interface ContactFormState {
  // Fields
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;

  // Actions
  setName: (val: string) => void;
  setEmail: (val: string) => void;
  setPhone: (val: string) => void;
  setSubject: (val: string) => void;
  setMessage: (val: string) => void;

  // Submission
  isLoading: boolean;
  status: 'idle' | 'success' | 'error';
  errorMessage: string | null;
  submitForm: () => Promise<void>;
  resetForm: () => void;
}
```

## 2. Validation (Zod)

Validation schema will be defined within the store or utility:

```typescript
const contactSchema = z.object({
  client_full_name: z.string().min(1).max(75),
  client_subject: z.string().min(1).max(100),
  client_email: z.string().email().max(85),
  client_phone: z.string().min(1).max(35),
  client_message: z.string().min(1).max(200),
});
```

*Note: API expects snake_case keys (`client_full_name`), mapping will happen during submission.*

## 3. Component Architecture

### `ContactForm.tsx` (Organism)
-   Replaces the `<form>` in `Contact.astro`.
-   Subscribes to `useContactFormStore`.
-   Renders fields using React atoms.
-   Handles `onSubmit`.

### Atoms (React)
-   `src/components/atoms/form/Input.tsx`: Port of `Input.astro`.
-   `src/components/atoms/form/Textarea.tsx`: Port of `Textarea.astro`.

## 4. API Integration

Endpoint: `POST https://api.caribbean-transfers.com/api/v1/contact` (via `PUBLIC_LEGACY_API_URL` env var).
Note: Local API route `src/pages/api/v1/contact.ts` MUST be removed.
Payload:
```json
{
  "client_full_name": "...",
  "client_subject": "...",
  "client_email": "...",
  "client_phone": "...",
  "client_message": "..."
}
```

Error Handling:
-   422: Validation error (show specific message if possible, or generic).
-   404/500: Server error.

## 5. Security & Performance
-   No auth required (Public endpoint).
-   CSRF protection handled by standard browser CORS (API allows cross-origin requests).
-   Client-side validation reduces unnecessary API calls.
-   Environment variable `PUBLIC_LEGACY_API_URL` ensures flexibility.
