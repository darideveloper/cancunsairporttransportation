## Context
We are standardizing component implementation to ensuring all UI elements meet WCAG AA standards and follow strict DRY principles.

## Decisions

### 1. Centralized ID Generation
- **Decision**: Use a shared utility `generateUniqueId(prefix, seed)` in `src/lib/utils/ids.ts` (to be created) for all components requiring unique IDs (Cards, Inputs).
- **Reasoning**: Current ad-hoc slugify logic doesn't guarantee uniqueness if multiple components have the same title.
- **Implementation**:
  ```typescript
  // lib/utils/ids.ts
  export function generateId(prefix: string, seed: string): string {
    const slug = seed.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return `${prefix}-${slug}-${crypto.randomUUID().slice(0, 4)}`;
  }
  ```

### 2. Contact Info Standardization
- **Decision**: Refactor `Contact.astro`'s manual list into a composed molecule `ContactInfoList.astro` that consumes `ContactItem.astro`.
- **Reasoning**: `ContactItem.astro` already exists but is underutilized. Centralizing this logic ensures consistent styling and icon handling.

### 3. Decorative Icon Handling
- **Decision**: All standard icon libraries (React Icons) must be wrapped or passed with `aria-hidden="true"` when used visually.
- **Pattern**:
    ```jsx
    <Icon aria-hidden="true" className="..." />
    ```

### 4. Prop Types
- **Decision**: Use `astroHTML.JSX` namespaces for strict HTML attribute typing.
- **Example**: `type?: astroHTML.JSX.HTMLInputTypeAttribute` instead of `any`.
