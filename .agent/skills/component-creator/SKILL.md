---
name: component-creator
description: Create new Astro components following SEO best practices, project conventions, and proper translation integration. Use when creating a new component from scratch.
---

# Component Creator Skill

This skill guides you through creating new Astro components that follow SEO best practices, maintain proper code structure, and integrate seamlessly with the project's translation system.

## When to Use This Skill

- Creating a new component from scratch
- Building atoms, molecules, or organisms following atomic design principles
- Need to ensure SEO compliance from the start
- Integrating with the project's i18n translation system
- **Creating an OpenSpec Proposal** (Use this skill to detail component structure in your proposal)

## OpenSpec Proposal Requirements

When creating an OpenSpec proposal that involves new components, you **MUST** include the following key points in your proposal document:

1.  **Component Name & Type**: Specify the exact component name and whether it is an atom, molecule, or organism.
2.  **File Location**: State where the file will be created (e.g., `src/components/molecules/Card.astro`).
3.  **Props Interface**: Define the expected `Props` interface for the component in TypeScript format.
4.  **HTML Structure**: Provide a high-level outline of the semantic HTML structure (e.g., `<section>` containing `<h2>`, `<p>`, `<Image />`).
5.  **Translation Strategy**: Explicitly state which text will be global vs. page-specific and list the new translation keys that will be created.
6.  **SEO & Accessibility**: Mention specific attributes like `aria-labels`, `alt` text strategies, and heading levels.

**Example Proposal Extract:**

```markdown
### Component: FeatureCard (Molecule)

- **Location**: `src/components/molecules/FeatureCard.astro`
- **Props**:
  ```typescript
  interface Props {
    title: string;
    icon: string;
  }
  ```
- **Structure**: `<article>` with an icon, `<h3>` title, and `<slot />` for content.
- **Translations**: Global keys under `global.components.featureCard.*`.
```

## Prerequisites

Before creating a component, ensure you:

1. **Understand the requirement** - Know exactly what the component should do
2. **Check existing components** - Review all components in `src/components/` to maximize reusability
3. **Identify the component type** - Determine if it's an atom, molecule, or organism
4. **Plan translation needs** - Decide if translations are global or page-specific

## Component Creation Workflow

### Step 1: Review Existing Components

**CRITICAL**: Before creating any new component, thoroughly review existing components to avoid duplication.

```bash
# Review component structure
ls -R src/components/
```

Check these directories:
- `src/components/atoms/` - Basic building blocks (buttons, headings, icons)
- `src/components/molecules/` - Simple combinations (cards, list items)
- `src/components/organisms/` - Complex sections (headers, footers, forms)

**Ask yourself**: Can I reuse or compose existing components instead of creating a new one?

### Step 2: Create HTML Structure Only

**IMPORTANT**: Create ONLY the HTML structure initially. Do NOT add styles yet.

#### HTML Structure Guidelines

1. **Use Semantic HTML**
   - Use appropriate HTML5 semantic elements (`<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`, etc.)
   - Avoid generic `<div>` when semantic alternatives exist
   - Use heading hierarchy correctly (h1 → h2 → h3, no skipping)

2. **Add Empty Class Attributes**
   - Include `class=""` attributes where styles will be applied later
   - This makes it clear where styling will go

3. **Use Proper ARIA Labels**
   - Add `aria-label` for interactive elements
   - Use `aria-labelledby` to reference heading IDs
   - Add `aria-hidden="true"` for decorative icons
   - Include `role` attributes when needed

4. **Implement Unique IDs**
   - Generate unique IDs for interactive elements
   - Use descriptive, kebab-case naming
   - Ensure IDs are unique across the page

5. **Use Astro Image Component**
   - Import: `import { Image } from "astro:assets";`
   - Always include `alt` and `title` attributes
   - Add `loading="lazy"` for images below the fold
   - Specify `width` and `height` for better performance

6. **Use ReactIcons for Icons**
   - Import from `react-icons` (already installed)
   - Add `aria-hidden="true"` to decorative icons
   - Use `className` instead of `class` for React components
   - Add `client:visible` directive if icons need interactivity

7. **Use `clsx` for Classes**
   - **CRITICAL**: Never use Astro `class:list`.
   - Always use `clsx` for conditional or complex class strings.
   - Import: `import clsx from "clsx";`

#### Example Component Structure

```astro
---
// Libs
import { getLangFromUrl, useTranslations } from "../../lib/i18n/utils";
import { Image } from "astro:assets";
import clsx from "clsx";

// Icons (if needed)
import { FaCheck } from "react-icons/fa";

// Components (reuse existing)
import H2 from "../atoms/H2.astro";

// Lang
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

// Types
interface Props {
  title: string;
  image?: ImageMetadata;
}
const { title, image } = Astro.props;

// Generate unique ID
const id = `component-${title.toLowerCase().replace(/\s+/g, '-')}`;
---

<section 
  id={id}
  aria-labelledby={`${id}-title`}
  class=""
>
  <div class="">
    <H2 id={`${id}-title`} class="">
      {title}
    </H2>
    
    {image && (
      <Image
        src={image}
        alt=""
        title=""
        width={600}
        height={400}
        loading="lazy"
        class=""
      />
    )}
    
    <slot />
  </div>
</section>
```

### Step 3: Integrate Translation System

All text content should come from translation files, not be hardcoded.

#### Translation Types

**Global Translations** (`global.*` keys)
- Used for components that appear on multiple pages with the same content
- Examples: Header, Footer, common buttons
- Location: `src/messages/en.json` and `src/messages/es.json` under `global.*`

**Page-Specific Translations** (`pages.{pageName}.*` keys)
- Used for components with content that changes per page
- Examples: Page-specific banners, unique sections
- Location: `src/messages/en.json` and `src/messages/es.json` under `pages.{pageName}.*`

#### Translation Integration Example

```astro
---
// Get translations
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

// For global component
const buttonText = t("global.ui.button.bookNow");

// For page-specific component (requires page prop)
interface Props {
  page: string;
}
const { page } = Astro.props;
const title = t(`pages.${page}.section.title`);
const description = t(`pages.${page}.section.description`);
---
```

#### Use Dummy Data Initially

When creating the component, use dummy translation keys:

```json
// en.json
{
  "pages": {
    "yourPage": {
      "yourSection": {
        "title": "Your Section Title",
        "description": "Your section description in English"
      }
    }
  }
}

// es.json
{
  "pages": {
    "yourPage": {
      "yourSection": {
        "title": "Título de tu sección",
        "description": "Descripción de tu sección en español"
      }
    }
  }
}
```

### Step 4: Add Component to Page

After creating the component, add it to the target page:

```astro
---
import YourNewComponent from "../components/organisms/YourNewComponent.astro";
---

<!-- Add at the bottom of the main content area -->
<YourNewComponent page="pageName" />
```

### Step 5: Match OpenSpec Proposal Names

**CRITICAL**: Ensure your component and file names match the OpenSpec proposal name.

If your proposal is named `add-testimonials-section`:
- Component file: `Testimonials.astro` or `TestimonialsSection.astro`
- Translation keys: `pages.{page}.testimonials.*`
- Component name should be descriptive and match the proposal intent

## SEO Best Practices Checklist

Before finalizing your component, verify:

- [ ] Uses semantic HTML5 elements
- [ ] Has proper heading hierarchy (only one h1 per page, proper h2/h3 nesting)
- [ ] Includes ARIA labels for accessibility
- [ ] Uses Astro `Image` component for all images
- [ ] All images have `alt` and `title` attributes
- [ ] Interactive elements have unique IDs
- [ ] Uses `loading="lazy"` for below-fold images
- [ ] ReactIcons have `aria-hidden="true"` for decorative use
- [ ] All text comes from translation files
- [ ] No hardcoded strings in the component
- [ ] Component is added to the target page

## Common Patterns

### Atom Component (Simple)

```astro
---
interface Props {
  text: string;
  href?: string;
}
const { text, href } = Astro.props;
---

<a href={href} class="" aria-label={text}>
  {text}
</a>
```

### Molecule Component (With Translations)

```astro
---
import { getLangFromUrl, useTranslations } from "../../lib/i18n/utils";

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

interface Props {
  titleKey: string;
}
const { titleKey } = Astro.props;
const title = t(titleKey);
---

<div class="">
  <h3 class="">{title}</h3>
  <slot />
</div>
```

### Organism Component (Complex)

```astro
---
import { getLangFromUrl, useTranslations } from "../../lib/i18n/utils";
import { Image } from "astro:assets";
import H2 from "../atoms/H2.astro";
import Card from "../molecules/Card.astro";

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

interface Props {
  page: string;
  image: ImageMetadata;
}
const { page, image } = Astro.props;

const title = t(`pages.${page}.section.title`);
const items = t(`pages.${page}.section.items`);
---

<section id="section-name" aria-labelledby="section-title" class="">
  <div class="">
    <H2 id="section-title" class="">
      {title}
    </H2>
    
    <Image
      src={image}
      alt={t(`pages.${page}.section.imageAlt`)}
      title={t(`pages.${page}.section.imageTitle`)}
      width={800}
      height={600}
      loading="lazy"
      class=""
    />
    
    <div class="">
      {items.map((item) => (
        <Card title={item.title} description={item.description} />
      ))}
    </div>
  </div>
</section>
```

## Resources

- See `examples/` directory for real component examples
- See `resources/component-checklist.md` for detailed checklist
- See `resources/translation-structure.md` for translation guidelines
- See `resources/seo-tags-reference.md` for HTML semantic tags

## Next Steps

After creating the component:

1. **Validate** - Use the `component-validator` skill to check SEO and DRY compliance
2. **Translate** - Use the `component-translator` skill to add proper translations
3. **Style** - Add CSS classes and styling
4. **Test** - Verify the component renders correctly on the page
