# Design: Results Page Implementation

## Context
The application uses a custom routing system defined in `src/lib/i18n/routes.ts` and a catch-all route `src/pages/[...path].astro`.

## Architecture

### Routing
- Extend `src/lib/i18n/routes.ts` to include a `results` key.
- Map `results` to `results` (en) and `es/resultados` (es).

### Component
- Create `src/components/pages/store/Results.astro`.
- Implementation will remain minimal as requested:
  ```astro
  ---
  const { lang } = Astro.props;
  ---
  <main>
    <h1>Results</h1>
  </main>
  ```
- Register this component in `src/pages/[...path].astro` within the `COMPONENT_MAP`.

## Considerations
- **Extensibility**: Positioning the component in `store/` suggests it will be part of the booking flow later.
- **i18n**: While currently static text, the component receives `lang` prop so it can be easily updated to use translation helpers later.
