# Merida How To Move Content

## ADDED Requirements

### Requirement: Merida Content Accuracy
The content for the "How to move" section MUST be accurate for Merida, replacing any incorrect references to other locations (like Tulum) with the correct Merida-specific text provided by the stakeholder.

#### Scenario: Display correct How to Move content for Merida
- Given the user is on the Transportation from Cancun to Merida page
- When the "How to move" section is rendered
- Then the title should be "How to Travel to Merida from Cancun?" (English) or "¿Cómo viajar a Mérida desde Cancún?" (Spanish)
- And the content should describe the Merida transfer details, options, and company benefits, specifically mentioning "Merida" and not "Tulum"
- And the content should be formatted as paragraphs, not a bulleted list.
