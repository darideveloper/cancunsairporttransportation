# SEO Architecture Design

## Context
The project needs to replicate the SEO setup of an existing Laravel application. The current Astro implementation (`BaseSEO.astro`) is a good starting point but needs significant expansion.

## Architecture

### 1. Configuration (`src/data/site-config.ts`)
We will centralize static business data to ensure consistency across JSON-LD and visible content.

```typescript
export const BUSINESS_DATA = {
  name: "Cancun Airport Transportation",
  legalName: "Cancun Airport Transportation by Go Transfers",
  url: "https://cancunsairporttransportation.com",
  logo: "/assets/img/logo.png",
  contact: {
    phone: "+52 998 212 7069",
    email: "bookings@gotransfers.us",
    address: {
      street: "Av. Prol. La Luna 132",
      city: "Cancun",
      region: "CUN",
      postalCode: "77533",
      country: "MX"
    },
    geo: {
      lat: 21.12865,
      lng: -86.8546
    }
  },
  social: {
    facebook: "https://www.facebook.com/gotransfers.us",
    tripadvisor: "https://www.tripadvisor.com.mx/...",
    twitter: "@CancunAirportT" // Update if different
  }
};
```

### 2. Component Interface (`BaseSEO.astro`)

The component signature needs update to support the requirements:

```typescript
interface Props {
  // Existing
  currentPage: string;
  jsonType?: string; // Mapped to schema.org types
  extraJson?: Record<string, any>; // Merged into JSON-LD

  // New/Updated
  ogImage?: string; // URL for social image
  noIndex?: boolean; // Control robots tag
  locale?: string; // Explicit locale override (default deriving from lang)
  alternates?: Record<string, string>; // explicit hreflang map if dynamic calculation fails
}
```

### 3. Logic Mapping

| Requirement | Laravel (`SeoTrait`) | Astro (`BaseSEO`) | Search |
| :--- | :--- | :--- | :--- |
| **Title** | `t('key')` or JSON | `t(page.title)` | Existing logic works, verify `| Brand` suffix. |
| **Locale** | Hardcoded `es-MX` (bug) | Derive: `en`->`en_US`, `es`->`es_MX`. | **New Logic** |
| **Social Image** | Static Global | Prop `ogImage` or Fallback. | **New Prop** |
| **JSON-LD** | Hardcoded `LocalBusiness` | Global Config + Merge. | **Refactor** |
| **Twitter** | Hardcoded | Config Driven. | **Refactor** |

## Implementation details

- **Locale Map**:
  ```ts
  const LOCALE_MAP = {
    en: "en_US",
    es: "es_MX"
  };
  const ogLocale = LOCALE_MAP[lang] || "en_US";
  ```

- **JSON-LD Construction**:
  Instead of hardcoding the big object in the component, import `BUSINESS_DATA` and map it.

## 4. Metadata Content Map & Translation Keys

The following values MUST be used in `src/messages/{lang}.json`.
Each section identifies the **JSON Key** (relative to `pages`) that handles the metadata.

### Home
- **JSON Key**: `home`
- **Code Usage**: `Home.astro` -> `pageKey="home"`

**EN**
- Title: `Cancun Airport Transportation | Private & Shuttle Transfers to Cancun and Riviera Maya`
- Desc: `Book reliable Cancun Airport Transportation for transfers to Cancun Hotel Zone, Playa del Carmen, Tulum, and the Riviera Maya. Choose from private services, shuttles, taxis, and VIP options. Safe and economical transfers available 24/7`
**ES**
- Title: `Transportación Confiable al Aeropuerto de Cancún | Traslados Privados y Transporte a Cancún y Riviera Maya`
- Desc: `Transportación confiable en el Aeropuerto de Cancún. Traslados a: Cancún Zona Hotelera, Playa del Carmen, Tulum, y la Riviera Maya. Elija entre servicios de transporte privados, taxis y camionetas de lujo. Traslados seguros y económicos disponibles 24/7`

### Destinations (Main)
- **JSON Key**: `destinations`
- **Code Usage**: `Destinations.astro` -> `pageKey="destinations"`

**EN**
- Title: `Transportation with Cancun Airport Transportation to the most popular destinations in Riviera Maya`
- Desc: `Discover our competitive transportation rates to the most popular destinations in the Riviera Maya, including Cancun, Playa del Carmen, Tulum, Cozumel, Isla Mujeres, and throughout the Riviera Maya`
**ES**
- Title: `Transporte con Cancun Airport Transportation a los destinos más populares de la Riviera Maya`
- Desc: `Descubra nuestras competitivas tarifas de transportación a los destinos más populares de la Riviera Maya, incluyendo Cancún, Playa del Carmen, Tulum, Cozumel, Isla Mujeres, y toda la Riviera Maya.`

### Playa del Carmen
- **JSON Key**: `playaDelCarmen`
- **Code Usage**: `Playa.astro` -> `const page = "playaDelCarmen"`

**EN**
- Title: `Transportation from cancun airport to playa del carmen - Cancun Airport Transportation`
- Desc: `Transportation from Cancun Airport to Playa del Carmen. Best way to get to Playa del Carmen. Cheap transportation to any hotel in Playa del Carmen`
**ES**
- Title: `Transporte de Cancún a Playa del Carmen - Traslado Cancún Playa del Carmen`
- Desc: `Transportación del Aeropuerto de Cancún a Playa del Carmen. La mejor manera de llegar a Playa del Carmen. Transportación barata a cualquier hotel en Playa del Carmen`

### Tulum
- **JSON Key**: `cancunToTulumShuttle`
- **Code Usage**: `Tulum.astro` -> `const page = "cancunToTulumShuttle"`

**EN**
- Title: `Cancun to Tulum Shuttle with 10% OFF | Shuttle from Cancun to Tulum`
- Desc: `Shuttle from Cancun to Tulum from 129 USD per vehicle. Cancun to Tulum Shuttle and transportation options: private, luxury, and group`
**ES**
- Title: `Traslado de Cancun a Tulum con 10% de descuento | Traslados de Cancun a Tulum`
- Desc: `Transporte de Cancún a Tulum desde 2,322 por vehículo. Traslados a Tulum y opciones de transporte: privado, de lujo y de grupo.`

### Akumal
- **JSON Key**: `cancunToAkumalShuttle`
- **Code Usage**: `Akumal.astro` -> `const page = "cancunToAkumalShuttle"`

**EN**
- Title: `The Cheapest Cancun to Akumal Shuttle | Transportation to Akumal`
- Desc: `The safest & most reliable Shuttle to Akumal. The most reliable Akumal Shuttle at lowest price from/to Cancun Airport`
**ES**
- Title: `El precio más bajo en Traslado de Cancún a Akumal | Transporte a Akumal`
- Desc: `El servicio más económico de Traslado de Cancún a Akumal. El servicio de transporte a Akumal más confiable al precio más bajo desde/hacia el Aeropuerto de Cancún.`

### Merida
- **JSON Key**: `cancunToMerida`
- **Code Usage**: `Merida.astro` -> `const page = "cancunToMerida"`

**EN**
- Title: `Transportation from Cancun Airport to Merida - Cancun Airport Transportation`
- Desc: `Transportation from Cancun Airport to Merida. Best way to get to Merida. Cheap transportation to any hotel or destination in Merida`
**ES**
- Title: `Transporte del Aeropuerto de Cancún a Mérida - Traslado del Aeropuerto de Cancún`
- Desc: `Transportación del Aeropuerto de Cancún a Mérida. La mejor manera de llegar a Mérida. Transportación económica a cualquier hotel o destino en Mérida.`

### Private Services
- **JSON Key**: `private`
- **Code Usage**: `Private.astro` -> `const page = "private"`

**EN**
- Title: `Private Airport Transfers Cancun | Cancun Airport Transportation by Go Transfers`
- Desc: `Private Transfer Cancun Airport to all hotels in Cancun, Playa del Carmen, Tulum and more destinations in Riviera Maya. Private Airport Transfer Cancun with Cancun Airport Transportation by Go Transfers.`
**ES**
- Title: `Transporte Privado en Cancún Aeropuerto | Transportación Aeropuerto Cancún por Go Transfers`
- Desc: `Traslado Privado del Aeropuerto de Cancún a todos los hoteles en Cancún, Playa del Carmen, Tulum y más destinos en Riviera Maya. Transporte Privado en Cancún Aeropuerto con Cancun Airport Transportation por Go Transfers.`

### Luxury Services
- **JSON Key**: `luxury`
- **Code Usage**: `Luxury.astro` -> `const page = "luxury"`

**EN**
- Title: `Cancun Luxury Transportation | Cancun Airport Transportation by Go Transfers`
- Desc: `Cancun Luxury Transportation to all hotels in Cancun, Playa del Carmen, Tulum, and more destinations in Riviera Maya. Cancun Airport Luxury Transportation by Cancun Airport Transportation`
**ES**
- Title: `Transportación de Lujo en Cancún | Transportación de lujo en el Aeropuerto de Cancún por Go Transfers`
- Desc: `Transportación de lujo en Cancún a todos los hoteles en Cancún, Playa del Carmen, Tulum, y más destinos en la Riviera Maya. Traslados de lujo en el Aeropuerto de Cancun por Cancun Airport Transportation`

### Group Services
- **JSON Key**: `group`
- **Code Usage**: `Group.astro` -> `const page = "group"`

**EN**
- Title: `Cancun Group Transportation | Cancun Airport Transportation by Go Transfers`
- Desc: `Transportation for groups to all hotels in Cancun, Playa del Carmen, Tulum, and more destinations in Riviera Maya. Cancun Group Transportation with Cancun Airport Transportation by Go Transfers`
**ES**
- Title: `Transportación de Grupos en Cancún | Transportación Aeropuerto Cancún por Go Transfers`

### Reservation (My Booking)
- **JSON Key**: `reservation`
- **Code Usage**: `Reservation.astro` -> `pageKey` prop (from `routes.ts`)

**EN**
- Title: `My Reservation | Cancun Airport Transportation`
- Desc: `Manage your reservation with Cancun Airport Transportation. View details, make changes, or contact support.`
**ES**
- Title: `Mi Reservación | Cancun Airport Transportation`
- Desc: `Administre su reservación con Cancun Airport Transportation. Vea detalles, realice cambios o contacte a soporte.`

### Static Pages
*Note: Legal pages use Content Collections (`src/content/legal`), not translation files.*
- **Contact**: `contact` (`Contact us` / `Contáctanos`)
- **Terms**: Content Collection (update `src/content/legal/{lang}/terms-and-conditions.md`)
- **Privacy**: Content Collection (update `src/content/legal/{lang}/privacy-policy.md`)

*(Other pages from `docs/seo.md` like Checkout/Processing appear to be dynamic states or not currently implemented as distinct SEO routes.)*
