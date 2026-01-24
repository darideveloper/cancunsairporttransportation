# Contact Page Content

## MODIFIED Requirements

### Requirement: The contact page must display the correct main heading and description
The main heading of the contact page MUST be updated to use the `<h1>` tag and display the correct localized text.

#### Scenario: Viewing the contact page in English
Given the user visits the contact page in English
Then the main heading should be "Contact Us"
And the description should be "We’ll be happy to assist you, please contact us in any of the next options."
And the main heading tag should be `<h1>`.

#### Scenario: Viewing the contact page in Spanish
Given the user visits the contact page in Spanish
Then the main heading should be "Contactanos"
And the description should be "Estaremos encantados de atenderle, póngase en contacto con nosotros en cualquiera de las siguientes opciones."
And the main heading tag should be `<h1>`.

## ADDED Requirements

### Requirement: The contact page must display a "Stay in touch" section
A new section heading MUST be added to the contact page, encouraging users to get a quote.

#### Scenario: Viewing the contact page in English
Given the user visits the contact page in English
Then there should be a section heading "Stay in touch with us"
And the description should be "If you would like a quote for a special transportation service, do not hesitate to contact us, fill out the following form and we will contact you as soon as possible."

#### Scenario: Viewing the contact page in Spanish
Given the user visits the contact page in Spanish
Then there should be a section heading "Mantente en contacto con nosotros"
And the description should be "Si deseas una cotización de un servicio especial de transporte, no dudes en consultarnos, llena el siguiente formulario y nos pondremos en contacto lo más pronto posible."
