# ButtonCta Variants Design

## Solution Overview
We will refactor `ButtonCta.astro` to accept a `variant` prop. A configuration object (or map) will define the specific classes for each variant, ensuring the base classes are shared (DRY) and new variants can be added effectively.

## Component Interface
```astro
interface Props {
  href: string;
  target?: string;
  class?: string;
  variant?: 'primary' | 'secondary'; // Defaults to 'primary'
}
```

## Styling Strategy
We will distinguish between:
1.  **Base Classes**: Common to all buttons (layout, padding, shape).
    - `px-6 py-5 rounded-lg text-sm text-center whitespace-nowrap`
    - Note: `btn` class currently exists, logic will be preserved.
2.  **Variant Classes**: Specific to the visual style.
    - `primary`: `bg-accent text-white`
    - `secondary`: `bg-black text-white`

## Implementation Details
- Define a `variants` object mapping keys to utility strings.
- Use `clsx` to merge:
    - Base classes
    - Variant classes
    - Custom `class` prop passed to component.
