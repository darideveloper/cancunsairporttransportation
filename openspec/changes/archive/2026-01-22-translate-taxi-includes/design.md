# Design: Taxi Translation Mapping

The translation for the "Includes" section on the Taxi page needs to be more specific to provide a better user experience and clear branding.

## Translation Mapping

### English (`en.json`)
- Path: `pages.taxi.includes`
- `title`: "All our Taxi Cancun include:"
- `imageAlt`: "Private service in Suburban"
- `imageTitle`: "Private service in Suburban"

### Spanish (`es.json`)
- Path: `pages.taxi.includes`
- `title`: "Todos nuestros Taxis en Cancún incluyen:"
- `imageAlt`: "Servicio privado en Suburban"
- `imageTitle`: "Servicio privado en Suburban"

## Verification
- Check that the `Includes` component in `src/pages/[lang]/cancun-airport-taxi.astro` is passing `page="taxi"` (or the appropriate page object that resolves to "taxi").
