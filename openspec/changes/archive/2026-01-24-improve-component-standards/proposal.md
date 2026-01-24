# Change: Improve Component Standards (A11y & DRY)

## Why
A recent audit revealed inconsistencies in accessibility (missing ARIA attributes, focus traps) and code patterns (hardcoded lists vs reusable components, duplicate logic) across core components. To maintain a "Premium" and production-ready codebase, we must enforce strict standards now.

## What Changes
- **Accessibility**:
    - Enforce `aria-hidden="true"` on all decorative icons (React Icons).
    - Implement a focus trap for the Mobile Menu (`MenuBar.astro`).
    - Verify and fix color contrast for placeholder texts (`Input.astro`).
- **DRY (Don't Repeat Yourself)**:
    - Refactor `Contact.astro` to use a standardized `ContactItemList` or reuse `ContactItem` atoms instead of hardcoded markup.
    - Fix potentially duplicate ID generation in `InfoIconCard` and `BasicIconCard`.
- **Code Quality**:
    - Remove `!important` overrides in CSS classes (`BasicImageCard`, `MenuBar`).
    - Tighten prop types (remove `any` usage in `Input` and Cards).

## Impact
- **Specs**: `accessibility-fixes`, `component-library`
- **Files**:
    - `src/components/pages/general/Contact.astro`
    - `src/components/organisms/MenuBar.astro`
    - `src/components/atoms/form/Input.astro`
    - `src/components/molecules/*IconCard.astro`
