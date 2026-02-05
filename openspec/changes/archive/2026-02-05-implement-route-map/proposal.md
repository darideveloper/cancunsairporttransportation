# Proposal: Implement Google Maps Route Map on Results Page

## Goal
Implement a small Google Maps route map at the top left corner of the results page to visualize the trip between selected coordinates.

## Scope
- Create a reusable `RouteMap` React component.
- Integrate the Google Maps JavaScript API.
- Use coordinates from `useSearchFormStore` (Zustand).
- Embed the component in the Results page (`src/components/pages/store/Results.astro`).

## Reasoning
Visualizing the route enhances the user experience by providing immediate geographical context for their booking. Using the coordinates saved in storage ensures consistency with the user's previous selection.

## Dependencies
- Google Maps JavaScript API Key: `AIzaSyALbBfONqLq51yzb7xnKXECZDagWYMtbr4`
- `@googlemaps/js-api-loader` (recommended for modern React/Astro integration) or standard script tag.
- `useSearchFormStore` for location data.
