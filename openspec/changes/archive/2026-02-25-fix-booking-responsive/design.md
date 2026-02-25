# Design: Booking Menu Responsive Fixes

## Architectural Decisions

### 1. Forcing Input Shrinkage
We will apply `min-width: 0` to all global input elements. This is a standard CSS fix for flexbox and grid items that contain replaced elements or elements with intrinsic widths (like native date pickers). It allows the browser to shrink the element below its content's intrinsic size if the container requires it.

### 2. Standardizing Input Containers
Changing `.input-container` from `inline-block` to `block` (default for `div`) ensures that the container behaves predictably within the CSS Grid used in `BookingForm.tsx`. `inline-block` can sometimes introduce unwanted whitespace or prevent proper width calculation in complex grids.

### 3. Padding Optimization
The current padding is redundant:
- `container` class: `px-4` (16px)
- `section` tag: `px-4` (16px)
- `form` tag: `px-8` (32px)

On mobile, this results in 64px of padding on each side. We will:
- Maintain `container` padding.
- Keep `section` at `px-4` on mobile.
- Reduce `form` to `px-4` on mobile, but keep `px-8` (or similar) on larger screens to maintain the design's "breathability".

## Technical Details

### CSS Updates (global.css)
```css
.input-container {
  @apply block w-full; /* Changed from inline-block */
}

input,
textarea,
select {
  @apply w-full rounded-sm bg-white px-4 py-3 min-w-0; /* Added min-w-0 */
}
```

### Component Updates (BookingForm.tsx)
```tsx
<form
  className="bg-accent w-full rounded-xl px-4 sm:px-8 py-6" // Reduced mobile padding
>
```
