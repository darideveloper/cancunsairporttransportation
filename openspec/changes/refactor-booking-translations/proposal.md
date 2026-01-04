# Refactor BookingForm Translations

## Context
Currently, the `BookingForm.astro` component receives all its translation strings via a `translations` prop from the parent page (`src/pages/[lang]/index.astro`). This pattern creates prop drilling and tight coupling between the page and the organism.
Other components, like `TopBar.astro`, fetch their translations internally using the `useTranslations` hook, which is a cleaner and more scalable pattern.

## Goal
Refactor `BookingForm.astro` to internally fetch its translations using `useTranslations` and `getLangFromUrl`, removing the dependency on the `translations` prop. This aligns `BookingForm` with the established pattern in `TopBar.astro` and simplifies the `index.astro` page.

## Changes
- **`BookingForm.astro`**:
    - Import `useTranslations` and `getLangFromUrl` from `../../lib/i18n/utils`.
    - Retrieve `lang` from current URL.
    - Initialize `t` function with `lang`.
    - Replace usage of `translations` prop with `t('booking...')` calls.
    - Remove `translations` from Props interface.
- **`src/pages/[lang]/index.astro`**:
    - Remove the `translations` prop passed to `<BookingForm />`.

## Benefits
- Reduces prop drilling.
- Decouples `BookingForm` from the page data fetching logic.
- Consistent pattern with other components (e.g., `TopBar`).
- Simplified component interface.
