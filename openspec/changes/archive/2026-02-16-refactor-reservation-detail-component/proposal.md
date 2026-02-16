# Refactor Reservation Detail Component

## Summary
The `ReservationDetail.astro` component currently contains monolithic structure, repetitious code (DRY violations), and uses HTML elements that could be more semantic for SEO and accessibility. This proposal outlines a refactor to break the page down into smaller, reusable components, improve the semantic HTML structure (page hierarchy, lists vs tables), and prepare the codebase for easier maintenance and future data integration.

## Goals
1.  **DRY (Don't Repeat Yourself)**: Eliminate code duplication, particularly for status indicators and user information display.
2.  **Componentization**: Split the page into logical subcomponents (Header, Details List, Payment Actions, Status Badge).
3.  **Semantic HTML & SEO**: Use appropriate HTML tags (`<dl>`, `<section>`, `<header>`, `<figure>`) to improve accessibility and SEO.
4.  **Maintainability**: Structure the code to make future updates (like real API integration) seamless.

## Motivation
The current implementation puts all layout and logic into a single file, making it harder to read and maintain. Key information like the reservation status "CONFIRMED" is hardcoded in multiple places. HTML structure relies heavily on generic `div`s and `table`s where more specific elements would provide better context to assistive technologies and search engines.

## Impact
- **Components**:
    - New directory: `src/components/molecules/reservation/`
    - New components: `ReservationHeader.astro`, `ReservationStatusBadge.astro`, `ReservationDetailsList.astro`, `PaymentUpdateAction.astro`.
- **Page**:
    - Update `src/components/pages/store/ReservationDetail.astro` to use the new components.
- **Styles**:
    - Ensure consistent styling using Tailwind utility classes, extracting common patterns if necessary (though utility classes are preferred).
