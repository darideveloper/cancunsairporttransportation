# Spec: Localized SEO Content

## ADDED Requirements

### Requirement: Define SEO data in translation files
The `pages` key in `src/messages/en.json` and `src/messages/es.json` SHALL contain SEO metadata for the home page.

#### Scenario: English metadata
Given the file `src/messages/en.json`
When the `pages` key is populated
Then it should contain a `home` object with `title`, `description`, and `keywords`.

#### Scenario: Spanish metadata
Given the file `src/messages/es.json`
When the `pages` key is populated
Then it should contain a `home` object with `title`, `description`, and `keywords`.

### Requirement: Pass SEO props in index.astro
The home page MUST pass the current language and page identifier to the `PageSEO` component.

#### Scenario: Passing props
Given `src/pages/[lang]/index.astro`
When the `PageSEO` component is rendered
Then it must receive `currentPage="home"` and `lang` props.



### Requirement: Update BaseSEO to use pages key
The `BaseSEO` component SHALL fetch its metadata from the `pages` key in the translation files.

#### Scenario: Dynamic translation lookup
Given `src/components/utils/base/BaseSEO.astro`
When it performs translation lookups
Then it should use `t("pages." + currentPage + ".title")` and related keys.

### Requirement: Cleanup hardcoded branding in BaseSEO
`BaseSEO` SHALL use business names from the `branding` key or appropriate defaults instead of hardcoded spa template names.

#### Scenario: branding lookup
Given `src/components/utils/base/BaseSEO.astro`
When it initializes the global site title
Then it should fallback to `t("branding.businessName")`.
