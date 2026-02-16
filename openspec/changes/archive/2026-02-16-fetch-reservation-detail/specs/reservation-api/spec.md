# Spec: Reservation API Integration

## ADDED Requirements

### Requirement: Fetch Reservation Data
The system MUST be able to fetch reservation details from the legacy backend using the confirmation code and email.

#### Scenario: Fetch Reservation Details
Given a valid reservation code and email
When `getReservation` is called
Then it should return the full `ReservationResponse` matching the documentation in `docs/MyBookingProxyView-external.md`

### Requirement: API Error Handling
The system MUST gracefully handle API errors and return descriptive messages.

#### Scenario: Handle API Errors
Given an invalid code or email
When `getReservation` is called
Then it should throw a descriptive error based on the API response
