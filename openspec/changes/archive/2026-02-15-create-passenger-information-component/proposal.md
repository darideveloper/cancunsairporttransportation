# Proposal: Create Passenger Information Component

Create a new `PassengerInformation` component for the booking flow to collect traveler details.

## User Review Required

> [!IMPORTANT]
> The component will collect First Name, Last Name, Email, Phone, and Notes.
> The layout matches the provided screenshot with a multi-column grid on desktop.
> It will use the existing `useSearchFormStore` for state management.

## Proposed Changes

### Summary
Implement `PassengerInformation.tsx` as a functional component that syncs with Zustand.

### Components

#### [PassengerInformation.tsx](../../../src/components/molecules/booking/PassengerInformation.tsx) NEW
- Title: "Passenger information" (localized).
- Fields:
    - **First Name** (mapped to `firstName` in store, labeled "Full name" as per screenshot).
    - **Last Name** (mapped to `lastName` in store).
    - **Email** (mapped to `email` in store).
    - **Phone** (mapped to `phone` in store).
    - **Notes** (mapped to `notes` in store, using `Textarea`).
- Layout:
    - Title at the top.
    - Two columns on desktop for Name fields.
    - Two columns on desktop for Email/Phone fields.
    - Full width for Notes.

### Translations

#### [en.json](../../../src/messages/en.json) MODIFIED
- Restore `passengerInformation` section under `pages.register`.

#### [es.json](../../../src/messages/es.json) MODIFIED
- Restore `passengerInformation` section under `pages.register`.

## High-Level Tasks
1. Restore translations in `en.json` and `es.json`.
2. Create `PassengerInformation.tsx`.
3. Verify layout and store synchronization.
