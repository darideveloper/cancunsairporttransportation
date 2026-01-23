---
name: component-validator
description: Validate existing Astro components against SEO best practices, accessibility standards, and DRY principles. Use this skill to review components before finalizing them.
---

# Component Validator Skill

This skill provides a comprehensive checklist and procedure for validating Astro components. It ensures compliance with SEO best practices, accessibility standards, and project coding conventions (DRY).

## When to Use This Skill

- After creating a new component (using `component-creator`)
- Before submitting a component for review
- When refactoring legacy components
- If you suspect performance or accessibility issues

## Validation Checklist

Run through this checklist for every component you validate.

### 1. Structure & Semantics (HTML5)

- [ ] **Semantic Tags**: Are you using `<section>`, `<article>`, `<aside>`, `<nav>`, `<header>`, `<footer>` instead of `<div>` where appropriate?
- [ ] **Heading Hierarchy**: Do headings (`h1`-`h6`) follow a logical order? (e.g., no jumping from `h2` to `h4`).
- [ ] **Landmarks**: Are major sections of the component identifable via proper HTML5 landmarks?

### 2. Accessibility (a11y)

- [ ] **Interactives**: Do all buttons and links have descriptive text or `aria-label`?
- [ ] **Images**: Do all `Image` components have meaningful `alt` text? (Decorative images should have `alt=""` or `aria-hidden="true"`).
- [ ] **Contrast**: (If styling is visible) Do text colors meet WCAG AA contrast ratios?
- [ ] **Keyboard Nav**: Are interactive elements focusable and usable with a keyboard?
- [ ] **ARIA**: Are `aria-*` attributes used correctly and only when necessary (not redundant with semantic HTML)?

### 3. Images & Media

- [ ] **Astro Image**: Is the `Image` component from `astro:assets` used instead of `<img>`?
    ```javascript
    import { Image } from "astro:assets";
    ```
- [ ] **Attributes**: Are `width`, `height`, `alt`, and `title` defined?
- [ ] **Loading**: Is `loading="lazy"` used for images below the fold?
- [ ] **Format**: Are modern formats (WebP/AVIF) used (Astro handles this by default usually, but verify input)?

### 4. Code Quality & DRY (Don't Repeat Yourself)

- [ ] **Hardcoded Strings**: Are all user-facing strings extracted to translation files? (Check `useTranslations`).
- [ ] **Classes**: Are utility classes or styles reused? Avoid inline styles where possible.
- [ ] **Logic**: Is complex logic moved to utility functions or a separate script file?
- [ ] **Imports**: Are unused imports removed?
- [ ] **Props**: Are component props typed correctly (TypeScript interfaces)?

### 5. Client-Side Interactivity

- [ ] **Directives**: If using UI framework components (React/Vue/etc.), is the appropriate `client:*` directive used? (e.g., `client:visible`, `client:load`). Avoid `client:only` unless necessary.
- [ ] **Scripts**: for vanilla JS, are `<script>` tags handling cleanup if necessary?

## Validation Procedure

1.  **Read the Code**: Open the component file.
2.  **Scan for "Smells"**: Look for `<div>` soup, hardcoded text strings, or `<img>` tags.
3.  **Check Props**: Ensure `Propos` interface is defined.
4.  **Verify Translations**: Ensure text content uses `t(...)`.
5.  **Report**: If you find issues, list them clearly. If fixing them is within scope, apply the fixes.

## Example of a Valid Component

```astro
---
import { Image } from "astro:assets";
import { getLangFromUrl, useTranslations } from "../../lib/i18n/utils";
import myImage from "../../assets/images/example.jpg";

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<section class="feature-card" aria-labelledby="card-title">
  <h3 id="card-title">{title}</h3>
  <p>{description}</p>
  <Image 
    src={myImage} 
    alt={t("global.images.exampleAlt")} 
    width={400} 
    height={300} 
    loading="lazy" 
  />
  <button aria-label={t("global.buttons.learnMoreLabel")}>
    {t("global.buttons.learnMore")}
  </button>
</section>
```

## Common Issues to Fix

- **Fix**: Replace `<img>` with `<Image />`.
- **Fix**: Replace hardcoded "Click here" with `{t('key')}`.
- **Fix**: Add `aria-label` to icon-only buttons.
