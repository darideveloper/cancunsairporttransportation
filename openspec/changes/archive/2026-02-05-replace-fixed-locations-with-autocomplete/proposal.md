# Replace Fixed Locations with Autocomplete

## Context
The current booking form uses a static `<select>` specifically for `locationFrom` and `locationTo`, limiting users to "Cancun Airport", "Hotel Zone", etc. The user requires a dynamic autocomplete feature connecting to an external API (`api.caribbean-transfers.com`) directly to allow selecting any location (e.g., hotels, Airbnb).

## Goals
1.  **Direct API Integration**: Connect the frontend directly to `api.caribbean-transfers.com` for location searches, avoiding a local backend proxy as the project is SSG.
2.  **Frontend Component**: Create a React `LocationAutocomplete` component with debounce, loading states, and result selection.
3.  **State Management**: Update `useSearchFormStore` to capture `latitude` and `longitude` alongside the location name.
4.  **Integration**: Replace `LocationSelect` in `BookingForm` with the new autocomplete component.

## Impact
- **Performance**: Direct client-to-API communication reduces latency from an intermediate proxy.
- **UX**: Users can find specific pickup/dropoff points with a dynamic search.
- **State**: The app will now store precise geolocation data required for booking quotes.

## Risks
- **CORS**: Requires the legacy API to support cross-origin requests from the client.
- **API Key Exposure**: The `app-key` header will be visible in the client-side requests.
- **API Reliability**: Dependent on `caribbean-transfers.com` uptime.
