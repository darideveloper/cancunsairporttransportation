# Design: Standardized LinkList

## Problem
We have two components (`LinkList`, `ContactCard`) doing similar things (rendering lists of information). `ContactCard` is specific and rigid. `LinkList` is generic but limited to simple links. We want to merge them into `LinkList`.

## Solution
Expand `LinkList` to handle complex items.

### API Changes
Current `LinkList` Item:
- `text`: string
- `href`: string

New `LinkList` Item:
- `text`: string | HTML? (Value)
- `href`?: string
- `title`?: string (Label, e.g. "Phone")
- `icon`?: string (Optional, for future)

### Styling Strategy
The user requested to "use LinkList as base".
- **Container**: Use `LinkList`'s `nav > ul` structure.
- **Simple Links**: Keep `LinkList`'s existing anchor styles (`text-sm font-medium text-accent-dark`).
- **Items with Title** (Contact Info):
    - When `title` is present, render a flexible column layout inside the `li`.
    - `title`: Small, uppercase, neutral color (adopting `ContactCard`'s label style `text-xs font-bold uppercase`).
    - `text`: Larger or standard size (adopting `ContactCard`'s value style `text-lg` or falling back to `LinkList`'s `text-sm` depending on importance? We will try to preserve the *visual weight* of the Contact info while using the `LinkList` *markup structure*).
    - **Hover Effects**: Ensure specific hover states (like `group-hover:text-blue`) from `ContactCard` are adapted or standardized to `LinkList`'s theme.

### Migration of `ContactCard` content
- **Address**: Currently a `p` with sidebar. It might need to be passed as a special item or just a robust "Text only" item. We might simulate the border style via a class utility if needed, or simplify it to match the list look.
- **Phones/Emails**: Will become items with `title` (label) and `text` (value).

## Components to Remove
- `src/components/molecules/ContactCard.astro`
