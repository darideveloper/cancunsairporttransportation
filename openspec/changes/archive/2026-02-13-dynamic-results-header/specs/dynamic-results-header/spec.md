# Capability: Dynamic Results Header

The Results page must display a dynamic subtitle indicating the search route.

## ADDED Requirements

### Requirement: Display dynamic route text
The system MUST display a heading with the route information based on the selection in the search store.

#### Scenario: Display route in English
- **Given** the user is viewing the results page in English
- **And** `locationFromData.name` is "Puerto Juárez"
- **And** `locationToData.name` is "Akumal"
- **Then** the header MUST display "Shuttle from Puerto Juárez to Akumal"

#### Scenario: Display route in Spanish
- **Given** the user is viewing the results page in Spanish
- **And** `locationFromData.name` is "Juárez"
- **And** `locationToData.name` is "Akumal"
- **Then** the header MUST display "Traslado de Juárez a Akumal"

#### Scenario: Missing location data
- **Given** one or both location data points are missing from the store
- **Then** the component SHOULD NOT render any text or render a blank space to avoid layout shifts.

### Requirement: Reactivity
The component MUST be a React component using the Zustand store.

#### Scenario: Reactive update
- **Given** the user updates their search in the sidebar
- **And** the store is updated with new location names
- **Then** the header text MUST update immediately without a page reload.
