# Date Validation Design

## Overview
The goal is to prevent users from selecting past dates or times in the booking form. We will achieve this by leveraging the native `min` attribute of HTML5 `date` and `time` inputs.

## Architectural Reasoning
We are implementing validation at the component level rather than the store level to keep the implementation minimal and focused on UI/UX, as requested. This avoids introducing complex validation logic into the global state.

## Date & Time Handling
To ensure consistency, we will use the local time of the user's browser.

### Formatting
- **Date**: `YYYY-MM-DD` (ISO format part)
- **Time**: `HH:MM` (24-hour format)

### Constraints Logic
The `BookingForm` will calculate constraints dynamically:

| Field | Min Value Logic |
| :--- | :--- |
| **Departure Date** | `today` |
| **Departure Time** | If `departureDate == today` then `now`, else `undefined` |
| **Return Date** | `departureDate` OR `today` (if departure not set) |
| **Return Time** | If `returnDate == departureDate` then `departureTime`, else `undefined` |

## Trade-offs
- **Stale Values**: Since we are only updating the `min` attribute, if a user selects a valid date and then changes a previous field (e.g., changes departure to a date *after* the current return date), the return date input will show as invalid in the browser but the store value will remain until the user interacts with it.
- **Decision**: We will not implement automatic value clearing in the store to keep changes minimal, as browsers typically handle `min` validation in form submission (though our form uses `window.location.assign`). We will rely on the `isValid` check if necessary, or simply assume the user will adjust the now-invalid field before submitting.
