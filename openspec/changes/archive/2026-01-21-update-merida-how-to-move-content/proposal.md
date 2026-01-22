# Update Merida "How to Move" Content

## Problem
The current content for the "How to move" section on the Merida transportation page (`transportation-from-cancun-to-merida`) is incorrect. It references "Tulum" instead of "Merida" and uses generic or incorrect information. Additionally, the component currently imports the "How to move" image from the `akumal` directory (`../../assets/images/destinations/akumal/destination.webp`) instead of using an asset located in the page's specific directory.

## Solution
Update the `pages.cancunToMerida.howToMove` translation keys in both `en.json` and `es.json` with accurate, detailed content provided by the stakeholder. The structure will change from a bulleted list to a sequence of paragraphs.

We will also reuse the existing image by copying `src/assets/images/destinations/akumal/destination.webp` to `src/assets/images/destinations/cancun-to-merida/destination.webp` (if not already redundant) and update the `transportation-from-cancun-to-merida.astro` page to import the image from the correct local folder.

## Risks
None. This is a text-only content update.

## Validations
- Verify the content on the Merida page matches the provided text.
- Ensure no other keys are affected.
