/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly SITE_URL: string;
    /** USD to MXN exchange rate for dynamic price conversion */
    readonly USD_TO_MXN_RATE: string;
    readonly PUBLIC_LEGACY_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
