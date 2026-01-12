# utility-components Specification

## Purpose
TBD - created by archiving change generalize-footer-components. Update Purpose after archive.
## Requirements
### Requirement: Interactive Contact Card
The system MUST provide a reusable Contact Card component that displays contact information (Title, Address, Phones, Email) in a consistent format.

#### Scenario: Displaying contact info in Footer
Given the Contact Card component
When used in the Footer
Then it should display the title, address, phone numbers (with formatting), and email
And it should allow the parent to control its grid width (e.g., spanning 2 columns).

#### Scenario: Displaying contact info in Contact Page
Given the Contact Card component
When used in the Contact Page
Then it should display the same information layout
And it should adapt to the page container without forced grid constraints.

### Requirement: Generic Link List
The system MUST provide a reusable Link List component that renders a titled list of navigation links.

#### Scenario: Site Map
Given a list of links and a header
When passed to the Link List component
Then it should render a semantic `<nav>` and `<ul>` structure
And it should be usable in Sidebars, Footers, or Sitemaps.

