# Refactor Footer for DRY

## Context
The `Footer.astro` component currently contains repetitive HTML markup for rendering lists of links across multiple columns (Destinations, Services, Information) and a complex structure for the Contact column.

## Goal
Apply DRY (Don't Repeat Yourself) principles by extracting the link list rendering logic into a reusable component and moving the complex Contact logic into its own component.

## Approach
- Create `src/components/molecules/FooterLinkList.astro` for simple link lists.
- Create `src/components/molecules/FooterContact.astro` for the complex contact section.
- Update `Footer.astro` to consume these new components.
