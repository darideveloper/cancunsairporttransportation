import { ui, defaultLang } from "./ui";
import { routes } from "./routes";

const isDev = import.meta.env.DEV;

export function getLangFromUrl(url: URL) {
  const [, firstSegment] = url.pathname.split("/");
  if (firstSegment === "es") return "es";
  return "en";
}

export function getLocalizedPath(pageKey: string, lang: keyof typeof ui) {
  const path = routes[pageKey as keyof typeof routes]?.[lang];
  return path === undefined ? "/" : `/${path}`;
}

export function getTranslations(lang: keyof typeof ui) {
  return function t(key: string, vars?: Record<string, string>) {
    const keys = key.split("."); // Split the key by dots for nested access
    let value: any = ui[lang];

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }

    // Fallback to default language if the key doesn't exist
    if (value === undefined) {
      let fallbackValue: any = ui[defaultLang];
      for (const k of keys) {
        fallbackValue = fallbackValue?.[k];
        if (fallbackValue === undefined) break;
      }

      value = fallbackValue;

      if (value === undefined) {
        const errorMsg = `[i18n] Missing translation key: "${key}" for language "${lang}"`;
        if (isDev) {
          console.error(errorMsg);
          return `MISSING: ${key}`;
        }
      }
    }

    // Interpolate variables if provided
    if (typeof value === "string" && vars) {
      Object.entries(vars).forEach(([k, v]) => {
        value = value.replace(new RegExp(`{${k}}`, "g"), v);
      });
    }

    return value;
  };
}
