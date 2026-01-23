---
name: component-translator
description: Translate component content into English and Spanish using the project's i18n system. Use when a component needs translation integration or when updating existing translations.
---

# Component Translator Skill

This skill guides you through translating component content into both English and Spanish, integrating with the project's i18n translation system.

## When to Use This Skill

- Adding translations for a newly created component
- Updating existing component translations
- Extracting hardcoded text to translation files
- Adding new languages to existing components
- Updating text content on specific pages

## Prerequisites

Before translating a component:

1. **Component exists** - The component file has been created
2. **HTML structure is complete** - All text placeholders are in place
3. **Translation keys are identified** - Know what text needs translation
4. **Page context is clear** - Understand if translations are global or page-specific

## Translation Workflow

### Step 1: Analyze the Translation System

Before making changes, understand how the current translation system works.

#### Review Translation Files

```bash
# View English translations
cat src/messages/en.json

# View Spanish translations
cat src/messages/es.json
```

#### Understand the Structure

The translation files have two main sections:

1. **Global translations** (`global.*`) - Shared across multiple pages
2. **Page-specific translations** (`pages.{pageName}.*`) - Unique to each page

**Example structure**:
```json
{
  "global": {
    "branding": { ... },
    "ui": { ... },
    "sections": { ... }
  },
  "pages": {
    "home": { ... },
    "private": { ... },
    "luxury": { ... }
  }
}
```

### Step 2: Extract Text from Component

Identify all text that needs translation:

#### Visible Text
- Headings and titles
- Paragraphs and descriptions
- Button labels
- Link text
- List items
- Form labels

#### Metadata (Often Forgotten!)
- Image `alt` attributes
- Image `title` attributes
- `aria-label` attributes
- `aria-describedby` text
- Button `title` attributes
- Link `aria-label` attributes

#### Example Component Analysis

```astro
<section aria-labelledby="section-title">
  <h2 id="section-title">Our Services</h2>
  <Image
    src={serviceImage}
    alt="Professional transportation service"
    title="Cancun Airport Transportation"
  />
  <p>We provide reliable transportation services.</p>
  <button aria-label="Book your transportation now">
    Book Now
  </button>
</section>
```

**Text to extract**:
- Visible: "Our Services", "We provide reliable transportation services.", "Book Now"
- Metadata: "Professional transportation service", "Cancun Airport Transportation", "Book your transportation now"

### Step 3: Determine Translation Type

For each piece of text, determine if it's **global** or **page-specific**.

#### Global Translations

Use when the text:
- Appears on multiple pages with the same content
- Is part of a reusable component (Header, Footer)
- Is a common UI element (buttons, labels)

**Examples**:
- "Book Now" button (appears everywhere)
- Footer links and text
- Navigation menu items
- Common section titles used across pages

#### Page-Specific Translations

Use when the text:
- Is unique to one page
- Changes based on the page context
- Is part of page-specific content

**Examples**:
- Page titles and descriptions
- Page-specific banners
- Unique section content
- Page-specific testimonials

### Step 4: Check for Existing Keys

**CRITICAL**: Before creating new translation keys, check if they already exist!

#### Search for Existing Keys

```bash
# Search for a key in English translations
grep -r "includes" src/messages/en.json

# Search for specific text
grep -r "Book Now" src/messages/en.json
```

#### Common Existing Keys

Check these locations first:
- `global.ui.*` - UI elements (buttons, labels)
- `global.sections.*` - Common sections
- `pages.{pageName}.*` - Page-specific content

**Don't create duplicate keys!** If a key exists, reuse it.

### Step 5: Add Translations to JSON Files

Add translations to **both** `en.json` and `es.json` simultaneously.

#### For Global Translations

**en.json**:
```json
{
  "global": {
    "sections": {
      "yourSection": {
        "title": "Section Title in English",
        "description": "Description in English",
        "imageAlt": "Image description in English",
        "imageTitle": "Image title in English"
      }
    }
  }
}
```

**es.json**:
```json
{
  "global": {
    "sections": {
      "yourSection": {
        "title": "Título de Sección en Español",
        "description": "Descripción en Español",
        "imageAlt": "Descripción de imagen en Español",
        "imageTitle": "Título de imagen en Español"
      }
    }
  }
}
```

#### For Page-Specific Translations

**en.json**:
```json
{
  "pages": {
    "home": {
      "testimonials": {
        "title": "Comments from our customers",
        "description": "Discover why our customers choose us",
        "items": {
          "item1": {
            "name": "John Doe",
            "text": "Great service!",
            "imageAlt": "Comment from our customer John Doe",
            "stars": "5"
          }
        }
      }
    }
  }
}
```

**es.json**:
```json
{
  "pages": {
    "home": {
      "testimonials": {
        "title": "Comentarios de nuestros clientes",
        "description": "Descubre por qué nuestros clientes nos eligen",
        "items": {
          "item1": {
            "name": "John Doe",
            "text": "¡Excelente servicio!",
            "imageAlt": "Comentario de nuestro cliente John Doe",
            "stars": "5"
          }
        }
      }
    }
  }
}
```

### Step 6: Update Component to Use Translations

Modify the component to use translation keys instead of hardcoded text.

#### Before (Hardcoded)

```astro
<section>
  <h2>Our Services</h2>
  <p>We provide reliable transportation.</p>
</section>
```

#### After (With Translations)

```astro
---
import { getLangFromUrl, useTranslations } from "../../lib/i18n/utils";

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

interface Props {
  page: string;
}
const { page } = Astro.props;

const title = t(`pages.${page}.services.title`);
const description = t(`pages.${page}.services.description`);
---

<section>
  <h2>{title}</h2>
  <p>{description}</p>
</section>
```

### Step 7: Verify JSON Syntax

**CRITICAL**: Invalid JSON will break the entire site!

#### Common JSON Errors

❌ **Trailing commas**:
```json
{
  "title": "Title",
  "description": "Description", // ← Remove this comma
}
```

✅ **Correct**:
```json
{
  "title": "Title",
  "description": "Description"
}
```

❌ **Missing quotes**:
```json
{
  title: "Title" // ← Keys must be quoted
}
```

✅ **Correct**:
```json
{
  "title": "Title"
}
```

❌ **Single quotes**:
```json
{
  'title': 'Title' // ← Must use double quotes
}
```

✅ **Correct**:
```json
{
  "title": "Title"
}
```

#### Validate JSON

```bash
# Check JSON syntax
cat src/messages/en.json | jq .
cat src/messages/es.json | jq .
```

If there are errors, fix them before proceeding.

### Step 8: Match OpenSpec Proposal Names

Ensure translation keys match the OpenSpec proposal name.

**Example**:
- Proposal: `add-testimonials-section`
- Translation keys: `pages.{page}.testimonials.*`
- Component: `Testimonials.astro`

## Translation Best Practices

### Key Naming Conventions

1. **Use camelCase**
   ```json
   "imageAlt": "...",
   "bookNow": "...",
   "testimonialTitle": "..."
   ```

2. **Be descriptive**
   ```json
   // Good
   "bannerTitle": "Cancun Airport Transportation"
   
   // Bad
   "title": "Cancun Airport Transportation"
   ```

3. **Group related keys**
   ```json
   {
     "testimonials": {
       "title": "...",
       "description": "...",
       "items": { ... }
     }
   }
   ```

### Translation Quality

1. **Professional Spanish**
   - Use formal "usted" form for business content
   - Avoid machine translation errors
   - Maintain consistent terminology

2. **Natural Language**
   - Don't translate word-for-word
   - Adapt to cultural context
   - Use natural phrasing

3. **Consistent Terminology**
   - "Transportation" → "Transporte" (not "Transportación")
   - "Shuttle" → "Traslado"
   - "Book Now" → "Reservar Ahora"

### Metadata Translation

Always translate metadata:

```json
{
  "imageAlt": "Professional driver greeting passengers at Cancun Airport",
  "imageTitle": "Cancun Airport Transportation Service",
  "ariaLabel": "Book your transportation now"
}
```

**Spanish**:
```json
{
  "imageAlt": "Conductor profesional saludando a pasajeros en el Aeropuerto de Cancún",
  "imageTitle": "Servicio de Transporte del Aeropuerto de Cancún",
  "ariaLabel": "Reserva tu transporte ahora"
}
```

## Common Translation Patterns

### Pattern 1: Simple Text

**en.json**:
```json
{
  "title": "Our Services",
  "description": "We provide reliable transportation"
}
```

**es.json**:
```json
{
  "title": "Nuestros Servicios",
  "description": "Proporcionamos transporte confiable"
}
```

### Pattern 2: Array of Items

**en.json**:
```json
{
  "items": [
    "Highly Trained Staff",
    "Flight Monitoring",
    "Travel Insurance"
  ]
}
```

**es.json**:
```json
{
  "items": [
    "Personal Altamente Capacitado",
    "Monitoreo de Vuelos",
    "Seguro de Viaje"
  ]
}
```

### Pattern 3: Complex Objects

**en.json**:
```json
{
  "cards": {
    "luxury": {
      "title": "Luxury Transportation",
      "price": "84.00",
      "description": "Elevate your experience...",
      "imageAlt": "Luxury Suburban vehicle",
      "ctaText": "Book now"
    }
  }
}
```

**es.json**:
```json
{
  "cards": {
    "luxury": {
      "title": "Transporte de Lujo",
      "price": "84.00",
      "description": "Eleva tu experiencia...",
      "imageAlt": "Vehículo Suburban de lujo",
      "ctaText": "Reservar ahora"
    }
  }
}
```

### Pattern 4: Dynamic Content with Placeholders

**en.json**:
```json
{
  "imageAlt": "Client photo {index}",
  "imageTitle": "Client photo {index}"
}
```

**es.json**:
```json
{
  "imageAlt": "Foto del cliente {index}",
  "imageTitle": "Foto del cliente {index}"
}
```

**Usage**:
```astro
const alt = t("global.clientGallery.imageAlt").replace("{index}", index);
```

## OpenSpec Proposal Integration

When creating an OpenSpec proposal for translations:

### Include All Text Details

Document the exact text in both languages:

```markdown
## Translations

### English
- Title: "Comments from our customers"
- Description: "Discover why our customers choose us"
- Item 1 Name: "John Doe"
- Item 1 Text: "Great service!"

### Spanish
- Title: "Comentarios de nuestros clientes"
- Description: "Descubre por qué nuestros clientes nos eligen"
- Item 1 Name: "John Doe"
- Item 1 Text: "¡Excelente servicio!"
```

### Specify Translation Keys

```markdown
## Translation Keys

Location: `pages.home.testimonials.*`

- `title` - Section title
- `description` - Section description
- `items.item1.name` - Customer name
- `items.item1.text` - Customer review
- `items.item1.imageAlt` - Customer image alt text
```

## Checklist

Before finalizing translations:

- [ ] Extracted all visible text from component
- [ ] Extracted all metadata (alt, title, aria-label)
- [ ] Determined if translations are global or page-specific
- [ ] Checked for existing translation keys
- [ ] Added translations to both `en.json` and `es.json`
- [ ] Used proper key naming conventions (camelCase)
- [ ] Validated JSON syntax (no errors)
- [ ] Updated component to use translation keys
- [ ] Tested component in both English and Spanish
- [ ] Verified all text displays correctly
- [ ] Matched OpenSpec proposal naming
- [ ] No hardcoded strings remain in component

## Resources

- See `examples/` directory for translation examples
- See `resources/translation-keys-guide.md` for key naming
- See `resources/metadata-checklist.md` for metadata translation
- See `resources/json-structure-reference.md` for JSON structure

## Troubleshooting

### Translation Not Showing
1. Check key exists in both language files
2. Verify key path is correct
3. Ensure `page` prop is passed (for page-specific translations)
4. Check for typos in translation key

### JSON Syntax Error
1. Validate JSON with `jq`
2. Check for trailing commas
3. Verify all quotes are double quotes
4. Ensure proper nesting and brackets

### Wrong Language Displaying
1. Check `getLangFromUrl(Astro.url)` is called
2. Verify `useTranslations(lang)` receives correct language
3. Ensure URL has language prefix (`/en/` or `/es/`)
