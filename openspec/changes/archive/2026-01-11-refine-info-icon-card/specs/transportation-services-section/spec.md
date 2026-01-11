# transportation-services-section Delta

## MODIFIED Requirements

### Requirement: InfoIconCard molecule usage
Each service card MUST be an instance of the `InfoIconCard` molecule, presenting the service title, a brief description, and a representing icon. It MAY also include optional icons next to the title and/or at the bottom.

#### Scenario: Inspecting an InfoIconCard with optional icons
Given the transportation services section is visible
When an `InfoIconCard` is rendered with `TitleIcon` and `BottomIcon`
Then the `TitleIcon` should appear next to the `h3` heading
And the `BottomIcon` should appear at the end of the `article` content.
