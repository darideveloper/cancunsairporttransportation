/**
 * Utility functions for the application.
 */

/**
 * Default USD to MXN exchange rate (fallback if not set in .env)
 */
const DEFAULT_USD_TO_MXN_RATE = 18.0;

/**
 * Get the USD to MXN exchange rate from the environment variable.
 */
export function getExchangeRate(): number {
  const envRate = import.meta.env.USD_TO_MXN_RATE;
  if (!envRate || envRate === "") {
    return DEFAULT_USD_TO_MXN_RATE;
  }
  const rate = Number(envRate);
  return isNaN(rate) ? DEFAULT_USD_TO_MXN_RATE : rate;
}

/**
 * Convert USD to MXN using the configured exchange rate.
 */
export function convertUsdToMxn(usdAmount: number): number {
  const rate = getExchangeRate();
  return usdAmount * rate;
}

/**
 * Format a price with currency symbol and locale-specific formatting.
 *
 * @param price - The price to format
 * @param lang - The language/locale for number formatting ('en' or 'es')
 * @param options - Formatting options
 * @returns Formatted price string (e.g., "$29.99 USD" or "$539.82 MXN")
 */
export function getFormattedPrice(
  price: number | null | undefined,
  lang: "en" | "es",
  options: {
    /** Include the currency code (USD/MXN) after the amount */
    includeCurrency?: boolean;
    /** Minimum fraction digits (default: 2) */
    maximumFractionDigits?: number;
    /** Maximum fraction digits (default: 2) */
    minimumFractionDigits?: number;
    /** Explicit currency override ('usd' or 'mxn'). If provided, no conversion is performed. */
    currency?: "usd" | "mxn";
  } = {},
): string {
  // Handle null/undefined/N/A cases
  if (price === null || price === undefined) {
    return "N/A";
  }

  const {
    includeCurrency = true,
    minimumFractionDigits = 2,
    maximumFractionDigits = 2,
    currency,
  } = options;

  // Use explicit currency if provided (skips conversion)
  if (currency) {
    const locale = lang === "es" ? "es-MX" : "en-US";
    const formatted = price.toLocaleString(locale, {
      minimumFractionDigits,
      maximumFractionDigits,
    });
    const code = currency.toUpperCase();
    return includeCurrency ? `$${formatted} ${code}` : `$${formatted}`;
  }

  if (lang === "es") {
    // Fallback: Convert to MXN based on language
    const mxnPrice = convertUsdToMxn(price);
    const formatted = mxnPrice.toLocaleString("es-MX", {
      minimumFractionDigits,
      maximumFractionDigits,
    });
    return includeCurrency ? `$${formatted} MXN` : `$${formatted}`;
  }

  // Fallback: Format in USD based on language
  const formatted = price.toLocaleString("en-US", {
    minimumFractionDigits,
    maximumFractionDigits,
  });
  return includeCurrency ? `$${formatted} USD` : `$${formatted}`;
}

/**
 * Get only the numeric value of a formatted price (for display purposes).
 *
 * @param price - The price to format
 * @param lang - The language/locale ('en' for USD, 'es' for MXN)
 * @param currency - Optional explicit currency override
 * @returns Formatted price number string without currency symbol or code
 */
export function getPriceValue(
  price: number | null | undefined,
  lang: "en" | "es",
  currency?: "usd" | "mxn",
): string {
  if (price === null || price === undefined) {
    return "N/A";
  }

  if (currency) {
    return price.toFixed(2);
  }

  if (lang === "es") {
    const mxnPrice = convertUsdToMxn(price);
    return mxnPrice.toFixed(2);
  }

  return price.toFixed(2);
}

/**
 * Get the currency code based on language or explicit override.
 */
export function getCurrencyCode(
  lang: "en" | "es",
  currency?: "usd" | "mxn",
): "usd" | "mxn" {
  if (currency) {
    return currency;
  }
  return lang === "es" ? "mxn" : "usd";
}

/**
 * Get static paths for both languages.
 */
export async function getStaticPathsLangs() {
  return [{ params: { lang: "es" } }, { params: { lang: "en" } }];
}

/**
 * Standardizes a string for use as an HTML ID.
 * @param prefix - A descriptive prefix for the ID (e.g. 'input', 'card')
 * @param value - The value to slugify
 * @returns A safe, slugified ID string
 */
export const generateId = (prefix: string, value: string): string => {
  const slug = value
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with dashes
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing dashes

  const randomSuffix = Math.random().toString(36).substring(2, 6);
  return `${prefix}-${slug}-${randomSuffix}`;
};
