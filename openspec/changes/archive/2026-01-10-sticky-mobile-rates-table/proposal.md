# Sticky Mobile Rates Table Proposal

## Goal
Improve the mobile experience of the `RatesTable` component by making the first column (Destinations) sticky during horizontal scrolling. This allows users to always see which destination corresponds to the pricing data they are viewing.

## Context
Currently, the `RatesTable` has `overflow-x-auto` to allow scrolling on small screens, but scrolling to the right hides the destination names, making it hard to track rows.

## Features
- **Sticky First Column**: The first column ('Destination' and city names) will remain visible while scrolling horizontally on small screens.
- **Visual Separation**: A background color will be applied to the sticky column to prevent transparency issues.
- **Corner Handling**: The top-left header cell will remain fixed during both vertical and horizontal scrolling.
