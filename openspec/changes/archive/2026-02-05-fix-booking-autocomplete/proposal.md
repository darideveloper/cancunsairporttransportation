# Fix Booking Autocomplete API Integration

## Problem
The booking form's location autocomplete search is not displaying results despite the API returning data. This is caused by a mismatch between the expected data structure in the frontend and the actual response format from the legacy API.
- The frontend expects an array of objects at the root.
- The API returns an object with an `items` array.
- The frontend expects `lat`/`lng` as numbers at the top level.
- The API returns `geo.lat` and `geo.lng` as strings.

## Solution
Update the `LocationAutocomplete` component to:
1. Access the `items` array from the API response.
2. Map the response items to the internal `LocationData` interface, extracting coordinates from the `geo` object and converting them to numbers.
