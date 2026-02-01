# Spec: SEO Optimization

## MODIFIED Requirements

### Requirement: Specialized Schemas and Images
The system MUST support specific schemas and unique social images for key page types.

#### Scenario: Destination Page Metadata
Given I am on a destination page like "/cancun-to-tulum-shuttle"
Then the Open Graph image MUST match the page's hero/banner image
And the JSON-LD schema type MUST be "TouristDestination"
And the keywords meta tag MUST be populated with relevant terms

#### Scenario: Schema Validity
Given a page using "TouristDestination" schema
Then the JSON-LD output MUST NOT contain "openingHoursSpecification" or "priceRange"
And the JSON-LD output MUST contain "name", "description", and "image"

#### Scenario: Service Schema Properties
Given a page using "Service" schema
Then the JSON-LD output MUST contain "provider" or "serviceType"
And the JSON-LD output SHOULD inherit generic properties like "image" from the main configuration

#### Scenario: Service Page Metadata
Given I am on a service page like "/luxury-transportation-cancun"
Then the JSON-LD schema type MUST be "Service" or "Product"
And the Open Graph image MUST match the page's service image
And the keywords meta tag MUST be populated with relevant terms

#### Scenario: Translation Files
Given the translation files "en.json" and "es.json"
When I inspect the "pages" object
Then every page entry MUST have a "keywords" field

#### Scenario: Default Fallback
Given I am on a generic page like "/contact"
Then the JSON-LD schema type SHOULD remain "LocalBusiness" unless specified otherwise
And the Open Graph image SHOULD default to the business logo if no specific image is provided
