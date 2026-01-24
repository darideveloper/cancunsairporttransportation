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
