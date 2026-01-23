# Spec: Localized Routing System

## MODIFIED Requirements

### Requirement: Clean English URLs
- English pages MUST be served from the root path without a `/en/` prefix.
#### Scenario: Accessing the about page in English
- Given the site is deployed
- When I visit `/about-us`
- Then I see the English "About Us" page

#### Scenario: Accessing the home page in English
- Given the site is deployed
- When I visit `/`
- Then I see the English Home page

### Requirement: Localized Spanish Slugs
- Spanish pages MUST be served from the `/es/` prefix with localized slug names.
#### Scenario: Accessing the about page in Spanish
- Given the site is deployed
- When I visit `/es/sobre-nosotros`
- Then I see the Spanish "About Us" page

#### Scenario: Accessing the home page in Spanish
- Given the site is deployed
- When I visit `/es/`
- Then I see the Spanish Home page

### Requirement: Route Map Configuration
- The routing configuration MUST be stored in `src/messages/en.json` and `src/messages/es.json` under a `routes` key.
- Each page key MUST be identical in both files to ensure correct cross-language mapping.
#### Scenario: Checking route consistency
- Given `en.json` has `"taxi": "cancun-airport-taxi"`
- And `es.json` has `"taxi": "taxi-aeropuerto-cancun"`
- Then they are correctly mapped by the common key "taxi"

### Requirement: Dynamic Utility Linking
- The `getLocalizedPath(pageKey, targetLang)` utility MUST return the correct URL for any given page and language.
#### Scenario: Generating a Spanish link
- Given the page key is "taxi"
- When I call `getLocalizedPath('taxi', 'es')`
- Then it returns `/es/taxi-aeropuerto-cancun`

#### Scenario: Generating an English link
- Given the page key is "home"
- When I call `getLocalizedPath('home', 'en')`
- Then it returns `/`

### Requirement: Intelligent Language Switcher
- The language switcher MUST detect the current `pageKey` and link to its counterpart in the other language using its localized slug.
#### Scenario: Switching from Spanish to English
- Given I am on `/es/sobre-nosotros`
- When I look at the language switcher
- Then it links to `/about-us`

### Requirement: SE0 Metadata Consistency
- All SEO related tags (canonical, hreflang, open-graph) MUST reflect the correct localized slugs.
#### Scenario: Checking hreflang on a Spanish page
- Given I am on `/es/taxi-aeropuerto-cancun`
- Then the `hreflang="en"` link MUST point to `/cancun-airport-taxi`.

### Requirement: Legacy Link Redirection
- All legacy URLs using the `/en/` prefix MUST be redirected to the root level equivalent.
#### Scenario: Visiting an old English link
- When I visit `/en/about-us`
- Then I am redirected to `/about-us` with a 301 status.
