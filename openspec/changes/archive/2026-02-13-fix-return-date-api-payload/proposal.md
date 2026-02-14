# Fix Return Date in API Payload

## Context
Currently, when a user selects "Round Trip" in the booking form, the `returnDate` and `returnTime` are stored in the state but are **not sent** to the legacy API. This results in the API treating the request without a return schedule or missing critical info.

The `LegacyQuoteRequest` interface in `src/lib/transportation/legacy-api.types.ts` defines `LegacyDetails` with an optional `pickup` field.

## Proposal
We will update `src/lib/transportation/api.ts` to include the return date and time in the `end.pickup` field of the payload when the trip type is "round-trip".

## Requirements
- **Pass Return Date**: When `tripType` is "roundTrip", construct the `pickup` string for the `end` object using `returnDate` and `returnTime`.
- **Validation**: Ensure `returnDate` and `returnTime` are present if `tripType` is "roundTrip" before sending the request.

## Impact
- **Backend**: Will receive the correct return schedule.
- **Frontend**: No visible UI changes, but results should be more accurate.

## Out of Scope
- Changing the UI of the results page.

## Implementation Details

### `src/lib/transportation/api.ts`

1.  **Validation**: Update the initial validation check to ensure return date and time are present for round trips.

```typescript
  // Validate required keys
  if (
    !searchFormState.locationFromData ||
    !searchFormState.locationToData ||
    !searchFormState.departureDate ||
    !searchFormState.departureTime ||
    (searchFormState.tripType === "roundTrip" &&
      (!searchFormState.returnDate || !searchFormState.returnTime))
  ) {
    console.warn("Missing required search form data");
    return [];
  }
```

2.  **Payload Construction**: Conditionally add the `pickup` field to the `end` object.

```typescript
    end: {
      place: searchFormState.locationToData.name,
      lat: searchFormState.locationToData.lat.toString(),
      lng: searchFormState.locationToData.lng.toString(),
      ...(searchFormState.tripType === "roundTrip" && {
        pickup: `${searchFormState.returnDate} ${searchFormState.returnTime}`,
      }),
    },
```
