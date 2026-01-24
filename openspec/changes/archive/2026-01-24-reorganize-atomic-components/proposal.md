# Proposal: Reorganize Atomic Components

Reorganize components in `src/components` to strictly follow Atomic Design principles, ensuring proper classification of Atoms and Organisms.

## Problem
Currently, some components are misclassified:
- `MenuBar.astro` is in `molecules` but contains complex logic and sub-components (Organism).
- `SubmitButton.tsx` is in `molecules/booking` but is a basic building block (Atom).

## Proposed Solution
- Move `MenuBar.astro` to `organisms`.
- Move `SubmitButton.tsx` to `atoms/form`.
- Update all internal and external imports to reflect the new locations.

## Goals
- Align the codebase with Atomic Design principles.
- Improve component discoverability and maintainability.

## Impact
- **Non-breaking**: No functional changes, only file moves and import updates.
- **Improved DX**: Clearer boundaries between component types.
