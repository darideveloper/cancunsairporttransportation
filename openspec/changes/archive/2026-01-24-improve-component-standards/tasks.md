## 1. Setup & Utilities
- [x] 1.1 Create `src/lib/utils/ids.ts` with `generateId` function.
- [ ] 1.2 Add tests for ID generation (optional but recommended).

## 2. Accessibility Fixes
- [x] 2.1 Update `MenuBar.astro` script to trap focus when mobile menu is open.
- [x] 2.2 Update `MenuBar.astro` to remove `!important` classes (`hidden!`, `text-black!`).
- [x] 2.3 Audit and update `Input.astro`:
    - Fix placeholder contrast (use `placeholder:text-gray-dark` or similar).
    - Add `aria-hidden="true"` to input icons.
    - Fix `type` prop to use `HTMLInputTypeAttribute`.

## 3. Molecule Refactoring
- [x] 3.1 Update `InfoIconCard.astro` and `BasicIconCard.astro` to use `generateId` utility.
- [x] 3.2 Update `BasicImageCard.astro` to remove `text-blue!` class.
- [x] 3.3 Create/Update `ContactInfoList.astro` (or similar molecule) to encapsulate the list logic from `Contact.astro`.

## 4. Contact Page Refactor
- [x] 4.1 Refactor `Contact.astro` to replace the manual `<ul>` of contact details with the new reusable molecule/list.
- [x] 4.2 Verify all icons on `Contact.astro` have `aria-hidden="true"`.

## 5. Verification
- [x] 5.1 Run `npm run build` to ensure type safety (no `any` regressions).
- [x] 5.2 Validate accessibility using a checking tool (or manual verification of focus trap).
