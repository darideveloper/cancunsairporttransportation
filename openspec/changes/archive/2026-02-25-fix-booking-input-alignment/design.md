# Design: Uniform Input Sizing

## Architectural Decisions

### 1. Fixed Height vs. Minimum Height
To resolve the "thinner" look of date/time inputs in Safari, we will switch from `min-height` to a fixed `height: 3rem !important`. This forces the browser to reserve the exact same vertical space for all input types, preventing the native picker's internal styling from collapsing the field.

### 2. Strict Box Sizing
We will enforce `box-sizing: border-box !important`. This is critical because some browsers treat native date/time pickers as `content-box` by default, which causes `width: 100% + padding` overflow.

### 3. Appearance Reset
Using `appearance: none` allows us to override the system-default "look" of the input, which often carries its own height and border constraints that interfere with CSS overrides.

## Technical Details

### CSS Updates (global.css)
```css
input,
textarea,
select {
  @apply w-full rounded-sm bg-white px-4;
  height: 3rem !important; /* Fixed height for consistency */
  box-sizing: border-box !important;
  width: 100% !important;
  max-width: 100% !important;
  -webkit-appearance: none;
  appearance: none;
}

input[type="date"],
input[type="time"] {
  @apply flex items-center; /* Center content vertically */
}
```
