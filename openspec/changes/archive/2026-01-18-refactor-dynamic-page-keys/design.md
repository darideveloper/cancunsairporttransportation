# Design: Dynamic Translation Keys

## Approach
Each content page already defines a `page` constant that corresponds to a key in the translation files (e.g., `cancunToTulumShuttle`, `playaDelCarmen`, `home`).

We will replace static string literals in `t()` calls with template literals that interpolate this `page` variable.

### Example Transformation
**Before:**
```ts
const page = "cancunToTulumShuttle";
const content = t("pages.cancunToTulumShuttle.safeTrip.description");
```

**After:**
```ts
const page = "cancunToTulumShuttle";
const content = t(`pages.${page}.safeTrip.description`);
```

### Affected Files
- `src/pages/[lang]/cancun-to-tulum-shuttle.astro`
- `src/pages/[lang]/index.astro`
- `src/pages/[lang]/transportation-from-cancun-airport-to-playa-del-carmen.astro`

### Constraints
- Ensure that the resulting key string exactly matches the structure in `en.json` and `es.json`.
- `index.astro` may use some "global" keys which should remain global if they are not scoped to `pages.home`.
