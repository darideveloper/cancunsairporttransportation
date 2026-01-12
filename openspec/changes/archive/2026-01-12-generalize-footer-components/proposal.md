# Generalize Footer Components for Reusability

## Context
The `FooterContact.astro` and `FooterLinkList.astro` components were recently extracted from the Footer. However, they are currently tightly coupled to the Footer's layout and naming conventions (e.g., specific grid spans, "Footer" prefix). The user wants to use these components in other parts of the application (e.g., Contact page, Sidebars).

## Goal
Refactor the footer sub-components to be generic, reusable molecules that can be used in any context, not just the footer.

## Approach
1.  **Rename Components**:
    *   `FooterLinkList.astro` -> `LinkList.astro`
    *   `FooterContact.astro` -> `ContactCard.astro`
2.  **Decouple Layout**:
    *   Remove hardcoded grid classes (e.g., `lg:col-span-2`) from the components.
    *   The parent component (Footer) will be responsible for placing these components within its grid layout.
3.  **Update Consumers**:
    *   Update `Footer.astro` to import the new names and wrap them in the necessary layout containers.
