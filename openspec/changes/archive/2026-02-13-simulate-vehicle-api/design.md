# Simulate Vehicle API Integration

This proposal outlines the plan to move the hardcoded vehicle data from `src/components/pages/store/Results.astro` to a simulated client-side fetch, introducing skeleton loading and error handling.

## Problem
Currently, vehicle data on the Results page is hardcoded in the Astro component (SSG).
The user wants to simulate dynamic fetching from an external API, complete with loading states (skeletons) and error handling.

## Solution

### 1. Simulated API Layer
- **Location**: `src/lib/transportation/api.ts`
- **Function**: `getVehicles(lang: string): Promise<VehicleBuyCardProps[]>`
- **Behavior**:
  - Simulates a network delay (e.g., 1000ms).
  - Returns the static data currently found in `Results.astro`.
  - Can throw errors (simulated).

### 2. Client-Side Implementation
- **Component**: Enhance `src/components/organisms/VehicleBuyCards.tsx` (Vehicle List).
  - **Props**: Add optional `initialVehicles` and required `lang`.
  - **State**: `loading`, `error`, `vehicles`.
  - **Logic**:
    - On mount (`useEffect`), fetch data if not provided via props.
    - Render a Skeleton UI while loading.
    - Render an Error UI if fetching fails (with retry or message).
  - **Translations**: Add keys for loading, error, empty states.

### 3. Integration Point
- **Page**: `src/components/pages/store/Results.astro`
  - Remove hardcoded `vehicles` array.
  - Pass `lang` to `VehicleBuyCards` component.
  - Ensure `client:load` directive is used correctly.

## Architecture Decisions
- **Client-Side vs. Server-Side**:
  - We choose client-side simulated fetching to support the explicit requirement for "skeleton loading" and error screens without needing complex Astro streaming/Suspense features (which might be experimental/complex).
  - This mimics typical SPA behavior for real-time/dynamic content effectively.

## Constraints & Risks
- **SEO**: Dynamic content might be less visible to crawlers than SSG content, but for search results (often uncrawled or requiring fresh data), this is acceptable. The page shell remains static.
- **Performance**: Introduces a client-side fetch delay. Skeleton UI mitigates perceived latency.
