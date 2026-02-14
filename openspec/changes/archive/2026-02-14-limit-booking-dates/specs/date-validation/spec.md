# Date & Time Validation Spec

## ADDED Requirements

### Requirement: Prevent Past Date Selection

The `DateInput` component MUST restrict users from selecting a date in the past. The minimum selectable date SHALL be the current local date.

#### Scenario: User attempts to select a past date
- **Given** the booking form is loaded
- **When** the user opens the date picker for "Departure Date"
- **Then** dates prior to today are disabled and unselectable.

### Requirement: Prevent Past Time Selection on Current Date

When the selected date is the current date, the `TimeInput` component MUST restrict users from selecting a time in the past relative to the current local time.

#### Scenario: User selects "Today" for departure
- **Given** the user has selected today's date
- **When** the user opens the time picker
- **Then** times prior to the current local time are disabled or unselectable.

### Requirement: Return Date Sequencing

The return date SHALL NOT be before the departure date. If no departure date is selected, it SHALL NOT be before the current date.

#### Scenario: User selects a departure date
- **Given** a departure date of `2026-03-01`
- **When** the user opens the return date picker
- **Then** dates before `2026-03-01` are disabled.

### Requirement: Return Time Sequencing

If the return date is the same as the departure date, the return time MUST be after the departure time.

#### Scenario: User selects same day for return
- **Given** departure date `2026-03-01` and time `10:00`
- **When** user selects return date `2026-03-01`
- **Then** return time options before `10:00` are restricted.
