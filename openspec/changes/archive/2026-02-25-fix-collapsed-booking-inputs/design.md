# Design: Forced Input Dimensions

## Architectural Decisions

### 1. Overriding Browser Intrinsic Sizing
Native date/time pickers have complex internal shadow DOMs. To ensure they behave like standard text inputs in our layout, we must use `!important` to override the browser's internal logic that might prefer shrinking over filling.

### 2. Flexbox for Containers
Switching `.input-container` to `flex flex-col` forces the children (the inputs) to obey the cross-axis (horizontal) stretching behavior of the flex container, which is more robust in Safari than standard block flow when dealing with native inputs.

### 3. Vertical Standardization
Adding `min-height: 3rem !important` (48px) ensures that even if an input's content is empty or hidden, it maintains a size consistent with WCAG touch target guidelines and the rest of the form.

## Technical Details

### CSS Updates (global.css)
```css
.input-container {
  @apply flex flex-col w-full; /* Changed from block to flex */
}

input,
textarea,
select {
  @apply w-full rounded-sm bg-white px-4 py-3;
  width: 100% !important;
  min-width: 100% !important;
  min-height: 3rem !important; /* Added to prevent collapse */
}
```
