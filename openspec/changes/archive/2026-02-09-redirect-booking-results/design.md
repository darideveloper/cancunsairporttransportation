# Design: Booking Redirection and Results Mapping

## 1. Redirection Architecture

The `BookingForm` is a React island (`client:idle`). Redirection should happen on the client side after form validation.

### Data Flow

1. User enters data in `BookingForm`.
2. Astro server passes the localized results URL as a prop to the React component.
3. On submit, the React component uses `window.location.href` to trigger the browser navigation.
4. Zustand's `persist` middleware (using `localStorage`) ensures the data is available when the new page loads.

### Props Update in `BookingForm.tsx`

```tsx
interface Props {
  translations: any;
  lang: "en" | "es"; // Added
  resultsUrl: string; // Added
  // ...
}
```

## 2. i18n Considerations

All redirection URLs must be localized. We will use the existing `getLocalizedPath` utility in the Astro pages to calculate the URLs before passing them to the React islands.

Example in `Home.astro`:

```astro
import { getLocalizedPath } from "../../../lib/i18n/utils";
const resultsUrl = getLocalizedPath("results", lang);
---
<BookingForm resultsUrl={resultsUrl} lang={lang} ... />
```
