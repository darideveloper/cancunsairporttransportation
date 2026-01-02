# Proposal: Create Brand Header

## Summary
Implement a fully responsive, brand-consistent header for the Cancun Airport Transportation website. The header will feature a logo, navigation links, and a prominent call-to-action (CTA) button, adapting seamlessly between desktop and mobile views according to Tailwind CSS breakpoints.

## Problem
The website currently lacks a functional brand header, which is essential for navigation, brand identification, and conversion (via "My Booking" button).

## Solution
Create a single `Header` component that handles both desktop and mobile layouts.
- **Desktop**: Horizontal layout with logo (left), navigation links (center), and "My Booking" button (right).
- **Mobile**: Minimal header with logo (left) and hamburger menu toggle (right). Toggling opens a full-screen overlay menu containing the navigation links, language switcher, customer service information, and a large CTA button.
- **Single DOM approach**: Keep both layouts in the same component, using Tailwind's responsive classes (`hidden`, `block`, `lg:flex`, etc.) to switch between them or a single navigation structure that adapts its style.

## Scope
- New `Header.astro` component in `src/components/organisms/`.
- New `Logo.astro` component in `src/components/atoms/` (use existing SVG from `src/assets/images/logo.svg`).
- New `Button.astro` component in `src/components/atoms/` (global reusable component).
- New `MobileMenu.tsx` (or similar) for interactive toggle logic if needed.
- Update `src/messages/en.json` and `src/messages/es.json` with new translation keys under `globalSections.header`.
- Integrate `Header` into `src/layouts/Layout.astro`.

## Implementation Requirements
- **i18n**: Use `getLangFromUrl(Astro.url)` and `useTranslations(lang)` from `src/lib/i18n/utils`
- **Routing**: Logo should link to `/${lang}/` for language-aware navigation
- **Accessibility**: All interactive elements must have proper ARIA labels from translations
- **SEO**: Use semantic HTML5 elements (`<header>`, `<nav>`) and unique IDs for all interactive elements
- **Styling**: Strictly use variables from `src/styles/global.css` (`--color-accent`, `--font-title`, etc.) for all custom styles
- **Existing Components**: Reuse `LangLink.astro` and `ContactItem.astro` from TopBar where applicable
