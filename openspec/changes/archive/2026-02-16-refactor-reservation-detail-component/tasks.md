# Tasks

1.  **Define Types** <!-- id: 0 -->
    - [x] Create `src/types/reservation.ts` (or relevant location) with interfaces for `Reservation`, `Vehicle`, `User`, `Passenger`, etc.
    - [x] Ensure strict typing for props passed to components.

2.  **Create ReservationStatusBadge Component** <!-- id: 1 -->
    - [x] Create `src/components/molecules/reservation/ReservationStatusBadge.astro`.
    - [x] Accept `status` prop (string/enum).
    - [x] Render a styled badge (CONFIRMED/PENDING/CANCELLED styling).
    - [x] Replace usage in `ReservationDetail.astro` header and sidebar (DRY).

3.  **Create ReservationHeader Component** <!-- id: 2 -->
    - [x] Create `src/components/molecules/reservation/ReservationHeader.astro`.
    - [x] Accept `title`, `user`, and `status` props.
    - [x] Implement the checkmark icon, user greeting, contact info cluster.
    - [x] Use `<header>` or semantic `<section>` wrapper.
    - [x] Ensure logical heading hierarchy (H1 is passed or contained).

4.  **Create ReservationDetailsList Component** <!-- id: 3 -->
    - [x] Create `src/components/molecules/reservation/ReservationDetailsList.astro`.
    - [x] Accept `reservation` object relevant to details (code, service, passengers, date, locations).
    - [x] Use `<dl>` (Description List) for semantic key-value pairs instead of `<table>` where appropriate, or keep `<table>` but ensure `<th>` scope attributes are correct if data is tabular. Given it is a single record list, `<dl>` is often more semantic.
    - [x] Style to match existing design (white card, border, rounded).

5.  **Create PaymentUpdateAction Component** <!-- id: 4 -->
    - [x] Create `src/components/molecules/reservation/PaymentUpdateAction.astro`.
    - [x] Accept `actionUrl` or create logic internally based on current path.
    - [x] Render the blue box with text and button.
    - [x] Ensure button has descriptive text for screen readers.

6.  **Update ReservationDetail Page** <!-- id: 5 -->
    - [x] Import and use the new components in `src/components/pages/store/ReservationDetail.astro`.
    - [x] Pass necessary props.
    - [x] Verify layout matches original design.
    - [x] Check that no duplicate logic remains.

7.  **SEO & Optimization Audit** <!-- id: 6 -->
    - [x] Ensure `img` tags (Stripe, vehicle) have `width`, `height`, and `alt` attributes.
    - [x] Verify heading hierarchy (H1 -> H2 -> H3).
    - [x] Use semantic landmarks (`<main>`, `<aside>` for sidebar if appropriate).
    - [x] Check color contrast for text accessible compliance.

8.  **Final Cleanup** <!-- id: 7 -->
    - [x] Remove inline mock data if moved to a cleaner utility/mock file.
    - [x] Delete unused imports.
