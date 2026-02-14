# Add Register Page Redirect on Book Now

## Summary
Enable the "Book now" button on the results page to redirect users to the register page after they select a vehicle. This change implements proper navigation using the existing routing system to ensure language-aware redirects.

## Why
This change is critical for completing the booking flow and improving user experience:

1. **Complete the Booking Funnel**: Currently, users can search for transportation and view available vehicles, but clicking "Book now" leads nowhere. This creates a dead-end in the user journey and prevents bookings from being completed.

2. **Reduce User Friction**: Without automatic navigation, users are left confused after selecting a vehicle. They don't know what to do next, leading to abandoned bookings and lost revenue.

3. **Enable Revenue Generation**: The register page is where users provide their flight details and complete their booking. Without this navigation, the entire booking system is non-functional.

4. **Match User Expectations**: When users click a button labeled "Book now", they expect to be taken to the next step in the booking process. The current behavior violates this expectation and creates a poor user experience.

5. **Support Multilingual Users**: The implementation ensures that Spanish-speaking users are directed to the Spanish register page, maintaining language consistency throughout the booking flow.

**Business Impact:**
- **Conversion Rate**: Enables users to complete bookings (currently 0% conversion from results page)
- **User Satisfaction**: Reduces confusion and frustration in the booking process
- **Revenue**: Unlocks the ability to generate revenue through completed bookings

## Problem Statement
Currently, when users click the "Book now" button on a vehicle card in the results page (`/results` or `/es/resultados`), the button only stores the selected vehicle in the Zustand store but does not navigate to the next step in the booking flow. Users need to be redirected to the register page to continue with their booking.

## Current Behavior
1. User searches for transportation options and lands on `/results` (or `/es/resultados`)
2. System displays available vehicles via `VehicleBuyCards` component
3. User clicks "Book now" button on a `VehicleBuyCard`
4. The `handleVehicleSelect` function in `VehicleBuyCards.tsx` (line 59-71):
   - Stores vehicle data in Zustand store via `setSelectedVehicle`
   - Includes a comment: `// Future step: Navigate to results page or next step`
   - **Does NOT navigate anywhere**

## Proposed Behavior
1. User searches for transportation options and lands on `/results` (or `/es/resultados`)
2. System displays available vehicles via `VehicleBuyCards` component
3. User clicks "Book now" button on a `VehicleBuyCard`
4. The `handleVehicleSelect` function:
   - Stores vehicle data in Zustand store via `setSelectedVehicle`
   - **Determines current language from URL pathname**
   - **Navigates to the appropriate register page:**
     - English: `/register`
     - Spanish: `/es/registro`

## Technical Analysis

### Current Routing System
The project uses a centralized routing system defined in `src/lib/i18n/routes.ts`:

```typescript
export const routes = {
  // ... other routes
  results: {
    en: "results",
    es: "es/resultados",
  },
  register: {
    en: "register",
    es: "es/registro",
  },
} as const;
```

### Navigation Pattern Analysis
The existing `BookingForm.tsx` component (lines 61-70) demonstrates the current navigation pattern:

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!isValid) return;

  // Determine locale-based redirect URL
  const isSpanish = window.location.pathname.startsWith("/es");
  const resultsUrl = isSpanish ? "/es/resultados" : "/results";

  window.location.assign(resultsUrl);
};
```

**Key observations:**
- Uses `window.location.pathname.startsWith("/es")` to detect language
- Uses hardcoded paths instead of the `getLocalizedPath` utility
- Uses `window.location.assign()` for navigation

### Available Utilities
The `src/lib/i18n/utils.ts` file provides:

```typescript
export function getLocalizedPath(pageKey: string, lang: keyof typeof ui) {
  const path = routes[pageKey as keyof typeof routes]?.[lang];
  return path === undefined ? '/' : `/${path}`;
}

export function getLangFromUrl(url: URL) {
  const [, firstSegment] = url.pathname.split('/');
  if (firstSegment === 'es') return 'es';
  return 'en';
}
```

**Note:** `getLangFromUrl` requires a `URL` object, not available in client-side React components without creating one from `window.location`.

## Proposed Solution

### Part 1: Navigation Logic (Core Change)

Follow the navigation pattern used in `BookingForm.tsx` for consistency.

**File:** `src/components/organisms/VehicleBuyCards.tsx`

Update the `handleVehicleSelect` function to include locale-aware redirection.

### Part 2: DRY Refactoring & Component Optimization (Enhancement)

To improve code quality and reusability, we will refactor the `SelectedVehicleCard` and `VehicleBuyCard` components to use a shared atom for icon+text pairs, leveraging the existing `CheckListItem` component while making it more flexible.

#### 1. Enhance `CheckListItem.tsx`
Update the component to support an "unstyled" or "compact" mode to be used outside of standard lists.

**File:** `src/components/atoms/CheckListItem.tsx`

```tsx
interface CheckListItemProps {
  text: string;
  className?: string;
  Icon?: ElementType;
  iconColor?: string;
  as?: 'li' | 'div';
  unstyled?: boolean;
}

export default function CheckListItem({
  text,
  className,
  Icon = FaCheck,
  iconColor = "text-accent",
  as: Component = 'li',
  unstyled = false,
}: CheckListItemProps) {
  return (
    <Component className={clsx(
      !unstyled && "rounded-2xl bg-white px-4 py-2", 
      className
    )}>
      <span className="inline-block text-left">
        <Icon
          aria-hidden="true"
          className={clsx("mr-2 inline-block", iconColor)}
        />
        {text}
      </span>
    </Component>
  );
}
```

#### 2. Refactor `SelectedVehicleCard.tsx`
- Implement validation to prevent rendering with incomplete data.
- Replace repeated UI blocks with `CheckListItem`.

**File:** `src/components/organisms/SelectedVehicleCard.tsx`

```tsx
// ... validation
if (!selectedVehicle || !locationFrom || !locationTo || passengers < 1) return null;

// ... in JSX
<ul className="flex flex-wrap gap-4 text-sm text-gray-500">
  <CheckListItem
    as="div"
    unstyled
    Icon={FaUser}
    iconColor="text-gray-400"
    text={t("global.booking.summary.passengers", { count: passengers.toString() })}
  />
  {/* ... other items */}
</ul>
```

## Files to Modify
1. **`src/components/atoms/CheckListItem.tsx`**: Add flexibility props.
2. **`src/components/organisms/VehicleBuyCards.tsx`**: Add navigation logic.
3. **`src/components/organisms/SelectedVehicleCard.tsx`**: Add validation and refactor to use `CheckListItem`.
4. **`src/components/molecules/VehicleBuyCard.tsx`**: Refactor to use `CheckListItem` for capacity details.

## Dependencies
- No new dependencies.
- Leverages existing `CheckListItem` atom.

## Testing Considerations
1. **Refactor Verification**: Ensure `SelectedVehicleCard` and `VehicleBuyCard` look identical but use cleaner code.
2. **Validation**: Test `SelectedVehicleCard` with missing store data to ensure it returns `null` safely.
3. **Navigation**: (Existing tests for language-aware redirects).

## Success Criteria
- [ ] Navigation works as expected.
- [ ] `SelectedVehicleCard` is refactored and uses `CheckListItem`.
- [ ] `VehicleBuyCard` is refactored and uses `CheckListItem`.
- [ ] Code duplication is reduced.
- [ ] No regression in list styling elsewhere in the site.
