# Translations Spec

## ADDED Requirements

### Requirement: Display Private Page Specific Testimonials
The testimonials section on the private airport transfer page MUST display content specific to the private service.

#### Scenario: Private Page Testimonials Content
Given the private airport transfer page is loaded
When the user views the User Reviews/Testimonials section
Then the title should be "Private Transportation in Cancun - What our clients say about us" (EN) / "Transporte Privado en Cancun - Lo que nuestros clientes dicen de nosotros" (ES)
And the description should be "The opinion of our customers is the most important thing for us." (EN) / "La opinión de nuestros clientes es lo más importante para nosotros." (ES)
And there should be 3 testimonials with the specified text and new client names.

## MODIFIED Requirements
None.

## REMOVED Requirements
None.
