/**
 * Centralized Pricing Data
 *
 * This file contains all base USD prices for transportation services.
 * MXN prices are calculated dynamically using the USD_TO_MXN_RATE environment variable.
 *
 * @see /openspec/changes/global-pricing-system/proposal.md
 */

export type ServiceTier = 'private' | 'luxury' | 'group';

export interface TierPricing {
    /** One-way price in USD */
    ow: number;
    /** Round-trip price in USD */
    rt: number;
}

export interface DestinationPricing {
    private: TierPricing;
    luxury: TierPricing | null;
    group: TierPricing | null;
}

export interface DestinationInfo {
    /** Translation key for the destination name */
    nameKey: string;
    /** Pricing for each tier */
    pricing: DestinationPricing;
}

/**
 * Base USD prices for all destinations.
 * This is the Single Source of Truth for all pricing across the site.
 */
export const BASE_PRICES: Record<string, DestinationInfo> = {
    // Cancun Area
    cancunDowntown: {
        nameKey: 'global.ratesTable.destinations.cancunDowntown.name',
        pricing: {
            private: { ow: 29.99, rt: 59.99 },
            luxury: { ow: 84.00, rt: 160.00 },
            group: { ow: 84.00, rt: 160.00 },
        },
    },
    cancunZone: {
        nameKey: 'global.ratesTable.destinations.cancunZone.name',
        pricing: {
            private: { ow: 29.99, rt: 59.99 },
            luxury: { ow: 84.00, rt: 160.00 },
            group: { ow: 84.00, rt: 160.00 },
        },
    },
    puertoMorelos: {
        nameKey: 'global.ratesTable.destinations.puertoMorelos.name',
        pricing: {
            private: { ow: 53.00, rt: 101.00 },
            luxury: { ow: 110.00, rt: 209.00 },
            group: { ow: 110.00, rt: 209.00 },
        },
    },
    playaMujeres: {
        nameKey: 'global.ratesTable.destinations.playaMujeres.name',
        pricing: {
            private: { ow: 55.00, rt: 105.00 },
            luxury: { ow: 120.00, rt: 230.00 },
            group: { ow: 120.00, rt: 230.00 },
        },
    },
    puertoJuarez: {
        nameKey: 'global.ratesTable.destinations.puertoJuarez.name',
        pricing: {
            private: { ow: 53.00, rt: 101.00 },
            luxury: { ow: 120.00, rt: 230.00 },
            group: { ow: 120.00, rt: 230.00 },
        },
    },
    playaDelCarmen: {
        nameKey: 'global.ratesTable.destinations.playaDelCarmen.name',
        pricing: {
            private: { ow: 69.99, rt: 134.98 },
            luxury: { ow: 145.00, rt: 280.00 },
            group: { ow: 145.00, rt: 280.00 },
        },
    },
    costaMujeres: {
        nameKey: 'global.ratesTable.destinations.costaMujeres.name',
        pricing: {
            private: { ow: 60.00, rt: 115.00 },
            luxury: { ow: 145.00, rt: 280.00 },
            group: { ow: 145.00, rt: 280.00 },
        },
    },
    cozumel: {
        nameKey: 'global.ratesTable.destinations.cozumel.name',
        pricing: {
            private: { ow: 69.99, rt: 134.98 },
            luxury: { ow: 145.00, rt: 280.00 },
            group: { ow: 145.00, rt: 280.00 },
        },
    },
    puertoAventuras: {
        nameKey: 'global.ratesTable.destinations.puertoAventuras.name',
        pricing: {
            private: { ow: 93.00, rt: 181.00 },
            luxury: { ow: 170.00, rt: 330.00 },
            group: { ow: 170.00, rt: 330.00 },
        },
    },
    akumal: {
        nameKey: 'global.ratesTable.destinations.akumal.name',
        pricing: {
            private: { ow: 108.00, rt: 211.00 },
            luxury: { ow: 235.00, rt: 460.00 },
            group: { ow: 235.00, rt: 460.00 },
        },
    },
    tulum: {
        nameKey: 'global.ratesTable.destinations.tulum.name',
        pricing: {
            private: { ow: 129.00, rt: 253.00 },
            luxury: { ow: 305.00, rt: 595.00 },
            group: { ow: 305.00, rt: 595.00 },
        },
    },
    mahahual: {
        nameKey: 'global.ratesTable.destinations.mahahual.name',
        pricing: {
            private: { ow: 544.00, rt: 1083.00 },
            luxury: { ow: 1088.00, rt: 2170.00 },
            group: { ow: 1088.00, rt: 2170.00 },
        },
    },
    holbox: {
        nameKey: 'global.ratesTable.destinations.holbox.name',
        pricing: {
            private: { ow: 255.00, rt: 500.00 },
            luxury: { ow: 505.00, rt: 985.00 },
            group: { ow: 505.00, rt: 985.00 },
        },
    },
    valladolid: {
        nameKey: 'global.ratesTable.destinations.valladolid.name',
        pricing: {
            private: { ow: 344.00, rt: 683.00 },
            luxury: { ow: 688.00, rt: 1370.00 },
            group: { ow: 688.00, rt: 1370.00 },
        },
    },
    merida: {
        nameKey: 'global.ratesTable.destinations.merida.name',
        pricing: {
            private: { ow: 525.00, rt: 1045.00 },
            luxury: { ow: 995.00, rt: 1960.00 },
            group: { ow: 995.00, rt: 1960.00 },
        },
    },
    bacalar: {
        nameKey: 'global.ratesTable.destinations.bacalar.name',
        pricing: {
            private: { ow: 544.00, rt: 1083.00 },
            luxury: { ow: 1088.00, rt: 2170.00 },
            group: { ow: 1088.00, rt: 2170.00 },
        },
    },
    coba: {
        nameKey: 'global.ratesTable.destinations.coba.name',
        pricing: {
            private: { ow: 344.00, rt: 683.00 },
            luxury: { ow: 688.00, rt: 1370.00 },
            group: { ow: 688.00, rt: 1370.00 },
        },
    },
    tulumHotelZone: {
        nameKey: 'global.ratesTable.destinations.tulumHotelZone.name',
        pricing: {
            private: { ow: 139.00, rt: 263.00 },
            luxury: { ow: 355.00, rt: 690.00 },
            group: { ow: 355.00, rt: 690.00 },
        },
    },
    tulumAirport: {
        nameKey: 'global.ratesTable.destinations.tulumAirport.name',
        pricing: {
            private: { ow: 321.00, rt: 574.00 },
            luxury: null,
            group: null,
        },
    },
} as const;

/**
 * Page-specific destination mappings.
 * Maps page keys to destination keys for easy lookup.
 */
export const PAGE_DESTINATION_MAP: Record<string, string> = {
    home: 'cancunZone',
    playa: 'playaDelCarmen',
    tulum: 'tulum',
    akumal: 'akumal',
    merida: 'merida',
    playaDelCarmen: 'playaDelCarmen',
    cancunToTulum: 'tulum',
    cancunToAkumal: 'akumal',
    cancunToMerida: 'merida',
} as const;

/**
 * Get prices for a specific destination by key.
 */
export function getDestinationPricing(destinationKey: string): DestinationPricing | null {
    const destination = BASE_PRICES[destinationKey];
    return destination?.pricing ?? null;
}

/**
 * Get the one-way price for a specific destination and tier.
 */
export function getOneWayPrice(destinationKey: string, tier: ServiceTier): number | null {
    const pricing = getDestinationPricing(destinationKey);
    if (!pricing) return null;
    const tierPricing = pricing[tier];
    return tierPricing?.ow ?? null;
}

/**
 * Get the round-trip price for a specific destination and tier.
 */
export function getRoundTripPrice(destinationKey: string, tier: ServiceTier): number | null {
    const pricing = getDestinationPricing(destinationKey);
    if (!pricing) return null;
    const tierPricing = pricing[tier];
    return tierPricing?.rt ?? null;
}

/**
 * Get all destinations as an array for iteration.
 */
export function getAllDestinations(): Array<{ key: string; info: DestinationInfo }> {
    return Object.entries(BASE_PRICES).map(([key, info]) => ({
        key,
        info,
    }));
}
