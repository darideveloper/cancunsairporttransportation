# Capability: Bold Text in No Availability Message

## ADDED Requirements

### Requirement: Bold emphasis in no availability message
The message indicating no availability SHALL emphasize the specific criteria (Zone/Times) that resulted in no results.

#### Scenario: Displaying the message in English
- **Given** the user is viewing the results page in English
- **And** no vehicles are found
- **When** the `NoAvailability` component renders
- **Then** the text "Zone / Times" should be wrapped in `<strong>` tags (rendered from `**Zone / Times**`).

#### Scenario: Displaying the message in Spanish
- **Given** the user is viewing the results page in Spanish
- **And** no vehicles are found
- **When** the `NoAvailability` component renders
- **Then** the text "Zona / Horarios" should be wrapped in `<strong>` tags (rendered from `**Zona / Horarios**`).
