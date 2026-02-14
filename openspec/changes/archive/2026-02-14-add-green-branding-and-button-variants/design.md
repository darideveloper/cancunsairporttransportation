# Design: Green Brand Integration

## Architectural Reasoning
The project uses Tailwind CSS v4, which defines its theme tokens using standard CSS variables inside an `@theme` block. This allows for seamless integration between CSS-in-JS (via `clsx` and component props) and global styles.

### Brand Extension
Adding `--color-green` to the `@theme` block in `src/styles/global.css` automatically makes it available as a Tailwind utility (e.g., `bg-green`, `text-green`). By following the existing naming convention (`--color-accent`, `--color-blue`, etc.), we maintain consistency.

### Component Logic
The `ButtonCta` component uses a lookup object (`variants`) to map high-level variant names to specific Tailwind class strings.
- **Green Variant**: `bg-green text-white`
- **Green Ghost Variant**: `bg-green/10 border border-green text-green`

This maintains the component's role as a thin wrapper around functional styling, keeping the logic declarative and easily extensible.

## Implementation Details
1. **Color Token**: `#2e8e1f`
2. **Tailwind Mapping**: `--color-green` mapping in `global.css`.
3. **Component Update**:
   - `variant` union type extension.
   - `variants` object mapping.
