# Design: Site Config Schema

## `src/data/site-config.ts` Structure

The file will export granular constants and the composite `BUSINESS_DATA` object.

```typescript
// =============================================================================
// PHONES
// =============================================================================
export const PHONES = {
    mexico: {
        raw: '+529983870435',
        formatted: '+52 (998) 387-0435',
        href: 'tel:+529983870435',
    },
    usa: {
        raw: '+19299991258',
        formatted: '+1 (929) 999-1258',
        href: 'tel:+19299991258',
    },
} as const;

// =============================================================================
// EMAIL
// =============================================================================
export const EMAIL = {
    address: 'bookings@gotransfers.us',
    href: 'mailto:bookings@gotransfers.us',
} as const;

// =============================================================================
// ADDRESS
// =============================================================================
export const ADDRESS = {
    full: 'Blvd. Luis Donaldo Colosio Km 7.5, Zona Hotelera, 77500 Cancún, Q.R.',
    street: 'Blvd. Luis Donaldo Colosio Km 7.5',
    zone: 'Zona Hotelera',
    city: 'Cancún',
    state: 'Quintana Roo', // Replaces "region"
    postalCode: '77500',
    country: 'Mexico',
    countryCode: 'MX', // Added for schema usage if needed
} as const;

// =============================================================================
// SOCIAL LINKS
// =============================================================================
export const SOCIAL_LINKS = {
    facebook: 'https://www.facebook.com/gotransfers.us',
    instagram: 'https://www.instagram.com/gotransfers.us/',
    tripadvisor: 'https://www.tripadvisor.com.mx/', // Preserved from site-config
    twitter: '@CancunAirportT', // Preserved from site-config
} as const;

// =============================================================================
// GOOGLE MAPS
// =============================================================================
export const GOOGLE_MAPS = {
    embedUrl: '...',
    placeId: '0x8f4c2bb0419c6491:0x145800cb5703a989',
    coordinates: {
        lat: 21.12864288433976,
        lng: -86.85725502440039,
    },
} as const;

// =============================================================================
// BUSINESS HOURS
// =============================================================================
export const BUSINESS_HOURS = {
    start: '07:00',
    end: '23:00',
    timezone: 'America/Cancun',
    display: '7:00 AM to 11:00 PM',
} as const;

// =============================================================================
// GLOBAL BUSINESS DATA (SEO & Metadata)
// =============================================================================
export const BUSINESS_DATA = {
    name: "Cancun Airport Transportation",
    legalName: "Cancun Airport Transportation by Go Transfers",
    url: "https://cancunsairporttransportation.com",
    logo: "/assets/img/logo.png",
    contact: {
        phone: PHONES.mexico.formatted, // Primary phone for schema
        email: EMAIL.address,
        address: {
            street: ADDRESS.street,
            city: ADDRESS.city,
            region: ADDRESS.state,
            postalCode: ADDRESS.postalCode,
            country: ADDRESS.countryCode,
        },
        geo: GOOGLE_MAPS.coordinates,
    },
    social: SOCIAL_LINKS,
    // Helper accessors can be added if needed, but direct access to constants is preferred for UI
};
```

## Migration Map

| Old Location | New Location |
| :--- | :--- |
| `src/lib/contact.ts` -> `PHONES` | `src/data/site-config.ts` -> `PHONES` |
| `src/lib/contact.ts` -> `EMAIL` | `src/data/site-config.ts` -> `EMAIL` |
| `src/lib/contact.ts` -> `ADDRESS` | `src/data/site-config.ts` -> `ADDRESS` |
| `src/lib/contact.ts` -> `SOCIAL_LINKS` | `src/data/site-config.ts` -> `SOCIAL_LINKS` |
| `src/lib/contact.ts` -> `GOOGLE_MAPS` | `src/data/site-config.ts` -> `GOOGLE_MAPS` |
| `src/lib/contact.ts` -> `BUSINESS_HOURS` | `src/data/site-config.ts` -> `BUSINESS_HOURS` |
| `src/data/site-config.ts` -> `BUSINESS_DATA` | `src/data/site-config.ts` -> `BUSINESS_DATA` (Updated) |
