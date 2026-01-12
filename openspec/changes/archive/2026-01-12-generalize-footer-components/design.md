# Design: Generalize Footer Components

## Problem
Current components `FooterContact` and `FooterLinkList` have specific layout styles (`lg:col-span-2`) baked into them. This violates the separation of concerns for a generic "molecule" which should fill its container or define its own internal layout, but not its position in a parent grid.

## Solution
We will convert these into pure "display" components.

### 1. `LinkList.astro` (was `FooterLinkList`)
*   **Props**: `title` (string), `links` (Array<{text, href}>).
*   **Styling**:
    *   Remains a simple vertical list.
    *   Classes related to specific positioning (if any) are removed.
    *   *Self-check*: It currently doesn't have grid spans, just a `div`. It's mostly just the name that constraints it mentally.

### 2. `ContactCard.astro` (was `FooterContact`)
*   **Props**: `title`, `address`, `phones`, `email`.
*   **Styling**:
    *   **Remove**: `class="... lg:col-span-2"` from the root div.
    *   **Keep**: The internal flex layout (`flex flex-col gap-6`).
    *   **Usage**: The consumer (e.g. `Footer.astro`) will now likely need to wrap this component in a div with `class="lg:col-span-2"` OR pass that class to the component if we added a `class` prop.
    *   *Decision*: Wrapping is cleaner for composition. `Footer.astro` will wrap `<ContactCard />` in a `<div class="lg:col-span-2">` or apply the class directly to the component if it supported prop drilling, but since Astro components consume `class` prop automatically if spread, wrapping is safer/explicit or we just check if it supports `class` prop.
    *   *Correction*: Astro components do not automatically spread `class` to root unless coded to do so (`const { class: className, ...props } = Astro.props`). The current component does NOT do this.
    *   *Plan*: Modify `ContactCard` to just be the card content. Let Footer handle the column sizing.

## API Changes
No prop changes required, just component names and removed hardcoded external layout styles.
