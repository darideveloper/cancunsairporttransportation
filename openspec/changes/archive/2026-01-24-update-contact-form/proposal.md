# Update Contact Form UI

## Context
The current contact form in `Contact.astro` is using a repetitive structure for inputs and lacks visual cues (icons) that improve user experience. The user has requested to update the form to include icons for each input and refactor the code to use a DRY (Don't Repeat Yourself) approach.

## Problem
- **Repetitive Code**: Each input field is manually coded, leading to code duplication and maintenance overhead.
- **Visual Design**: The current form lacks icons which are requested to improve the visual design and UX.
- **Translations**: The content needs to be updated based on provided HTML data for both English and Spanish.

## Solution
1. **Refactor Form Structure**: Create a configuration array for the form fields to enable rendering via a loop.
2. **Add Icons**: Integrate `react-icons` to display an icon next to each input field.
3. **Update Content**: Use the provided HTML content to update labels and placeholders via the translation system.
4. **Styling**: Implement the "input wrapper" pattern to position icons correctly within the input group.

## Scope
- `src/components/pages/general/Contact.astro`: Main file to be updated.
- `src/messages/en.json` & `src/messages/es.json`: Update/Add translation keys if they are missing or different.
