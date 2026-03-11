# Design: Footer Attribution Link

## UI Changes
The `src/components/molecules/BottomBar.astro` will be modified to add an `<a>` tag next to the copyright text.
The link will point to `https://wa.me/5214493402622` and display "Powered by DariDeveloper".
Styling should be consistent with the existing footer text (`text-gray text-sm`).

## Translation Changes
The `global.footer.bottomBar.copyright` in `src/messages/en.json` and `src/messages/es.json` will be updated to:
`"Copyright © {year} All Rights Reserved."`
This allows the component to dynamically replace `{year}` with the current year.

## Data Schema
No schema changes.
