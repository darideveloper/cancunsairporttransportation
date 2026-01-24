# Design: Component Reorganization

## Principles
We follow the Atomic Design methodology:
- **Atoms**: Functional building blocks that cannot be broken down further (labels, inputs, buttons). They must not import other local components.
- **Molecules**: Groups of atoms bonded together that function as a unit (a search field with a button).
- **Organisms**: Complex components that form a distinct section of the interface (header, footer, booking form).

## Changes

### 1. `MenuBar.astro` -> Organisms
- **Current**: `src/components/molecules/MenuBar.astro`
- **Target**: `src/components/organisms/MenuBar.astro`
- **Reasoning**: It contains a logo (atom), navigation links (molecule), and a CTA button (atom), plus complex mobile menu state and logic.

### 2. `SubmitButton.tsx` -> Atoms
- **Current**: `src/components/molecules/booking/SubmitButton.tsx`
- **Target**: `src/components/atoms/form/SubmitButton.tsx`
- **Reasoning**: It is a plain styled button with no dependencies on other components.

## Import Updates
- `src/components/organisms/Header.astro`: Update `MenuBar` import.
- `src/components/organisms/BookingForm.tsx`: Update `SubmitButton` import.
- `src/components/organisms/MenuBar.astro` (moved): Update `NavLinks` import.
