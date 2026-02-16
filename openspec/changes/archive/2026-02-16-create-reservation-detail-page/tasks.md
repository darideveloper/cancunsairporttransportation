# Tasks: Create Reservation Detail Page

Implementation steps for the new reservation detail route.

- [x] **Task 1: Register New Route**
  - Add `reservationDetail` key to the `routes` object in `src/lib/i18n/routes.ts`.
  - EN path: `my-reservation-detail`
  - ES path: `es/detalle-mi-reservacion`
  - **Validation**: Run `openspec validate create-reservation-detail-page`.

- [x] **Task 2: Create Page Component**
  - Create `src/components/pages/store/ReservationDetail.astro`.
  - Implement a basic shell including the `Layout` component and a placeholder heading.
  - **Validation**: Verify the file exists and compiles.

- [x] **Task 3: Map Component in Catch-all Route**
  - Update `src/pages/[...path].astro`.
  - Import `ReservationDetail` from `../components/pages/store/ReservationDetail.astro`.
  - Add `reservationDetail` to the `COMPONENT_MAP`.
  - **Validation**: Start dev server and visit `/my-reservation-detail` and `/es/detalle-mi-reservacion`.
