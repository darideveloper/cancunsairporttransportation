# Spec: Client Gallery Content

## ADDED Requirements

### Requirement: Client Gallery Display
The system MUST render a gallery reference section with client photos.

#### Scenario: Displaying gallery on desktop
Given I am on the Playa del Carmen transportation page
When I scroll to the client gallery section
Then I should see a title and subtitle
And I should see a grid of 4 client images in a single row (for 4 images)

#### Scenario: Responsive layout
Given I am on the Playa del Carmen transportation page on a mobile device
When I view the gallery section
Then the images should be stacked or in a 2-column grid appropriate for mobile width

#### Scenario: Content Localization
Given I am viewing the page in Spanish
Then the gallery title and subtitle should be in Spanish
