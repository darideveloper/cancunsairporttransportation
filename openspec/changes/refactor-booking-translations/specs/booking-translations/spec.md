## MODIFIED Requirements

### Requirement: BookingForm Translations
The `BookingForm` component MUST be refactored to fetch translations internally, removing the dependency on external props.


#### Scenario: Component fetches its own translations
The `BookingForm` component MUST NOT require a `translations` prop.
Instead, it MUST determine the current language from the URL and fetch the corresponding 'booking' translations internally using the `useTranslations` utility.

#### Scenario: Rendering with internal translations
When `BookingForm` is rendered, it MUST display all labels (Trip Type, Currency, Fields, Submit Button) in the correct language corresponding to the current URL path.
