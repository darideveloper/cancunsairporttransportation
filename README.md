# Cancun Airport Transportation — Bilingual Booking Landing Page

Bilingual (English/Spanish) landing page and booking platform for Cancun Airport Transportation, rebuilt in Astro to exceed 90% SEO score. Connected to the Django dashboard that serves the blog and proxies the legacy booking backend.

## Tech Stack

- **Astro 5** — static site generation, one dynamic router for 19 page types × 2 languages
- **React 19** — islands: booking widget, search, checkout
- **Tailwind CSS v4** — styling
- **TypeScript** — strict mode
- **Zustand** — client state persisted to `localStorage` (search form, reservation, contact form)
- **Google Maps API** — location autocomplete, route map, embeds
- **PayPal Smart Buttons** — online payments (PayPal + card)
- **marked + Zod + react-phone-number-input + sweetalert2** — Markdown rendering, form validation, phone inputs, dialogs

## Features

- Booking widget: one-way/round-trip, USD/MXN, Google Maps autocomplete, 1–25 passengers
- Search results with live quotes and route map
- Checkout: arrival/passenger info, PayPal + card payment, payment capture
- Reservation lookup and detail pages
- Contact form (Zod-validated, submits to legacy API)
- Blog (EN + ES) consuming the Django API, with RSS and search index
- SEO: JSON-LD, hreflang, canonical, sitemap, robots.txt, optimized images (AVIF/WebP)

## Setup

```sh
npm install
npm run dev       # dev server at localhost:4321
npm run build     # validate-i18n + astro build → ./dist/
npm run preview   # preview production build
```

---

## Contact

Developed by [Dari Developer](https://darideveloper.com)

- 🌐 [darideveloper.com](https://darideveloper.com)
- 💬 [WhatsApp](https://api.whatsapp.com/send?phone=5214493402622)
- 📂 [View project in portfolio](https://darideveloper.com/portafolio/cancunsairporttransportation)

---

# Cancun Airport Transportation — Landing Page de Reservas Bilingüe

Página de aterrizaje y plataforma de reservas bilingüe (inglés/español) para Cancun Airport Transportation, reconstruida en Astro para superar un 90% de SEO. Conectada al panel Django que sirve el blog y actúa como intermediario del sistema de reservas heredado.

## Tech Stack

- **Astro 5** — generación de sitio estático, un router dinámico para 19 tipos de página × 2 idiomas
- **React 19** — islas: buscador de reservas, búsqueda, checkout
- **Tailwind CSS v4** — estilos
- **TypeScript** — modo estricto
- **Zustand** — estado del cliente persistido en `localStorage` (buscador, reserva, contacto)
- **Google Maps API** — autocompletado de ubicaciones, mapa de ruta, embeds
- **PayPal Smart Buttons** — pagos en línea (PayPal + tarjeta)
- **marked + Zod + react-phone-number-input + sweetalert2** — renderizado Markdown, validación de formularios, teléfonos, diálogos

## Features

- Buscador de reservas: ida/ida y vuelta, USD/MXN, autocompletado por Google Maps, 1–25 pasajeros
- Resultados de búsqueda con cotización en vivo y mapa de ruta
- Checkout: información de llegada/pasajero, pago con PayPal + tarjeta, captura de pago
- Consulta y detalle de reservas
- Formulario de contacto (validado con Zod, enviado a la API heredada)
- Blog (EN + ES) que consume la API de Django, con RSS e índice de búsqueda
- SEO: JSON-LD, hreflang, canonical, sitemap, robots.txt, imágenes optimizadas (AVIF/WebP)

## Setup

```sh
npm install
npm run dev       # servidor de desarrollo en localhost:4321
npm run build     # validate-i18n + astro build → ./dist/
npm run preview   # previsualizar la build de producción
```

---

## Contacto

Desarrollado por [Dari Developer](https://darideveloper.com)

- 🌐 [darideveloper.com](https://darideveloper.com)
- 💬 [WhatsApp](https://api.whatsapp.com/send?phone=5214493402622)
- 📂 [Ver proyecto en el portafolio](https://darideveloper.com/portafolio/cancunsairporttransportation)
