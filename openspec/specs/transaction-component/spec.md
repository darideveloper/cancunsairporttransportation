# transaction-component Specification

## Purpose
TBD - created by archiving change update-transaction-pages. Update Purpose after archive.
## Requirements
### Requirement: Create `TransactionStatus.astro` component
The `TransactionStatus` component MUST be created as a reusable organism to display transaction results.

#### Scenario: Success State
Given the component receives `status="success"`
And a successful title and message
Then it should render the success layout with green title
And show the "Confirmation" contact message
And show a "View my reservation" button linking to the reservation page

#### Scenario: Error State
Given the component receives `status="error"`
And an error title and message
Then it should render the error layout with red title
And show the "Assistance" contact message

#### Scenario: Contact Information
Given the component is rendered
Then it should display the contact email and phone numbers from `site-config.ts`

### Requirement: Interface Definition
The component MUST accept specific props for content and state.

#### Scenario: Props Interface
Given the component is used
Then it must require `title`, `message`, `image`, and `status`
And optionally accept `reservationId`

### Requirement: Use SectionHeading for Title and Message
The component SHALL use `SectionHeading` to render the title and message.

#### Scenario: Rendering Title and Message
When rendering the component, the `title` and `message` props should be passed to `SectionHeading`.

```astro
<SectionHeading
  title={title}
  isH1={true}
  class="text-center lg:text-left"
>
  <p class="text-lg text-gray-600 md:text-xl max-w-lg mx-auto lg:mx-0">
    {message}
  </p>
</SectionHeading>
```

### Requirement: Use ButtonCta for Actions
The component SHALL use `ButtonCta` for the "Go Home" and "View Reservation" actions.

#### Scenario: Rendering Actions
When rendering the actions, `ButtonCta` should be used with appropriate variants.

```astro
<div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
  <ButtonCta
    href={homeRoute}
    variant="blackGhost"
    className="min-w-[160px] font-bold"
  >
    {t('transaction.go_home')}
  </ButtonCta>
  
  <ButtonCta
    href={reservationLink}
    variant="orange"
    className="min-w-[200px] font-bold shadow-lg hover:shadow-xl"
  >
    {t('transaction.view_reservation')}
  </ButtonCta>
</div>
```

### Requirement: Maintain Layout and Styling
The component SHALL maintain the existing responsive layout (stack on mobile, grid on desktop) and styling adjustments.

#### Scenario: Layout Check
The layout wrapper structure must remain consistent with the design system, using `section` with `container` class and a `grid` for the two main columns.

