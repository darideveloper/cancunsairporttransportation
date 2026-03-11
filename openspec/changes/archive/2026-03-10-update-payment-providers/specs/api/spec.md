# API Specification: Payment Provider Update
## ADDED Requirements



### Requirement: Add `paypal_id` and `uuid` to `ReservationResponse`
The `ReservationResponse` interface SHALL include `paypal_id` and `uuid` as optional string fields to support the PayPal SDK flow.

#### Scenario: `ReservationResponse` should have `paypal_id` and `uuid`
- GIVEN the `ReservationResponse` interface
- WHEN it is used in the `createReservation` API call
- THEN it must support `paypal_id` and `uuid` as optional string fields

### Requirement: Implement `capturePayment` endpoint
The system SHALL provide a `capturePayment` function that calls the backend capture endpoint to finalize the transaction.

#### Scenario: `capturePayment` function
- GIVEN a PayPal order ID
- WHEN calling `capturePayment`
- THEN it must `POST` to `${import.meta.env.PUBLIC_API_BASE}/legacy/capture/`
- AND return a `CapturePaymentResponse`



### Requirement: New Capture API Types
The system SHALL define the `CapturePaymentPayload` and `CapturePaymentResponse` structures in `legacy-api.types.ts`.

#### Scenario: `CapturePaymentPayload` and `CapturePaymentResponse`
- GIVEN the `legacy-api.types.ts` file
- WHEN defining the new types
- THEN `CapturePaymentPayload` must have an `id` string field
- AND `CapturePaymentResponse` must have `status` and `details` fields
