# Add Icon Support to Form Components

## Summary
Update the reusable `Input` and `Textarea` atoms to support an optional `icon` prop. This prop will accept a **React Icon** component (from `react-icons`) and render it inside the input field, enhancing the visual user experience by providing graphical context for form fields.

## Problem
Currently, the `Input` and `Textarea` components strictly support text-only labels. Adding icons allows for a richer UI, matching the design used in the Contact page and other future forms.

## Solution
- Modify `Input.astro` props interface to accept `icon` (optional, React Icon type).
- Modify `Textarea.astro` props interface to accept `icon` (optional, React Icon type).
- Adjust internal styling (padding) when an icon is present.
- Provide clear code examples in `design.md`.
