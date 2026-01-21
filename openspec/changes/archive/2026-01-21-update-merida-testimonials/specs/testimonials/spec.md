# Testimonials Spec

## ADDED Requirements

### Requirement: Update Testimonial Content for Merida Page
The Merida page MUST display specific testimonials with unique client names and images.

#### Scenario: Viewing Merida page in English
-   **Given** the user is on the `/en/transportation-from-cancun-to-merida` page
-   **When** they scroll to the testimonials section
-   **Then** they should see the header "Our client reviews - Cancun to Merida"
-   **And** they should see 3 reviews from "Emily R.", "Michael T.", and "Jessica K." with the updated text and new images.

#### Scenario: Viewing Merida page in Spanish
-   **Given** the user is on the `/es/traslado-de-cancun-a-merida` page
-   **When** they scroll to the testimonials section
-   **Then** they should see the header "Nuestras reseñas de clientes - Cancún a Mérida"
-   **And** they should see 3 reviews from "Emily R.", "Michael T.", and "Jessica K." with the updated Spanish text and new images.
