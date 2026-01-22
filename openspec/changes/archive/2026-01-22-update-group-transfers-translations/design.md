# Design: Update Group Transfers Translations

## Architecture Changes
No architectural changes. Purely content update in JSON translation files.

## Content Updates
### Spanish (`es.json`)
- **Key**: `pages.group.privateDetails`
- **Updates**:
  - Title: "Transportación para grupos en Cancún"
  - Description: Updated paragraphs.
  - Capacity: Changed from "Hasta 16 pasajeros" to "Hasta 15 pasajeros".
  - Prices:
    - One Way: $539.82 MXN (Note: This is significantly lower than previous $1,512.00 MXN)
    - Round Trip: $1,079.82 MXN
- **Note**: The prices provided in the request for Spanish seem low (matching "Taxi" prices usually), but will be implemented as requested.

### English (`en.json`)
- **Key**: `pages.group.privateDetails`
- **Updates**:
  - Title: "Cancun Group Transportation"
  - Description: Updated paragraphs.
  - Capacity: Changed from "Up to 16 passengers" to "Up to 15 passengers".
  - Prices:
    - One Way: $124.00 USD (Converted from $2,242 MXN @ ~18.1)
    - Round Trip: $241.00 USD (Converted from $4,370 MXN @ ~18.1)

## Constraints
- Must strictly follow the text provided in the user request.
- Ensure HTML structure in `PrivateDetails.astro` is compatible (it is, as it renders from JSON strings).
