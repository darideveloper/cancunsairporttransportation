# Extract Pricing Card Text to Translations

## Problem
The `PricingCard` component contains hardcoded English text for "Most Popular" and "Price from". This prevents the component from being fully localized in other languages (e.g., Spanish).

## Solution
Extract these strings into the existing translation message files (`en.json`, `es.json`) and update the `PricingCard` component to use the `useTranslations` hook (or pass translated strings as props if preferred, but looking at `index.astro`, `PricingCard` is used within a context where `t` is available, however `PricingCard` itself is a component.).

Actually, `PricingCard` is an Astro component. `index.astro` passes `title`, `price`, etc.
However, "Most Popular" and "Price from" are *inside* `PricingCard`.
We have two options:
1. Pass these strings as props from `index.astro`.
2. Use `useTranslations` inside `PricingCard`.

Option 2 is cleaner for these structural strings.
We need to import `useTranslations` and `getLangFromUrl` in `PricingCard.astro`.
`PricingCard.astro` doesn't currently determine the language. It receives props.
It might be better to pass the standard `lang` prop to `PricingCard` or use `Astro.url` to determine lang.
`getLangFromUrl(Astro.url)` should work.

## Proposed Changes
1.  Add new keys to `src/messages/en.json` and `src/messages/es.json`:
    - `components.pricingCard.mostPopular`
    - `components.pricingCard.priceFrom`
2.  Update `src/components/molecules/PricingCard.astro`:
    - Import `getLangFromUrl`, `useTranslations`.
    - Determine `lang` from `Astro.url`.
    - Replace hardcoded text with `t(...)`.

## Verification
- Visual check of the Home page in English and Spanish.
- Verify "Most Popular" and "Price from" translate correctly.
