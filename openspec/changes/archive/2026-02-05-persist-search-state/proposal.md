# Proposal: Persist Search State

## Proposer
Antigravity (AI Assistant)

## Summary
Persist the booking form search state (locations, dates, passengers) to `localStorage` using Zustand's `persist` middleware. This ensures that users retain their search criteria upon page reload or navigation, providing a seamless experience.

## Motivation
Currently, when a user reloads the page or navigates away and returns, the booking form resets to its default values (e.g., "Cancun Airport" to "Merida"). This causes friction, as users lose their carefully selected inputs (dates, times, locations). The "save last location" feature reported by the user is effectively missing or broken because the functionality to persist this state does not exist in the current store implementation.

## Proposed Solution
Modify `src/store/search-form.tsx` to include the `persist` middleware from `zustand/middleware` using `localStorage`.

Additionally, update `src/components/organisms/BookingForm.tsx` to **remove the logic that sets default values** (e.g., "Cancun -> Merida") when the form initializes. If no data is found in `localStorage`, the form fields should remain empty (displaying only placeholders).

## Risks
*   **Hydration Mismatch**: There is a potential for hydration mismatch if server-rendered HTML (SSR) differs from the client-side state rehydrated from `localStorage`.
    *   *Mitigation*: Since the `BookingForm` is an interactive island (`client:idle`), the initial static HTML (if any) might briefly show defaults. We expect Zustand to update the state immediately upon hydration. Explicit `skipHydration` checks or similar might be needed if strictly solving for hydration warnings, but for this use case, the standard behave is usually acceptable or handled by modern Zustand.
*   **Stale Data**: Old state might persist indefinitely.
    *   *Mitigation*: We can version the store if needed, but for simple form fields, this is low risk.

## Alternatives Considered
*   **Session Storage**: Would only last for the session. User requirement implies "save last location" which often implies longer term (e.g. closing tab and reopening), so `localStorage` is better.
*   **Cookies**: Overkill and adds request overhead.
