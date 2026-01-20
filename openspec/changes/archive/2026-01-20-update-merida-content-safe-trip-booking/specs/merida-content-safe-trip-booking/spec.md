# Spec: Merida Content (Safe Trip & Booking)

## ADDED Requirements

### Requirement: Merida Page Content
The "Transportation from Cancun to Merida" page MUST display the correct translated content in the "Safe Trip" section.

#### Scenario: Safe Trip Section Content
Given the user is on the Merida page
When the page loads
Then the "Safe Trip" section should show the title "Traslado de Cancún a Mérida, seguro y confiable" (ES) or "Shuttle from Cancun to Mérida, safe and reliable" (EN)
And the text should match the provided content
And the image (trip-advisor) should be displayed
