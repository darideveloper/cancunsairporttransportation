# Design

## Logic
The `private-airport-transfer-cancun.astro` page uses the `PrivateDetails` component, which fetches translations from `pages.private.privateDetails` (implied by `page="private"`).
We will update the JSON files to reflect the provided HTML content.

## Data Structure
The JSON structure for `privateDetails` is:
```json
{
  "title": "...",
  "description": "...",
  "table": {
    "title": "...",
    "headers": { ... },
    "rows": [ ... ]
  },
  "cta": { ... }
}
```
The description will be a markdown string (paragraphs separated by `\n\n`).
