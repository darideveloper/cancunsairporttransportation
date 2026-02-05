# Design: Google Maps Route Map Integration

## Overview
The route map will be a React component that fetches the Directions service from Google Maps and renders it on a map instance. It will reactively update if the coordinates in the store change.

## Component Architecture
- **Component**: `src/components/molecules/booking/RouteMap.tsx`
- **Interactivity**: React 19 compatible.
- **State**: Subscribes to `locationFromData` and `locationToData` from `useSearchFormStore`.

## Implementation Details

### 1. Script Loading
We will use the `js-api-loader` pattern or a custom React hook to ensure the Google Maps script is loaded only once and is available before the map initializes.

### 2. Map Initialization
The component will use a `useRef` for the map container. Once the script is loaded and the container is mounted, it will:
- Initialize `google.maps.Map`.
- Initialize `google.maps.DirectionsService`.
- Initialize `google.maps.DirectionsRenderer`.

### 3. Route Calculation
Whenever `locationFromData` or `locationToData` changes, the component will trigger a directions request.

### 4. Layout
The map will be placed in a container with fixed dimensions (e.g., `100% width`, `250px height`) and styled with `rounded-xl` and `shadow-md` to match the project's premium aesthetic. It will be positioned at the top left of the results content area.

## Key Refinements from Legacy Implementation
- **Responsive Height**: Instead of a hardcoded pixel height, we use Tailwind classes to ensure it looks good on mobile.
- **Dynamic Centering**: The map will automatically fit the bounds of the calculated route.
- **Error Handling**: Friendly UI message if coordinates are missing or directions cannot be found.
