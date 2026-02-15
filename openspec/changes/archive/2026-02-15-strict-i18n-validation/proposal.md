# Strict I18N Validation

Implement a safety system to ensure no missing translation keys reach production and provide better feedback during development.

## Motivation

Current system silently falls back to the default language or returns `undefined` (which can break the UI or look broken) when a translation key is missing. This proposal adds:
1.  **Build-time validation**: Fails the build if `en.json` and `es.json` are out of sync.
2.  **Runtime warnings**: Displays clear errors in the console and placeholders in the UI during development when a key is missing.

## Affected Areas

- `src/lib/i18n/utils.ts`: Updated to handle missing keys with warnings.
- `package.json`: Added validation script to the build pipeline and `tsx` dependency.
- `scripts/validate-i18n.ts`: New script for key parity check.

## Design

See the detailed implementation and requirements in [specs/validation/spec.md](specs/validation/spec.md).
