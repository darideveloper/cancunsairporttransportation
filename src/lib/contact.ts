/**
 * Centralized contact information for Cancun Airport Transportation.
 * Single source of truth for all contact data across the application.
 */

// =============================================================================
// PHONE NUMBERS
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
    state: 'Quintana Roo',
    postalCode: '77500',
    country: 'Mexico',
} as const;

// =============================================================================
// SOCIAL LINKS
// =============================================================================

export const SOCIAL_LINKS = {
    facebook: 'https://www.facebook.com/gotransfers.us',
    instagram: 'https://www.instagram.com/gotransfers.us/',
} as const;

// =============================================================================
// GOOGLE MAPS
// =============================================================================

export const GOOGLE_MAPS = {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5966047271118!2d-86.85725502440039!3d21.12864288433976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2bb0419c6491%3A0x145800cb5703a989!2sCancun%20Airport%20Transportation!5e0!3m2!1ses-419!2smx!4v1721079619885!5m2!1ses-419!2smx',
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
