# Design: Update Merida FAQ Content

## Overview
The goal is to provide accurate, localized FAQ content for the Merida transportation page while improving the `FaqSection` component to allow for page-specific descriptions.

## Translation Keys
The `cancunToMerida` page uses the `page="cancunToMerida"` identifier. The following structure will be used in the translation files:

```json
"cancunToMerida": {
    "faq": {
        "title": "...",
        "description": "...",
        "items": {
            "service24h": { "question": "...", "answer": "..." },
            "doorToDoor": { "question": "...", "answer": "..." },
            "largeGroups": { "question": "...", "answer": "..." },
            "priceIncludes": { "question": "...", "answer": "..." }
        }
    }
}
```

## Component Modification
`FaqSection.astro` will be updated to:

```astro
const title = t(`pages.${page}.faq.title`);
const localDescription = t(`pages.${page}.faq.description`);
const globalDescription = t("global.sections.faq.description");
const description = localDescription && localDescription !== `pages.${page}.faq.description` 
    ? localDescription 
    : globalDescription;
```
*Note: The `t` function returns the key if not found, so we check if `localDescription` is different from the key itself.*

## Architectural Alignment
This change aligns with requirement 47 of `openspec/specs/translation-system/spec.md`, which states that dynamic text changing contexts per page but sharing the same section layout MUST be in `pages.<page>.<section>`.
