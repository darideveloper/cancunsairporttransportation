# Design: Add Register Page Redirect

## Overview
This design document outlines the architectural approach for implementing navigation from the results page to the register page when users select a vehicle.

## Design Goals
1. **Consistency**: Follow existing navigation patterns in the codebase
2. **Simplicity**: Minimize changes and avoid over-engineering
3. **Language Awareness**: Respect the user's language preference
4. **State Preservation**: Ensure selected vehicle data persists across navigation

## Architecture Analysis

### Current Navigation Patterns

The codebase currently uses two different approaches for navigation:

#### Pattern 1: Direct window.location (Used in BookingForm)
```typescript
// src/components/organisms/BookingForm.tsx (lines 61-70)
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!isValid) return;

  const isSpanish = window.location.pathname.startsWith("/es");
  const resultsUrl = isSpanish ? "/es/resultados" : "/results";
  window.location.assign(resultsUrl);
};
```

**Characteristics:**
- Simple and direct
- Language detection via pathname inspection
- Hardcoded URL paths
- Full page reload

#### Pattern 2: Utility Functions (Available but not used for client-side navigation)
```typescript
// src/lib/i18n/utils.ts
export function getLocalizedPath(pageKey: string, lang: keyof typeof ui) {
  const path = routes[pageKey as keyof typeof routes]?.[lang];
  return path === undefined ? '/' : `/${path}`;
}
```

**Characteristics:**
- Type-safe
- Centralized route configuration
- Requires language parameter
- Primarily used for SSR/SSG link generation

### Why Pattern 1 is Recommended

For this change, we recommend following **Pattern 1** for the following reasons:

1. **Consistency**: The `BookingForm` component already uses this pattern for navigating to the results page. Using the same pattern for results → register navigation maintains consistency.

2. **Simplicity**: The implementation is straightforward and doesn't require creating new utilities or refactoring existing code.

3. **Proven**: This pattern is already in production and working correctly.

4. **Minimal Scope**: Keeps the change focused on the specific requirement without introducing broader architectural changes.

## Component Interaction Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                         Results Page                             │
│                    (/results or /es/resultados)                  │
└─────────────────────────────────────────────────────────────────┘
                                │
                                │ User clicks "Book now"
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                      VehicleBuyCards.tsx                         │
│                   handleVehicleSelect()                          │
│                                                                   │
│  1. setSelectedVehicle(vehicleData)  ──────────────────────┐    │
│                                                              │    │
│  2. Detect language:                                        │    │
│     isSpanish = pathname.startsWith("/es")                  │    │
│                                                              │    │
│  3. Determine URL:                                          │    │
│     registerUrl = isSpanish                                 │    │
│       ? "/es/registro"                                      │    │
│       : "/register"                                         │    │
│                                                              │    │
│  4. window.location.assign(registerUrl)                     │    │
└──────────────────────────────────────────────────────────────────┘
                                │                              │
                                │                              │
                                │                              ▼
                                │                    ┌──────────────────┐
                                │                    │  Zustand Store   │
                                │                    │  (localStorage)  │
                                │                    │                  │
                                │                    │  selectedVehicle │
                                │                    │  - token         │
                                │                    │  - name          │
                                │                    │  - image         │
                                │                    │  - maxPassengers │
                                │                    │  - maxLuggage    │
                                │                    │  - price         │
                                │                    │  - currency      │
                                │                    │  - type          │
                                │                    └──────────────────┘
                                │                              │
                                │ Full page reload             │
                                ▼                              │
┌─────────────────────────────────────────────────────────────────┐
│                        Register Page                             │
│                   (/register or /es/registro)                    │
│                                                                   │
│  Reads selectedVehicle from Zustand ◄─────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

## State Management

### Zustand Store Structure
The selected vehicle data is stored in the `search-form-storage` localStorage key with the following structure:

```typescript
interface SelectedVehicle {
  token: string;           // Unique identifier for the vehicle/rate
  name: string;            // Display name (e.g., "Luxury Suburban")
  image: string;           // Vehicle image URL
  maxPassengers: number;   // Maximum passenger capacity
  maxLuggage: number;      // Maximum luggage capacity
  price: number;           // Price in the selected currency
  currency: string;        // Currency code (USD or MXN)
  type?: string;           // Vehicle type (optional)
}
```

### Persistence Strategy
- **Storage**: localStorage via Zustand persist middleware
- **Key**: `search-form-storage`
- **Timing**: Data is written synchronously before navigation
- **Hydration**: Zustand automatically rehydrates on page load

## Language Detection Strategy

### Current Implementation
```typescript
const isSpanish = window.location.pathname.startsWith("/es");
```

### Why This Works
1. **English URLs**: Never start with `/es` (e.g., `/results`, `/register`)
2. **Spanish URLs**: Always start with `/es` (e.g., `/es/resultados`, `/es/registro`)
3. **Root Path**: `/` is English, `/es` or `/es/` is Spanish

### Edge Cases Handled
- `/results` → English ✅
- `/results/` → English ✅
- `/es/resultados` → Spanish ✅
- `/es/resultados/` → Spanish ✅
- `/es` → Spanish ✅

## Alternative Approaches Considered

### Alternative 1: Create Navigation Utility
**Approach:**
```typescript
// src/lib/navigation/utils.ts
export function navigateToPage(pageKey: keyof typeof routes) {
  const isSpanish = window.location.pathname.startsWith("/es");
  const lang = isSpanish ? 'es' : 'en';
  const path = routes[pageKey][lang];
  const url = path === '' ? '/' : `/${path}`;
  window.location.assign(url);
}
```

**Pros:**
- DRY principle
- Type-safe
- Reusable
- Centralized logic

**Cons:**
- Requires creating new file
- Should refactor existing `BookingForm` for consistency
- Broader scope than current requirement
- Increases complexity for a simple change

**Decision:** Deferred to future refactoring

### Alternative 2: Use Astro View Transitions
**Approach:**
Use Astro's View Transitions API for smoother navigation

**Pros:**
- Smoother UX
- Preserves scroll position
- Animated transitions

**Cons:**
- Requires Astro configuration changes
- May complicate state management
- Overkill for current requirement

**Decision:** Not applicable for this change

### Alternative 3: Client-Side Routing
**Approach:**
Implement SPA-style routing with React Router or similar

**Pros:**
- No page reload
- Faster perceived performance

**Cons:**
- Major architectural change
- Conflicts with Astro's SSG approach
- Unnecessary complexity

**Decision:** Not aligned with project architecture

## Testing Strategy

### Unit Testing
Not applicable - this is a navigation change that requires integration testing

### Integration Testing
Manual testing required for:
1. Language detection accuracy
2. State persistence
3. URL correctness
4. Cross-browser compatibility

### Test Matrix

| Test Case | Starting URL | Expected Redirect | State Persisted |
|-----------|-------------|-------------------|-----------------|
| EN → EN | `/results` | `/register` | ✅ |
| ES → ES | `/es/resultados` | `/es/registro` | ✅ |
| Back button | `/register` → back | `/results` | ✅ |
| Multiple selections | Select A, back, select B | `/register` | B only ✅ |

## Performance Considerations

### Impact Analysis
- **Page Load**: Full page reload (consistent with existing pattern)
- **State Write**: Synchronous localStorage write (~1-2ms)
- **Navigation**: Standard browser navigation (~100-300ms)

### Optimization Opportunities
None required for this change. Future optimizations could include:
- Implementing View Transitions for smoother UX
- Preloading register page assets
- Optimistic UI updates

## Security Considerations

### Data Validation
- Vehicle data is already validated by the API
- No user input in navigation logic
- URLs are hardcoded (no injection risk)

### Privacy
- Data stored in localStorage (client-side only)
- No sensitive information in vehicle data
- Token is server-generated and opaque

## Rollback Plan

### If Issues Arise
1. Revert the single function change in `VehicleBuyCards.tsx`
2. No database changes to rollback
3. No API changes to rollback
4. State management remains unchanged

### Monitoring
- Check browser console for errors
- Monitor user feedback for navigation issues
- Verify analytics show expected flow completion

## Future Enhancements

### Short-term (Next Sprint)
- Add loading indicator during navigation
- Implement error handling for navigation failures

### Medium-term (Next Quarter)
- Refactor all navigation to use centralized utility
- Implement View Transitions for smoother UX
- Add analytics tracking for conversion funnel

### Long-term (Future)
- Consider SPA architecture if requirements change
- Implement progressive enhancement for offline support

## Conclusion

This design follows the principle of **minimal viable change** while maintaining consistency with existing patterns. The implementation is straightforward, testable, and aligns with the project's current architecture.
