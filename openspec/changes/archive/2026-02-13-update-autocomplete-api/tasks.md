# Tasks: Update Autocomplete API

1.  [x] **Update Environment Config**:
    -   Use the existing `API_BASE` variable (ensure it's prefixed with `PUBLIC_` if needed for client-side access, or proxy via Astro API routes if it's server-only).
    -   Remove `PUBLIC_LEGACY_API_URL` and `PUBLIC_LEGACY_API_KEY` from `.env`.

2.  [x] **Modify `LocationAutocomplete.tsx`**:
    -   Update the `fetch` URL to use `${API_BASE}/api/legacy/autocomplete/`.
    -   Remove the `app-key` header from the request.
    -   Ensure CORS/Proxy works as expected (check with user if any proxy setup is needed, though likely handled by the browser if the service supports CORS).

3.  [x] **Verify Functionality**:
    -   Test searching for "Playa".
    -   Confirm results still map correctly (ensure response structure matches expectation).
    -   Test with empty results.
