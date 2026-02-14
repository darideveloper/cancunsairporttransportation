# Redirect Booking to Results

## Why

The current `BookingForm.tsx` component does not have a submission handler, so clicking "Search" does not navigate the user anywhere. The `Results.astro` page exists but lacks a summary of the selected trip details, making it difficult for users to verify their search.

## Proposed Solution

1. **Redirection Logic**:

   - Implement an `onSubmit` handler in `BookingForm.tsx` that prevents default behavior.
   - The handler should determine the correct results page URL based on the current window location:
     - If the path starts with `/es`, redirect to `/es/resultados`.
     - Otherwise, redirect to `/results`.
   - Ensure the zustand store state is updated with the form data before redirection.

2. **Validation**:

   - Ensure the Zustand store correctly persists data when navigating between the home/service pages and the results page.

## Related Changes

- None

## Impact

- **Pages**: Home, Taxi, Akumal, Tulum, Group, Luxury, Private.
- **Components**: `BookingForm`.
- **Store**: `useSearchFormStore` (Zustand).

## Acceptance Criteria

- Clicking "Search" on the booking form redirects to `/results` (EN) or `/es/resultados` (ES) based on the current language context.
- The route map on the results page continues to work correctly.
