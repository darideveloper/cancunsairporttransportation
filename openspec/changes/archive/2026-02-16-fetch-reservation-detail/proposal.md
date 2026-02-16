# Fetch Reservation Detail Proposal

[SCENARIO]
As a user, I want to view my reservation details dynamically on the confirmation page so that I can see the most up-to-date information about my booking.

[GOAL]
Dynamically fetch and display reservation details in `ReservationDetail` using the reservation code and email stored in the client-side store, replacing the current hardcoded mock data.

[APPROACH]
1.  **API Integration**: Add a new `getReservation` function to `src/lib/transportation/api.ts` that hits the `/legacy/my-booking/` endpoint.
2.  **Component Conversion**: Convert `ReservationDetail`'s static children (`ReservationHeader`, `ReservationStatusBadge`, `ReservationDetailsList`, `PaymentUpdateAction`) to React components to support client-side rendering.
3.  **Client-Side Logic**: Create a new `ReservationDetailClient` React component that:
    *   Retrieves `code` and `email` from `useReservationStore`.
    *   Fetches data on mount.
    *   Handles loading (skeleton/spinner) and error states.
    *   **Skeleton Loader**: Display a skeleton screen that mimics the layout of the reservation details while data is being fetched to improve perceived performance.
    *   Renders the converted components with the fetched data.
4.  **Page Update**: Update `src/components/pages/store/ReservationDetail.astro` to render `ReservationDetailClient` as a client-side island.

[BENEFITS]
*   **Real-time Data**: Users see their actual booking details instead of static placeholders.
*   **Interactive UI**: Enables future features like real-time updates or cancellations on the client side.
*   **Consistency**: Aligns with the "Islands Architecture" usage of React for interactive/dynamic elements.

[RISKS]
*   **SEO Impact**: The reservation details will now be client-side rendered, which might be less visible to crawlers than SSG. However, reservation details are private/personal, so SEO is not a priority for this specific data, whereas the page shell remains SSR.
