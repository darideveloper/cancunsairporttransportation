/**
 * Centralized contact information for Cancun Airport Transportation.
 * Single source of truth for all contact data across the application.
 */

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
        raw: '+13237635379',
        formatted: '+1 (323) 763-5379',
        href: 'tel:+13237635379',
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
    full: 'Carr. Cancun-Chetumal km. 22 Terminal 2 Loc. CUN- 2385, 77500 Cancún, Q.R.',
    street: 'Carr. Cancun-Chetumal km. 22 Terminal 2 Loc. CUN- 2385',
    zone: 'Airport',
    city: 'Cancún',
    state: 'Quintana Roo',
    postalCode: '77500',
    country: 'Mexico',
    countryCode: 'MX',
} as const;

// =============================================================================
// SOCIAL LINKS
// =============================================================================
export const SOCIAL_LINKS = {
    facebook: 'https://www.facebook.com/gotransfers.us',
    instagram: 'https://www.instagram.com/gotransfers.us/',
    tripadvisor: 'https://www.tripadvisor.com.mx/',
    twitter: '@CancunAirportT',
} as const;

// =============================================================================
// GOOGLE MAPS
// =============================================================================
export const GOOGLE_MAPS = {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.819467106203!2d-86.87743258896505!3d21.039908387314313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2b0d3f1e5d23%3A0xfd13b111ff1bfe5c!2sCancun%20Airport%20Shuttle!5e0!3m2!1ses-419!2smx!4v1722358248608!5m2!1ses-419!2smx',
    placeId: '0x8f4c2b0d3f1e5d23:0xfd13b111ff1bfe5c',
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
    name: "Cancun Airport Shuttle",
    legalName: "Cancun Airport Shuttle by Go Transfers",
    url: "https://cunairportshuttle.com",
    logo: "/assets/img/logo.png",
    ogImage: "/og-image.jpg",
    contact: {
        phone: PHONES.mexico.formatted,
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
