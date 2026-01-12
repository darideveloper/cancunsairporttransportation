# Standardize Footer List Component

## Context
The project currently has two separate components for displaying lists in the footer: `LinkList` (for navigation links) and `ContactCard` (for contact info with labels). Use cases overlap, and the user has requested to standardize them into a single component based on `LinkList`.

## Goal
Unify `LinkList` and `ContactCard` into a single, flexible `LinkList` component that supports:
- An optional section title.
- A list of items, where each item can have:
  - Text content.
  - An optional `href` (rendering as a link).
  - An optional `title` (label) for the item (rendering above the text, similar to the contact card style).

## Approach
1.  **Enhance `LinkList.astro`**:
    - Update props to accept a more generic `items` array instead of just `links`.
    - Support optional `title` per item.
    - Logic to render different styles/structures based on the presence of `title` or `href`.
2.  **Refactor `Footer.astro`**:
    - Replace usage of `ContactCard` with the new `LinkList`.
    - Update existing `LinkList` usages to match the new prop structure if changed (or keep backward compatibility if possible, but strict standardization suggests updating).
3.  **Remove `ContactCard.astro`**:
    - Delete the obsolete component.
