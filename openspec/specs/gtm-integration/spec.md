# gtm-integration Specification

## Purpose
The purpose of this specification is to define the requirements for integrating Google Tag Manager (GTM) into the application's base layout.

## Requirements
### Requirement: GTM Head Initialization
The application MUST initialize Google Tag Manager in the global layout's `<head>` to ensure tracking capability across all pages.

#### Scenario: Script Injection in Head
- **Given** any page in the application is visited.
- **Then** the GTM script with container ID `GTM-WKXM5PMV` MUST be present as early as possible in the `<head>`.

### Requirement: GTM Body Initialization
The application MUST include the GTM `noscript` snippet immediately after the opening `<body>` tag to ensure tracking for users with JavaScript disabled.

#### Scenario: Script Injection in Body
- **Given** any page in the application is visited.
- **Then** the GTM `noscript` iframe with container ID `GTM-WKXM5PMV` MUST be present immediately following the opening `<body>` tag.

### Requirement: Data Layer Persistence
The GTM implementation MUST respect any existing `window.dataLayer` initialization (e.g., from `gtag.js`).

#### Scenario: Coexistence with gtag.js
- **Given** both GTM and `gtag.js` are initialized.
- **Then** only one `dataLayer` object MUST be initialized.
- **And** both scripts MUST be able to push events to it.
