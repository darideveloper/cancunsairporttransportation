# Consolidate Form Components

## Summary
Replace Astro-based form components (`Input.astro`, `Textarea.astro`) with standardized, bug-fixed React versions (`Input.tsx`, `Textarea.tsx`).

## Motivation
1.  **Reduce Duplication**: Maintaining two versions of the same component leads to inconsistencies.
2.  **Fix Bugs**: The React versions currently have a bug where `containerClassName` leaks into the `label`.
3.  **Standardization**: React components offer more flexibility (prop spreading) and are already used in interactive parts of the site.
4.  **Performance**: Static rendering of React components in Astro has zero runtime overhead, making them a perfect replacement for `.astro` components.

## Design
See [specs/input-refactor.md](specs/input-refactor.md) for detailed implementation and migration steps.
