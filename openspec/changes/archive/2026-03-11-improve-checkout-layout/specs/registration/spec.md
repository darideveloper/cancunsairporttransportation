# Specification: Registration Page Enhancements

## ADDED Requirements

### Requirement: Layout Consistency for Payment Sections
The payment section SHALL adjust its layout based on the active state of the payment method to ensure all information remains accessible.

#### Scenario: Payment section with active card form
- **Given**: The user has selected "Credit / Debit Card" and clicked "CONTINUE".
- **When**: The card form is rendered in the `BookingSubmission` component.
- **Then**: The parent container SHOULD allow the card form to expand downwards while remaining part of the sticky sidebar.
- **And**: The vehicle summary and price total SHALL remain at the top of the sticky sidebar to provide context for the transaction.
