# Proposal: Update Autocomplete API Endpoint

## Summary
Update the `LocationAutocomplete` component to use a new API endpoint (`/api/legacy/autocomplete/`) hosted on the dashboard app, replacing the direct call to the legacy API service. This change also removes the need for the `app-key` header and updates the environment configuration.

## Requirements
1.  **Update API Endpoint**: Switch from `PUBLIC_LEGACY_API_URL` to a new base URL structure.
2.  **Remove API Key**: The new endpoint does not require the `app-key` header.
3.  **Update Environment**: Use the existing `API_BASE` variable for the base URL.
4.  **Remove Legacy Variables**: Remove `PUBLIC_LEGACY_API_URL` and `PUBLIC_LEGACY_API_KEY` from the project configuration.
5.  **Maintain Functionality**: Ensure the autocomplete search input, debounce, and result display work exactly as before.

## Context
The current implementation fetches data from `api.caribbean-transfers.com` using a hardcoded or env-based API key. The new requirement mandates using `cancuns-airport-transportation-dashboard.apps.darideveloper.com/api/legacy/autocomplete/` (via `API_BASE`) without an API key. This aligns with a broader strategy to use this dashboard API for other endpoints as well.
