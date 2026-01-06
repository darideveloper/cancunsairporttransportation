# Design: Testimonial Date Display

## Problem
Testimonials currently only show the reviewer's name, text, and rating. Adding a date helps users understand how recent the feedback is.

## Solution
We will pass a `date` string from the `Testimonials` organism to the `Testimonial` molecule. 

### Data Source
The user explicitly requested that the date comes from "data in the parent, no from the translation system". We will define a constant object in `Testimonials.astro` that maps testimonial keys to dates.

### Layout
The date will be placed immediately before the name in the `Testimonial` component's attribution section.

Example:
`01/2026 John Doe`

### Schema.org
While the user didn't explicitly ask for Schema.org updates, it is best practice to include `datePublished` if available. We will consider adding it to the `Review` type in `Testimonial.astro` and the JSON-LD in `Testimonials.astro`.
