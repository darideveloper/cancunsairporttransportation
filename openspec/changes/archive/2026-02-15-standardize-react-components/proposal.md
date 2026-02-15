# Proposal: Standardize React Components

Standardize all React components to follow a consistent pattern: removing `React.FC` / `FC` types and always using `export default function` for component definitions. This improves compatibility with React 19 and Astro's hydration, while simplifying the codebase.

## Why
Currently, some React components might use inconsistent patterns like `React.FC` or arrow function exports. While minor, these inconsistencies can lead to subtle issues with hydration, type checking, and developer experience, especially in a React 19 environment where `React.FC` has undergone changes and standard function exports are generally preferred for clarity and robustness.

## What Changes
1. **Refactor Component Definitions**: Ensure all React components (`.tsx` files) use `export default function ComponentName() { ... }` instead of `const ComponentName: FC = () => { ... }`.
2. **Remove Unused Types**: Eliminate `import type { FC }` or `import type { React.FC }` from component files where they are no longer needed.
3. **Update Project Guidelines**: Add this convention to `openspec/project.md` to ensure future components follow this standard.

## Impact
- **Developer Experience**: Better consistency across the codebase.
- **Maintainability**: Standard function exports are easier to read and debug.
- **Performance/Stability**: Avoids potential hydration issues in strict React 19 / Astro 5 environments.
