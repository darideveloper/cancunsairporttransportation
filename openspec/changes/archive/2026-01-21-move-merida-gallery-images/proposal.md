# Move Merida Gallery Images

## Summary
Move the gallery images used in the Merida transportation page from the Akumal directory to the existing `cancun-to-merida` directory.

## Why
The `transportation-from-cancun-to-merida.astro` page currently acts as a distinct destination page but reuses images physically located in the `akumal` folder (`src/assets/images/destinations/akumal/gallery`). To ensure proper file organization and asset management, these images should belong to the `cancun-to-merida` folder.

## Strategy
1.  Use the existing directory `src/assets/images/destinations/cancun-to-merida`.
2.  Create a `gallery` subdirectory within it.
3.  Copy existing images to the new location.
4.  Update the Astro page to reference the new location.
