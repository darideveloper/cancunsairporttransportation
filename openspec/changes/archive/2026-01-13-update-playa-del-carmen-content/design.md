# Design

## Content Structure
We will introduce new nested keys under `pages.playaDelCarmen` to keep the content scoped to this page, as the provided text is specific ("Transportation from Cancun to Playa del Carmen").

Structure:
```json
"pages": {
  "playaDelCarmen": {
    "title": "...",
    "safeTrip": {
        "title": "...",
        "description": "..." // Markdown content with paragraphs
    },
    "pricing": {
        "title": "...",
        "subtitle": "...",
        "cards": {
            "luxury": { "title": "...", "price": "...", "description": "..." },
            "private": { "title": "...", "price": "...", "description": "..." },
            "group": { "title": "...", "price": "...", "description": "..." }
        },
    },
    "howToMove": {
        "title": "...",
        "content": "..." // Markdown content
    }
  }
}
```

### Shared Translations
To allow scalability, we will separate fixed labels from dynamic content.

```json
"shared": {
  "pricingCard": {
    "priceFrom": "Price from",
    "bookNow": "Book now",
    "mostPopular": "Most Popular",
    "features": {
        "privateService": "Private Service",
        "taxesIncluded": "Includes airport taxes and traveler's insurance",
        "service24h": "24H service hours"
    }
  }
}
```

## Component Usage
We will continue to use the `TextCard` component as it matches the visual structure (Image on left/right, text on the other side).
- `title` prop will receive the new localized title.
- `slot="image"` will use the new image.
- `default` slot (or content prop) will use `marked.parse()` on the new description text to render the paragraphs.
- For "How to move" section: Update ID to `how-to-move` (or similar) and use `destination.webp`.

## Pricing Section Refactor
The pricing section currently iterates over a hardcoded map and fetches `pricingTransportation`. It will be refactored to:
1.  Load `t('pages.playaDelCarmen.pricing')` related keys.
2.  Iterate over the page-specific cards.
3.  Combine page-specific data (Title, Price, Desc) with shared data (Feature list, Button text).
4.  Images: The user provided HTML with `<picture>` tags. We will use Astro `Image` component mapping to the local assets `luxury`, `standard`, `groups`.

## Assets
- Image Path: `src/assets/images/destinations/trip-advisor.webp`
- Image Path: `src/assets/images/destinations/destination.webp`
