# Design: Pricing Destinations Section

## UI/UX
-   **Layout**:
    -   **Header**: Title and description at the top.
    -   **Grid**: 3 columns on desktop, 1 column on mobile (likely `md:grid-cols-3`).
    -   **Footer**: "View more destinations" button at the bottom.
-   **Cards**: Each destination card features an image, title, "Price from" label, price value, description, and a "Book now" (Reservar) button.
-   **Styling**: Use existing Tailwind CSS tokens (colors, fonts).

## Technical Architecture
-   **File**: `src/pages/[lang]/index.astro`
-   **Data Source**:
    -   **Static Array (`index.astro`)**:
        ```typescript
        const destinations = [
          { id: 'tulum', image: '/assets/img/destinations/tulum.jpg', webpImage: '/assets/img/destinations/tulum.webp', link: '/cancun-to-tulum-shuttle' },
          { id: 'playa', image: '...', ... },
          // ...
        ]
        ```
    -   **Translations (`src/messages/`)**:
        -   New keys structure: `home.destinations.{id}.title`, `home.destinations.{id}.description`, `home.destinations.{id}.price`, etc.
        -   The component will iterate over the static array and resolve texts using `t(home.destinations.${dest.id}.title)`.
-   **Components**:
    -   Will attempt to reuse `PricingCard` if it supports the specific "Image + Title + Price + Desc + Button" layout.
    -   If `PricingCard` is too rigid, we will implement a loop rendering the specific HTML structure using Tailwind classes.

## Accessibility
-   Images must have `alt` text.
-   Links must be crawlable.
-   Price clarity for screen readers.
