# Design: Autocomplete API Migration

## Overview
We are migrating the autocomplete functionality from a direct call to the legacy `caribbean-transfers` API to a new endpoint hosted on our dashboard application (`cancuns-airport-transportation-dashboard.apps.darideveloper.com/api`). This simplifies authentication (removing the API key requirement) and centralizes API calls under a single domain.

## Architecture
-   **Client-Side Request**: The browser will make a direct `POST` request to the new endpoint.
-   **Endpoint**: `${API_BASE}/api/legacy/autocomplete/`
-   **Method**: `POST`
-   **Headers**: `Content-Type: application/json`
-   **Body**: `{"keyword": "search_term"}`
-   **Response**: Expected to match the existing structure (`{ items: [...] }`) or require minimal mapping adjustments.

## Environment Variables
-   **Reuse**: `API_BASE` (ensure it is accessible to the client, e.g., via `import.meta.env.PUBLIC_API_BASE` or similar proxying).
-   **Remove**: `PUBLIC_LEGACY_API_URL` and `PUBLIC_LEGACY_API_KEY`.

## Data Mapping
The existing mapping logic in `LocationAutocomplete.tsx` handles:
```typescript
const items = data.items || [];
const mappedResults = items.map((item: any) => ({
  name: item.name,
  lat: parseFloat(item.geo?.lat || "0"),
  lng: parseFloat(item.geo?.lng || "0"),
  address: item.address,
}));
```
We assume the new API returns a compatible structure. If the new API returns a different structure, we will update the mapping logic accordingly during implementation.

## Security
-   No API key is exposed or required on the client side for this endpoint.
-   CORS policies on the dashboard server must allow requests from the frontend origin.
