# Tasks: Add Register Page Redirect

## Task Breakdown

- [x] Update VehicleBuyCards Component Navigation Logic
**File:** `src/components/organisms/VehicleBuyCards.tsx`

**Objective:** Modify the `handleVehicleSelect` function to navigate to the register page after storing the selected vehicle.

**Steps:**
1. Locate the `handleVehicleSelect` function (currently at lines 59-71)
2. After the `setSelectedVehicle` call, add language detection logic
3. Determine the appropriate register URL based on the current language
4. Navigate to the register page using `window.location.assign()`

**Implementation Details:**

```typescript
const handleVehicleSelect = (vehicle: VehicleBuyCardProps) => {
  // Store selected vehicle in Zustand (existing code)
  setSelectedVehicle({
    token: vehicle.token,
    name: vehicle.vehicleName,
    image: vehicle.vehicleImage,
    maxPassengers: vehicle.maxPassengers,
    maxLuggage: vehicle.maxLuggage,
    price: vehicle.price,
    currency: vehicle.currencyCode,
    type: vehicle.vehicleType,
  });
  
  // NEW: Determine locale-based redirect URL
  const isSpanish = window.location.pathname.startsWith("/es");
  const registerUrl = isSpanish ? "/es/registro" : "/register";
  
  // NEW: Navigate to register page
  window.location.assign(registerUrl);
};
```

**Validation:**
- [x] Code compiles without TypeScript errors
- [x] No ESLint warnings
- [x] Function maintains existing Zustand store behavior
- [x] Navigation logic matches pattern in `BookingForm.tsx`

**Estimated Time:** 10 minutes

---

### Task 2: Manual Testing - English Flow
**Objective:** Verify the redirect works correctly for English users.

**Steps:**
1. Start the development server (`npm run dev`)
2. Navigate to `/results` in the browser
3. Wait for vehicle cards to load
4. Click "Book now" on any vehicle card
5. Verify redirect to `/register`
6. Open browser DevTools → Application → Local Storage
7. Verify `search-form-storage` contains the selected vehicle data

**Expected Results:**
- ✅ Redirects to `/register`
- ✅ URL is `/register` (not `/es/registro`)
- ✅ Selected vehicle data is stored in localStorage
- ✅ No console errors

**Estimated Time:** 5 minutes

---

### Task 3: Manual Testing - Spanish Flow
**Objective:** Verify the redirect works correctly for Spanish users.

**Steps:**
1. Navigate to `/es/resultados` in the browser
2. Wait for vehicle cards to load
3. Click "Book now" on any vehicle card
4. Verify redirect to `/es/registro`
5. Open browser DevTools → Application → Local Storage
6. Verify `search-form-storage` contains the selected vehicle data

**Expected Results:**
- ✅ Redirects to `/es/registro`
- ✅ URL is `/es/registro` (not `/register`)
- ✅ Selected vehicle data is stored in localStorage
- ✅ No console errors

**Estimated Time:** 5 minutes

---

### Task 4: Cross-Browser Testing
**Objective:** Ensure navigation works consistently across browsers.

**Steps:**
1. Test in Chrome/Chromium
2. Test in Firefox
3. Test in Safari (if available)
4. For each browser:
   - Test English flow (`/results` → `/register`)
   - Test Spanish flow (`/es/resultados` → `/es/registro`)
   - Verify localStorage persistence

**Expected Results:**
- ✅ Navigation works in all tested browsers
- ✅ No browser-specific errors
- ✅ State persists correctly in all browsers

**Estimated Time:** 10 minutes

---

### Task 5: Edge Case Testing
**Objective:** Verify behavior in edge cases and error scenarios.

**Test Cases:**

1. **Back Button Navigation:**
   - Click "Book now" to navigate to `/register`
   - Click browser back button
   - Verify: Returns to `/results` with vehicle cards still displayed
   - Verify: Selected vehicle data still in localStorage

2. **Multiple Selections:**
   - Click "Book now" on Vehicle A
   - Use back button to return to `/results`
   - Click "Book now" on Vehicle B
   - Verify: Vehicle B data replaces Vehicle A in localStorage

3. **Direct URL Access:**
   - Navigate directly to `/register` without selecting a vehicle
   - Verify: Page loads (even if selectedVehicle is null)
   - Note: This tests that the register page handles missing data gracefully

**Expected Results:**
- ✅ Back button works correctly
- ✅ Multiple selections update the store properly
- ✅ Direct access doesn't break the application

**Estimated Time:** 10 minutes

---

### Task 6: Code Review Checklist
**Objective:** Ensure code quality and consistency.

**Review Points:**
- [x] Code follows existing patterns in `BookingForm.tsx`
- [x] No hardcoded strings (except URL paths, which match the pattern)
- [x] TypeScript types are correct
- [x] No new dependencies added
- [x] Comments removed or updated (remove "Future step" comment)
- [x] Code is readable and maintainable
- [x] No console.log statements left in code

**Estimated Time:** 5 minutes

---

### Task 7: Refactor CheckListItem for Flexibility
**File:** `src/components/atoms/CheckListItem.tsx`

**Objective:** Add `as` and `unstyled` props to support use cases outside of standard lists.

**Status:** [x] COMPLETED

---

### Task 8: Refactor SelectedVehicleCard with Validation and DRY
**File:** `src/components/organisms/SelectedVehicleCard.tsx`

**Objective:** Add data validation and refactor icons/labels to use `CheckListItem`.

**Status:** [x] COMPLETED

---

### Task 9: Refactor VehicleBuyCard for DRY
**File:** `src/components/molecules/VehicleBuyCard.tsx`

**Objective:** Use `CheckListItem` for capacity details to improve consistency.

**Status:** [x] COMPLETED

---

## Total Estimated Time
**1 hour 30 minutes** (including implementation, testing, and refactoring)

## Dependencies Between Tasks
- Task 2, 3, 4, 5 depend on Task 1 being completed
- Tasks 2-5 can be run in parallel or any order after Task 1

## Rollback Plan
If issues are discovered:
1. Revert changes to `VehicleBuyCards.tsx`
2. The `handleVehicleSelect` function will return to storing data without navigation
3. No database or API changes, so rollback is safe and simple

## Success Metrics
- All manual tests pass
- No console errors in any browser
- Navigation works correctly for both languages
- Selected vehicle data persists correctly
