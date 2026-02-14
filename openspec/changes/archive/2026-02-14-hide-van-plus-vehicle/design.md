# Design: Vehicle Filtering Logic

## Overview
The filtering will be implemented at the API adapter layer (`src/lib/transportation/api.ts`). This ensures that neither the React components nor the Zustand store need to handle this specific business rule.

## Architecture
1. **Fetch**: Call the legacy API as usual.
2. **Filter**: Before mapping the API items to the UI model, filter the `data.items` array.
3. **Map**: Continue mapping the remaining items to `VehicleBuyCardProps`.

### Pseudocode
```typescript
const data = await response.json();
const filteredItems = data.items.filter(item => item.id.toString() !== "5");
return filteredItems.map(item => { ... });
```

## Alternatives Considered
- **Filtering in Component**: Possible, but would lead to "empty slots" if pagination or specific layout logic was based on total count returned by the API call.
- **API Change**: Ideally, the backend would not return the vehicle, but since we are consuming a "legacy" API, we handle it in our adapter.

## Security & Performance
- **Performance**: Zero impact. Filtering a small array (usually <10 items) is extremely fast.
- **Security**: N/A. This is a UI-level filter for a specific product offering.
