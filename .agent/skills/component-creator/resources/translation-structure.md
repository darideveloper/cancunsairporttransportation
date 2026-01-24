# Translation Structure Guide

This guide explains how to structure translations in the project's i18n system.

## Translation Files Location

- **English**: `src/messages/en.json`
- **Spanish**: `src/messages/es.json`

## Translation Structure

The translation files follow a hierarchical JSON structure:

```json
{
  "global": {
    // Global translations (used across multiple pages)
  },
  "pages": {
    // Page-specific translations
  }
}
```

## Global Translations

Use global translations for content that appears on multiple pages with the same text.

### Structure

```json
{
  "global": {
    "branding": {
      "businessName": "Cancun Airport Transportation"
    },
    "ui": {
      "button": {
        "bookNow": "Book now",
        "viewMore": "View more"
      }
    },
    "sections": {
      "includes": {
        "items": [
          "Highly Trained Staff",
          "Flight Monitoring",
          "Travel Insurance"
        ]
      }
    }
  }
}
```

### Usage in Components

```astro
---
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

const businessName = t("global.branding.businessName");
const bookNowText = t("global.ui.button.bookNow");
const includeItems = t("global.sections.includes.items");
---
```

### When to Use Global Translations

- Header navigation links
- Footer content
- Common buttons (Book Now, Contact Us, etc.)
- Shared section content (includes, features, etc.)
- Branding elements
- UI labels and messages

## Page-Specific Translations

Use page-specific translations for content that changes per page.

### Structure

```json
{
  "pages": {
    "home": {
      "title": "Cancun Airport Transportation | Official Website",
      "description": "Book your Cancun Airport Transportation...",
      "bannerTitle": "Cancun Airport Transportation",
      "testimonials": {
        "title": "Comments from our customers",
        "description": "Discover why our customers choose us",
        "items": {
          "item1": {
            "name": "Juan P.",
            "text": "I hired the transportation service...",
            "imageAlt": "Comment from our customer Juan P.",
            "stars": "5"
          }
        }
      }
    },
    "private": {
      "title": "Private Shuttle Cancun Airport",
      "includes": {
        "title": "All our Cancun Private Transfers include:",
        "imageAlt": "Private Airport Transfer Cancun",
        "imageTitle": "Private Airport Transfer Cancun"
      }
    }
  }
}
```

### Usage in Components

Components need a `page` prop to access page-specific translations:

```astro
---
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

interface Props {
  page: string;
}
const { page } = Astro.props;

const title = t(`pages.${page}.includes.title`);
const imageAlt = t(`pages.${page}.includes.imageAlt`);
---
```

### When to Use Page-Specific Translations

- Page titles and meta descriptions
- Page-specific banners
- Unique section content
- Page-specific testimonials
- Custom pricing information
- Page-specific FAQs

## Translation Key Naming Conventions

### General Rules

1. **Use camelCase** for key names
   ```json
   "businessName": "...",
   "bookNow": "...",
   "imageAlt": "..."
   ```

2. **Be descriptive** but concise
   ```json
   // Good
   "bannerTitle": "Cancun Airport Transportation"
   
   // Bad (too generic)
   "title": "Cancun Airport Transportation"
   ```

3. **Group related keys** under a common parent
   ```json
   "testimonials": {
     "title": "...",
     "description": "...",
     "items": []
   }
   ```

4. **Use consistent naming** across pages
   ```json
   // All pages use the same structure
   "pages": {
     "home": {
       "includes": { "title": "...", "imageAlt": "..." }
     },
     "private": {
       "includes": { "title": "...", "imageAlt": "..." }
     }
   }
   ```

### Metadata Keys

For images and accessibility:

```json
{
  "imageAlt": "Descriptive alt text for the image",
  "imageTitle": "Title attribute for the image",
  "ariaLabel": "ARIA label for accessibility"
}
```

### Array Items

For lists and repeated content:

```json
{
  "items": [
    "Item 1",
    "Item 2",
    "Item 3"
  ]
}
```

Or for complex items:

```json
{
  "items": {
    "item1": {
      "title": "...",
      "text": "..."
    },
    "item2": {
      "title": "...",
      "text": "..."
    }
  }
}
```

## Mixed Translation Approach

Components can use both global and page-specific translations:

```astro
---
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

interface Props {
  page: string;
}
const { page } = Astro.props;

// Page-specific
const title = t(`pages.${page}.includes.title`);
const imageAlt = t(`pages.${page}.includes.imageAlt`);

// Global (shared across pages)
const items = t("global.sections.includes.items");
---
```

This is useful when:
- Section title changes per page
- Content items are the same across pages

## Adding New Translations

### Step 1: Determine Translation Type

Ask yourself:
- Will this text appear on multiple pages with the same content? → **Global**
- Will this text be unique to this page? → **Page-specific**

### Step 2: Choose the Right Location

**Global**: Add to `global.*` section
```json
{
  "global": {
    "sections": {
      "yourSection": {
        "title": "Your Title"
      }
    }
  }
}
```

**Page-specific**: Add to `pages.{pageName}.*` section
```json
{
  "pages": {
    "yourPage": {
      "yourSection": {
        "title": "Your Title"
      }
    }
  }
}
```

### Step 3: Add to Both Language Files

Always add translations to **both** `en.json` and `es.json`:

**en.json**:
```json
{
  "pages": {
    "home": {
      "newSection": {
        "title": "New Section Title",
        "description": "Section description in English"
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
      "newSection": {
        "title": "Título de Nueva Sección",
        "description": "Descripción de la sección en español"
      }
    }
  }
}
```

### Step 4: Use in Component

```astro
---
const title = t("pages.home.newSection.title");
const description = t("pages.home.newSection.description");
---
```

## Common Patterns

### Pattern 1: Simple Text

```json
{
  "title": "My Title",
  "description": "My description"
}
```

### Pattern 2: Image with Metadata

```json
{
  "image": {
    "alt": "Descriptive alt text",
    "title": "Image title"
  }
}
```

### Pattern 3: List of Items

```json
{
  "items": [
    "First item",
    "Second item",
    "Third item"
  ]
}
```

### Pattern 4: Complex Objects

```json
{
  "cards": {
    "card1": {
      "title": "Card Title",
      "description": "Card description",
      "price": "29.99",
      "ctaText": "Book now"
    }
  }
}
```

### Pattern 5: Nested Sections

```json
{
  "testimonials": {
    "title": "Testimonials",
    "description": "What our clients say",
    "items": {
      "item1": {
        "name": "John Doe",
        "text": "Great service!",
        "stars": "5"
      }
    }
  }
}
```

## Best Practices

✅ **Do**:
- Keep translation keys consistent across pages
- Use descriptive key names
- Group related translations together
- Add translations to both language files simultaneously
- Use camelCase for key names
- Include metadata translations (alt, title, aria-label)

❌ **Don't**:
- Hardcode text in components
- Use inconsistent key naming
- Skip translations in one language file
- Create duplicate keys
- Use generic key names like "text1", "text2"
- Forget to translate metadata

## Troubleshooting

### Translation Not Showing

1. Check that the key exists in both `en.json` and `es.json`
2. Verify the key path is correct: `pages.{pageName}.{section}.{key}`
3. Ensure the `page` prop is passed to the component
4. Check for typos in the translation key

### Wrong Language Displaying

1. Verify `getLangFromUrl(Astro.url)` is called
2. Check that `useTranslations(lang)` receives the correct language
3. Ensure the URL includes the language prefix (`/en/` or `/es/`)

### Missing Translations

1. Confirm translations exist in both language files
2. Check JSON syntax is valid (no trailing commas, proper quotes)
3. Verify the translation key path matches the structure
