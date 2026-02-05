# Design: Autocomplete Architecture

## Direct API Integration Strategy
Since the project is SSG (Static Site Generation), we will call the legacy API directly from the browser using standard `fetch`. 
- **Endpoint**: `https://api.caribbean-transfers.com/api/v1/autocomplete-affiliates`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`
  - `app-key: bb65be85-82f9-492f-bbd6-4a698509106a`
- **Request Body**: `{ "keyword": string }`
- **Environment**: Ensure `PUBLIC_LEGACY_API_URL` and `PUBLIC_LEGACY_API_KEY` are available in `.env` for use in the frontend.

## Frontend Component (`LocationAutocomplete`)
A controlled React component.
- **Props**:
  - `label`: string
  - `id`: string
  - `onSelect`: `(item: { name: string, type: string, geo: { lat: string, lng: string }, address?: string }) => void`
  - `initialValue`: string
- **Internal State**:
  - `query`: string (input value)
  - `results`: array (API items)
  - `isLoading`: boolean
  - `isOpen`: boolean (to show/hide dropdown)

## Store Update (`search-form.tsx`)
Currently stores strings. We need to store the full location object to handle `lat`/`lng`.
Instead of breaking `locationFrom` (string), we will add:
- `locationFromData: LocationData | null`
- `locationToData: LocationData | null`

Where `LocationData` is:
```typescript
{
  name: string;
  lat: number;
  lng: number;
}
```

## UI/UX Flow
1. User types in "Cancun".
2. Input debounces (500ms).
3. Request sent to the legacy API URL with JSON body `{ keyword: "Cancun" }` and `app-key` header.
4. Response received directly from the external API.
5. Results displayed in a dropdown.
6. User clicks result.
7. Input updates to `item.name`.
8. Store updates `locationFrom` (name) and `locationFromData` (lat/lng).
