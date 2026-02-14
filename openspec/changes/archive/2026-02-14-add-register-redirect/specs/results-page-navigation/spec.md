# results-page-navigation Specification Delta

## Purpose
Define the navigation behavior from the results page to the register page when users select a vehicle by clicking the "Book now" button.

## ADDED Requirements

### Requirement: Vehicle Selection Navigation
When a user selects a vehicle on the results page by clicking "Book now", the system MUST navigate to the register page while preserving the language context.

#### Scenario: Selecting a vehicle from English results page
- **Given** I am on the `/results` page
- **And** vehicle options are displayed
- **When** I click the "Book now" button on any vehicle card
- **Then** the selected vehicle data MUST be stored in the Zustand store
- **And** I MUST be redirected to `/register`
- **And** the URL MUST be `/register` (not `/es/registro`)

#### Scenario: Selecting a vehicle from Spanish results page
- **Given** I am on the `/es/resultados` page
- **And** vehicle options are displayed
- **When** I click the "Book now" button on any vehicle card
- **Then** the selected vehicle data MUST be stored in the Zustand store
- **And** I MUST be redirected to `/es/registro`
- **And** the URL MUST be `/es/registro` (not `/register`)

#### Scenario: Vehicle data persistence after navigation
- **Given** I have selected a vehicle on the results page
- **When** the navigation to the register page completes
- **Then** the selected vehicle data MUST be available in the Zustand store
- **And** the data MUST persist in localStorage under the key `search-form-storage`
- **And** the stored data MUST include:
  - `token` (string)
  - `name` (string)
  - `image` (string)
  - `maxPassengers` (number)
  - `maxLuggage` (number)
  - `price` (number)
  - `currency` (string)
  - `type` (string, optional)

#### Scenario: Language detection for navigation
- **Given** I am on any results page
- **When** the system determines the redirect URL
- **Then** it MUST detect the language by checking if `window.location.pathname` starts with `/es`
- **And** if the pathname starts with `/es`, it MUST use the Spanish register URL
- **And** if the pathname does NOT start with `/es`, it MUST use the English register URL

### Requirement: Navigation Implementation Pattern
The navigation from results to register MUST follow the same pattern used in the booking form navigation.

#### Scenario: Consistent navigation pattern
- **Given** the `BookingForm` component navigates using `window.location.assign()`
- **When** implementing vehicle selection navigation
- **Then** the `VehicleBuyCards` component MUST use `window.location.assign()` for navigation
- **And** the language detection logic MUST match the pattern: `window.location.pathname.startsWith("/es")`
- **And** the URL construction MUST use hardcoded paths matching the routes configuration

#### Scenario: Navigation occurs after state update
- **Given** a user clicks "Book now" on a vehicle
- **When** the `handleVehicleSelect` function executes
- **Then** the Zustand store update MUST complete before navigation
- **And** the navigation MUST occur synchronously after the state update
- **And** there MUST be no delay or loading state between state update and navigation

## Related Specifications
- **routing-system**: Defines the route configuration and language-based URL structure
- **state-management**: Defines the Zustand store structure for booking data
- **results-page**: Defines the results page UI and vehicle display

## Implementation Notes
- The `VehicleBuyCards` component is located at `src/components/organisms/VehicleBuyCards.tsx`
- The `handleVehicleSelect` function currently stores vehicle data but does not navigate
- The register page routes are defined in `src/lib/i18n/routes.ts` as:
  - English: `register`
  - Spanish: `es/registro`
