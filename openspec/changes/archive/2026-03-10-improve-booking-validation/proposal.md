---
change-id: improve-booking-validation
title: Improve Booking Registration Validation
description: Enhances the registration form by including Airline and Flight Number in the validation schema as optional fields and ensuring they are correctly sent to the backend.
status: proposed
---

# Proposal: Improve Booking Registration Validation

## Why
Currently, the registration form collects "Airline" and "Flight Number" in the `ArrivalInformation` section, but these fields are not part of the `bookingRegistrationSchema` in the `search-form` store. Additionally, while `flight_number` is sent to the API, the `airline` field is ignored in the payload construction, even if provided by the user.

## What Changes
1.  **Update Zod Schema**: Modify `bookingRegistrationSchema` in `src/store/search-form.ts` to include `airline` and `flightNumber` as optional strings.
2.  **Update UI**: Ensure `ArrivalInformation.tsx` correctly handles these fields as optional and triggers `validateField` on blur.
3.  **Update API Payload**: Modify the `handleSubmit` function in `BookingSubmission.tsx` to include the `airline` in the payload sent to the `/legacy/create/` endpoint.
4.  **Update Payload Interface**: Add `airline` to `CreateReservationPayload` in `src/lib/transportation/legacy-api.types.ts`.

## Impact
- **Data Integrity**: Ensures that if a user provides arrival information, it is correctly persisted in the store and sent to the backend.
- **Backend Consistency**: Aligns the frontend submission with the backend's ability to receive both airline and flight number data.
