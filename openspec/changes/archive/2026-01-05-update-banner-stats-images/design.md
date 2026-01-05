# Design: Banner Stats Images

## Component Updates
-   **File**: `src/components/organisms/BannerStats.astro`
-   **Removals**: `react-icons` imports.
-   **Additions**:
    -   Import `Image` from `astro:assets`.
    -   Import appropriate images (initially reusable placeholders from `src/assets/images/` or new ones if available; since none are strictly defined for stats, I will use `reliable-company.webp` or similar as placeholders or assume the user will provide them. *Correction*: I will assume I need to hook up the *logic* for images. I will use `logo.svg` as a temporary placeholder for the stats if no specific "stat" images exist, or check if I should request generation. Given the prompt "it should use images", I will stick to the structural change using available images as placeholders).
    -   *Better approach*: I will create a task to add dummy/placeholder images if needed, but structurally I will use `src/assets/images/trip-advisor.webp` or similar just to verify logic, or duplicates.

## Data Structure
The `stats` array will change from:
```javascript
{ key: 'clients', icon: FaUsers }
```
to:
```javascript
import clientsImg from '../../assets/images/reliable-company.webp'; // Example
// ...
{ key: 'clients', image: clientsImg }
```

## Translation Schema
Extensions to `src/messages/en.json` and `es.json`:
```json
"bannerStats": {
  "stats": {
    "clients": {
       "counter": "...",
       "text": "...",
       "imageAlt": "Icon representing happy clients",
       "imageTitle": "Happy Clients Icon"
    }
  }
}
```

## Accessibility (A11y) & SEO
-   **Why**: `<Image />` optimizes assets (WebP/AVIF).
-   **Attributes**: `alt` and `title` are now mandatory and pulled from translations.
-   **Wrapper**: The image container might stay, but internal `<svg>` is replaced by `<img>` (via Astro component).
