# Design

## Components
`RatesTable.astro` already supports fetching page-specific data if the `page` prop is provided. It looks for `pages.{page}.ratesTable.destinations`.

## Data Structure
The Json structure for `destinations` is a Record of `DestinationData`.
```typescript
interface DestinationData {
  name: string;
  privateOw: string;
  privateRt: string;
  luxuryOw: string;
  luxuryRt: string;
  groupOw: string;
  groupRt: string;
}
```
We will populate this structure for `merida`. Since the user input does not include Group prices, we will set them to "N/A" or empty string to match the desired output (or lack thereof). Looking at `RatesTable.astro`, it iterates keys. If we pass empty string, it shows empty cell.

## Internationalization
We will update both English and Spanish definition files.

### Proposed JSON Updates

**`src/messages/en.json`**:
```json
"pages": {
    "cancunToMerida": {
        "ratesTable": {
            "destinations": {
                "merida": {
                    "name": "Merida",
                    "privateOw": "$525 USD",
                    "privateRt": "$1,045 USD",
                    "luxuryOw": "$995 USD",
                    "luxuryRt": "$1,960 USD",
                    "groupOw": "N/A",
                    "groupRt": "N/A"
                }
            }
        }
    }
}
```

**`src/messages/es.json`**:
```json
"pages": {
    "cancunToMerida": {
        "ratesTable": {
            "destinations": {
                "merida": {
                    "name": "Mérida",
                    "privateOw": "$9,975 MXN",
                    "privateRt": "$19,855 MXN",
                    "luxuryOw": "$18,905 MXN",
                    "luxuryRt": "$37,240 MXN",
                    "groupOw": "N/A",
                    "groupRt": "N/A"
                }
            }
        }
    }
}
```
