# Proposal: Add Footer Attribution Link

## Why
The user wants to add a "Powered by DariDeveloper" link to their WhatsApp in the footer, providing credit and a direct contact method.

## What Changes
1.  **BottomBar Component**: Modify `src/components/molecules/BottomBar.astro` to include the attribution link next to the copyright message.
2.  **Translations**: Update the `global.footer.bottomBar.copyright` translation to include a `{year}` placeholder properly and ensure the text is consistent. (Optional: add attribution text to translations).

## Change ID
`add-footer-attribution-link`
