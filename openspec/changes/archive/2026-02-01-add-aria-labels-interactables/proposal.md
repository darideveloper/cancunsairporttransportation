# Change: Add ARIA Labels to All Interactable Elements

## Why
A comprehensive accessibility audit revealed that several interactive components (links, buttons, and form controls) lack proper `aria-label`, `aria-labelledby`, or `title` attributes. This creates barriers for screen reader users and violates WCAG 2.1 AA accessibility guidelines. The project's `project.md` explicitly requires: *"Mandatory `aria-label` for all interactive elements lacking visible text"* and *"Every interactive element MUST have a unique, descriptive `id`"*.

## What Changes

### High Priority (Links & Buttons)
- **ButtonCta.astro**: Add optional `aria-label` prop with intelligent fallback to slot content
- **NavLink.astro**: Add optional `aria-label` and `title` props for navigation accessibility
- **ContactItem.astro**: Add `aria-label` describing the phone call action

### Medium Priority (Cards & Containers)
- **BasicIconCard.astro**: Add `aria-label` to the link container when `href` is provided
- **InfoIconCard.astro**: Add `aria-label` to text links within the card
- **BottomBar.astro**: Add `title` attributes to legal navigation links

### Medium Priority (Forms)
- **BookingForm.tsx**: Add `aria-label` or `aria-labelledby` to the `<form>` element
- **SubmitButton.tsx**: Add optional `aria-label` prop for enhanced screen reader context

### SEO & Optimization Alignment
- All interactive elements will receive unique, descriptive `id` attributes per project conventions
- `title` attributes will include SEO-friendly descriptions where appropriate
- Links with `target="_blank"` will consistently include `rel="noopener noreferrer"`
- Dedicated `global.accessibility` translation namespace introduced for consistent cross-language labels

## Impact
- Affected specs: `accessibility-fixes`, `ui-navigation` (new), `ui-buttons` (new), `ui-forms` (new)
- Affected components:
  - `src/components/atoms/ButtonCta.astro`
  - `src/components/atoms/NavLink.astro`
  - `src/components/atoms/ContactItem.astro`
  - `src/components/molecules/BasicIconCard.astro`
  - `src/components/molecules/InfoIconCard.astro`
  - `src/components/molecules/BottomBar.astro`
  - `src/components/organisms/BookingForm.tsx`
  - `src/components/atoms/form/SubmitButton.tsx`

## Success Criteria
1. All interactive elements pass axe-core accessibility audit
2. Screen readers can announce all links and buttons with meaningful context
3. WCAG 2.1 AA compliance for interactive elements
4. No duplicate or missing `id` attributes on interactive elements
