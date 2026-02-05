# Tasks: Replace Fixed Locations with Autocomplete

- [x] **Environment**: Configure Legacy API Credentials <!-- id: 5 -->
  - File: `.env`
  - Action: Add `PUBLIC_LEGACY_API_KEY=bb65be85-82f9-492f-bbd6-4a698509106a`.
  - Note: `PUBLIC_LEGACY_API_URL` is already present.
- [x] **State**: Update Search Store <!-- id: 1 -->
  - File: `src/store/search-form.tsx`
  - Change: Update `locationFrom` and `locationTo` to store object `{ name: string, lat: number, lng: number }` or add separate fields.
  - Recommended: Add `locationFromGeo`, `locationToGeo` to minimize breaking changes, or refactor to `Location` type. By legacy guide, we need lat/lng.
- [x] **UI**: Create LocationAutocomplete Component <!-- id: 2 -->
  - File: `src/components/atoms/form/LocationAutocomplete.tsx`
  - Features: Input field, Debounce implementation (500ms), Fetch directly from legacy API, Render list, Handle selection.
  - Integration: Use `PUBLIC_LEGACY_API_URL` and `PUBLIC_LEGACY_API_KEY` from environment.
  - Styling: absolute positioned dropdown.
- [x] **Integration**: Update BookingForm <!-- id: 3 -->
  - File: `src/components/organisms/BookingForm.tsx`
  - Action: Replace `LocationSelect` with `LocationAutocomplete`.
  - Wiring: Connect new props/state from Store.
- [x] **Cleanup**: Remove unused LocationSelect (optional/later) <!-- id: 4 -->
