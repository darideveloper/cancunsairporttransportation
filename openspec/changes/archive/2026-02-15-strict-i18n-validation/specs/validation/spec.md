# i18n Strict Validation Design

This capability introduces runtime warnings and build-time validation for the internationalization system to prevent missing translation keys.

## Technical Details

Modify `src/lib/i18n/utils.ts` to detect missing keys and log errors in development mode.

```typescript
// src/lib/i18n/utils.ts

import { ui, defaultLang } from "./ui";
import { routes } from "./routes";

const isDev = import.meta.env.DEV;

export function getTranslations(lang: keyof typeof ui) {
  return function t(key: string, vars?: Record<string, string>) {
    const keys = key.split(".");
    let value: any = ui[lang];

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }

    // Fallback to default language if the key doesn't exist
    if (value === undefined) {
      // Logic to check defaultLang
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
```

### New Script: `scripts/validate-i18n.ts`

This script validates that all keys present in `en.json` are also present in `es.json` and vice-versa.

```typescript
// scripts/validate-i18n.ts
import fs from 'node:fs';
import path from 'node:path';

// Define messages directory
const messagesDir = path.resolve('src/messages');

const readMessages = (lang: string) => {
  const filePath = path.join(messagesDir, `${lang}.json`);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Message file not found: ${filePath}`);
    process.exit(1);
  }
  const content = fs.readFileSync(filePath, 'utf-8');
  try {
    return JSON.parse(content);
  } catch (e) {
    console.error(`❌ Invalid JSON in ${filePath}`);
    process.exit(1);
  }
};

const flattenKeys = (obj: any, prefix = ''): string[] => {
  return Object.keys(obj).reduce((acc: string[], key: string) => {
    const value = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null) {
      return [...acc, ...flattenKeys(value, newKey)];
    }
    return [...acc, newKey];
  }, []);
};

const en = readMessages('en');
const es = readMessages('es');

const enKeys = new Set(flattenKeys(en));
const esKeys = new Set(flattenKeys(es));

const missingInEs = [...enKeys].filter(k => !esKeys.has(k));
const missingInEn = [...esKeys].filter(k => !enKeys.has(k));

if (missingInEs.length > 0 || missingInEn.length > 0) {
  console.error('❌ i18n validation failed! Translation files are out of sync.');
  
  if (missingInEs.length > 0) {
    console.error('\nMissing in es.json:');
    missingInEs.forEach(k => console.error(`  - ${k}`));
  }

  if (missingInEn.length > 0) {
    console.error('\nMissing in en.json:');
    missingInEn.forEach(k => console.error(`  - ${k}`));
  }

  process.exit(1);
}

console.log('✅ i18n validation passed!');
```

### Updates to `package.json`

Add `tsx` to `devDependencies` to run the validation script, and update the `build` script.

```json
// package.json (partial)
{
  "scripts": {
    "validate-i18n": "tsx scripts/validate-i18n.ts",
    "build": "npm run validate-i18n && astro build",
    // ...
  },
  "devDependencies": {
    "tsx": "^4.19.2",
    // ...
  }
}
```

## ADDED Requirements

### Requirement: Prevent missing keys during build
The build process MUST ensure that both `en.json` and `es.json` have exactly the same keys to avoid missing content on any page.
#### Scenario: Building the application with mismatched translation files
- GIVEN `en.json` has a key `pages.home.title`
- AND `es.json` is missing that key
- WHEN I run `npm run build`
- THEN the command should fail with a non-zero exit code
- AND print exactly which keys are missing in `es.json`.

### Requirement: Improved debugging for missing keys at runtime
The `t()` function MUST notify developers when a key is missing instead of failing silently or returning `undefined`.
#### Scenario: Accessing a non-existent key in development
- GIVEN I am in a development environment
- WHEN a component calls `t('invalid.key')`
- THEN an error should be logged to the console
- AND the returned value should be `MISSING: invalid.key`.
