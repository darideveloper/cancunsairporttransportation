# Proposal: Extract CheckListItem Atom Component

## Change ID
`extract-checklist-item-atom`

## Status
Proposed

## Context
Currently, the `Includes.astro` organism component contains inline markup for rendering list items with checkmark icons (lines 61-69). This pattern creates a styled list item with:
- A white rounded background (`rounded-2xl bg-white px-4 py-2`)
- A blue checkmark icon from `react-icons/fa` (FaCheck)
- Text content passed as a prop

This markup is tightly coupled within the `Includes` component and cannot be reused elsewhere in the application. Extracting this into a dedicated atom component will:
1. Follow the atomic design pattern already established in the project
2. Enable reuse across other components that need checkmark list items
3. Improve maintainability by centralizing the styling and structure
4. Make the `Includes` component cleaner and more focused

## Objective
Extract the checkmark list item markup (lines 61-69 of `Includes.astro`) into a new atom component called `CheckListItem.astro`, then update the `Includes` component and any future components to use this new atom.

## Proposed Solution

### 1. Create New Atom Component
Create `src/components/atoms/CheckListItem.astro` with:
- **Props**: Accept a `text` prop (string) for the item content
- **Structure**: Encapsulate the `<li>` element with checkmark icon and text
- **Styling**: Maintain existing Tailwind classes (`rounded-2xl bg-white px-4 py-2`, etc.)
- **Icon**: Import and render `FaCheck` from `react-icons/fa` with existing classes
- **Accessibility**: Keep `aria-hidden="true"` on the icon

### 2. Update Includes Component
Refactor `src/components/organisms/Includes.astro`:
- Import the new `CheckListItem` component
- Replace the inline `<li>` markup (lines 61-69) with `<CheckListItem text={item} />`
- Remove the direct `FaCheck` import (no longer needed in this file)
- Maintain all existing functionality and styling

### 3. Verify All Usage Points
The `Includes` component is currently used in 4 service pages:
- `src/components/pages/services/Private.astro`
- `src/components/pages/services/Taxi.astro`
- `src/components/pages/services/Luxury.astro`
- `src/components/pages/services/Group.astro`

These pages will automatically benefit from the new atom component through their existing `<Includes>` usage. No changes needed to these files.

## Impact Analysis

### Files to Create
- `src/components/atoms/CheckListItem.astro` (new atom component)

### Files to Modify
- `src/components/organisms/Includes.astro` (refactor to use new atom)

### Files Indirectly Affected (no changes needed)
- `src/components/pages/services/Private.astro`
- `src/components/pages/services/Taxi.astro`
- `src/components/pages/services/Luxury.astro`
- `src/components/pages/services/Group.astro`

### Breaking Changes
None. This is a pure refactoring that maintains identical visual output and behavior.

## Success Criteria
1. New `CheckListItem.astro` atom component exists in `src/components/atoms/`
2. Component accepts a `text` prop and renders the checkmark list item
3. `Includes.astro` uses the new atom component instead of inline markup
4. All 4 service pages render identically before and after the change
5. No console errors or build warnings
6. Component follows project conventions (Tailwind-only styling, semantic HTML, accessibility)

## Future Opportunities
Once extracted, the `CheckListItem` atom can be:
- Reused in other sections that need checkmark lists (e.g., feature lists, benefit sections)
- Extended with additional props (e.g., custom icon, color variants, sizes)
- Documented in the component library for team reference
