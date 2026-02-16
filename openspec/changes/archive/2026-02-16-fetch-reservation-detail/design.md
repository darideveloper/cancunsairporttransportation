# Design: Dynamic Reservation Detail

## Architecture

The `ReservationDetail` page will transition from a purely static (SSG) page with mock data to a "Client Island" architecture for the main content area.

### Data Flow
1.  **Store**: `useReservationStore` (Zustand) holds `code` and `email` in `localStorage`.
2.  **Mount**: `ReservationDetailClient` mounts on the client.
3.  **Fetch**: Calls `getReservation(code, email, lang)` -> `POST /legacy/my-booking/`.
4.  **Render**: Updates state with `Reservation` object and renders child components.

### Component Structure

*   `src/components/pages/store/ReservationDetail.astro` (Page Shell)
    *   `Layout`
    *   `ReservationDetailClient.tsx` (New, client:only="react")
        *   `ReservationHeader.tsx` (Converted from .astro)
        *   `PaymentUpdateAction.tsx` (Converted from .astro)
        *   `ReservationStatusBadge.tsx` (Converted from .astro)
        *   `ReservationDetailsList.tsx` (Converted from .astro)
        *   `BookingSummary.tsx` (Existing React)
        *   `ReservationDetailSkeleton.tsx` (New, Skeleton Loader)

### API Interface

The `getReservation` function will interface with the endpoint defined in `docs/MyBookingProxyView-external.md`.

## Trade-offs

*   **Refactoring Cost**: Converting `.astro` components to `.tsx` requires rewriting JSX syntax (e.g., `class` -> `className`) and removing Astro-specific features (like `---` frontmatter). This is necessary because React components cannot import/render Astro components.
*   **Client-Side Only**: The page will show a loading state initially. This is acceptable for a "My Booking" page where data is user-specific and essentially private.
