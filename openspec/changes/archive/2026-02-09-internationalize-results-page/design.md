# Design: Results Page Internationalization

## Translation Mapping

### English (`src/messages/en.json`)

```json
{
  "pages": {
    "results": {
      "title": "Results",
      "description": "Showing available transportation options for your trip.",
      "sidebar": {
        "route": {
          "title": "Your travel **route**",
          "modifyBtn": "Modify Route",
          "mapAriaLabel": "Travel route map"
        }
      }
    }
  }
}
```

### Spanish (`src/messages/es.json`)

```json
{
  "pages": {
    "results": {
      "title": "Resultados",
      "description": "Mostrando opciones de transporte disponibles para su viaje.",
      "sidebar": {
        "route": {
          "title": "Tu **ruta** de viaje",
          "modifyBtn": "Modificar Ruta",
          "mapAriaLabel": "Mapa de ruta de viaje"
        }
      }
    }
  }
}
```

## Component Architecture

### Results.astro

The component will be updated to initialize the translation function:

```astro
---
import { marked } from "marked";
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---
<!-- ... -->
<h1>{t('pages.results.title')}</h1>
<p>{t('pages.results.description')}</p>
<!-- ... -->
<H2 class="my-4 [&_strong]:text-blue">
  <Fragment set:html={marked.parseInline(t('pages.results.sidebar.route.title'))} />
</H2>
<RouteMap labels={{ mapAriaLabel: t('pages.results.sidebar.route.mapAriaLabel') }} client:load />
```

### RouteMap.tsx

Update to accept labels:

```tsx
interface Props {
  className?: string;
  labels?: {
    mapAriaLabel: string;
  };
}

export default function RouteMap({ className, labels }: Props) {
  // ...
  return (
    <div className="map">
      <div
        // ...
        aria-label={labels?.mapAriaLabel}
      />
    </div>
  );
}
```

## Rationale

- **Namespace Consistency**: Using `pages.results` follows the established pattern in `en.json`.
- **Aria Label Localization**: Passing labels as props to React components is the project's standard for complex UI elements like maps.
- **Markdown for Titles**: Using `marked.parseInline` allows for semantic highlighting (like `**` for emphasis) within titles, which can then be targeted via CSS (e.g., coloring `strong` tags blue), avoiding hardcoded HTML in translation files.
