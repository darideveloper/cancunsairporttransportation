# Design: Reservation Store

## Problem Statement
The reservation query form in `Reservation.astro` currently performs a traditional form submission, which doesn't persist the user's input (Reservation Code and Email) in the client-side state. This makes it difficult to retrieve and display reservation details in a dynamic way or to maintain context if the user navigates back and forth.

## Proposed Solution
Introduce a new Zustand store `useReservationStore` to manage the state of reservation queries. This store will store the `code` and `email` entered by the user and persist them to `localStorage` using the `persist` middleware, following the pattern used in `useSearchFormStore`.

## Architectural Changes

### 1. New Zustand Store
File: `src/store/reservation.ts`

**Interface:**
```typescript
interface ReservationState {
  code: string;
  email: string;
  setCode: (code: string) => void;
  setEmail: (email: string) => void;
  reset: () => void;
}
```

**Persistence:**
- Store name: `reservation-storage`
- Storage: `localStorage`

### 2. Component Integration
The `Reservation.astro` page will be updated to:
- Convert the form into a client-side managed form (or at least sync the state on input/submit).
- Since `Reservation.astro` is an Astro component, the form logic should be moved to or integrated with a React component to leverage the Zustand store during user interaction.
- The `Input` component (which is already a React component) can be used inside a new `ReservationForm.tsx` organism.

### 3. Data Flow
1. User enters `code` and `email` in the form.
2. The values are updated in `useReservationStore`.
3. Upon submission, the values are available for the `ReservationDetail.astro` page (or any other component) to fetch the specific reservation data.

## Alternatives Considered
- **URL Search Params**: Passing data via URL is an option, but Zustand provides a cleaner way to handle persistence and global access without cluttering the URL, especially if more complex state is added later.
- **Session Storage**: `localStorage` is preferred for better user experience if they close the tab and return later.

## Cross-cutting Concerns
- **i18n**: The store doesn't need to be localized, but the components using it will continue to use the existing `i18n` system.
- **Persistence**: Using `zustand/middleware`'s `persist` ensures data survives page refreshes.
