# Design: Translate Cancun Airport Taxi Private Details

## Architecture
The translation system uses JSON files in `src/messages/`. The `PrivateDetails.astro` component dynamically fetches content based on the `page` prop.

## Implementation Details
1.  **Direct JSON Update**: We will update the `pages.taxi.privateDetails` object in both `en.json` and `es.json`.
2.  **Consistency**: Ensure that the table headers and keys match what `PrivateDetails.astro` expects.
    - `arrival`, `departure`, `oneWay`, `roundTrip`, `capacity` are the keys used in `table.headers` and `table.rows`.
3.  **Correction**: Correct the typo in the English round trip price from `$4,370 MXN` to `$69.99 USD` to match the second row and the approximately 2x factor of the one-way price.

## Data Structure
### keys in `pages.taxi.privateDetails`
- `title`: string
- `description`: markdown string
- `table`:
    - `title`: string
    - `headers`: { arrival, departure, oneWay, roundTrip, capacity }
    - `rows`: array of { arrival, departure, oneWay, roundTrip, capacity }
- `cta`: { text, href }
