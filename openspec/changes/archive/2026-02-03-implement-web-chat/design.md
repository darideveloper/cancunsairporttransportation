# Tawk.to Integration Design

## Component Architecture

We will create a specific integration component to encapsulate the third-party script. This keeps `Layout.astro` clean and allows for easier management of the integration code.

### New Component: `src/components/integrations/TawkTo.astro`

This component will render the necessary `<script>` tag. It will be an Astro component that renders HTML directly.

```astro
<!-- src/components/integrations/TawkTo.astro -->
---
const propertyId = import.meta.env.PUBLIC_TAWK_PROPERTY_ID;
const widgetId = import.meta.env.PUBLIC_TAWK_WIDGET_ID;

// Don't render if creds are missing (e.g. valid safeguard)
if (!propertyId || !widgetId) {
  return;
}
---
<script is:inline define:vars={{ propertyId, widgetId }}>
  var Tawk_API = Tawk_API || {};
  var Tawk_LoadStart = new Date();
  (function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/' + propertyId + '/' + widgetId;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  })();
</script>
```

### Environment Variables

We will add the following public environment variables (prefixed with `PUBLIC_` for client-side bundle inclusion in Astro).

- `PUBLIC_TAWK_PROPERTY_ID`: `682b4275b26df01905316062`
- `PUBLIC_TAWK_WIDGET_ID`: `1irkfn78h`

## Integration Point

The component will be imported and used in `src/layouts/Layout.astro`.

```astro
---
import TawkTo from "../components/integrations/TawkTo.astro";
// ...
---
<html>
  <head>
    <!-- ... -->
  </head>
  <body>
    <!-- ... -->
    <TawkTo />
  </body>
</html>
```

## Global API

The script defines `window.Tawk_API`. This allows other components (like a custom "Chat" button) to call methods like `Tawk_API.maximize()`.

Since we are using TypeScript, we might eventually need to extend the `Window` interface, but for this simple integration with `is:inline`, it will exist in the global scope at runtime.
