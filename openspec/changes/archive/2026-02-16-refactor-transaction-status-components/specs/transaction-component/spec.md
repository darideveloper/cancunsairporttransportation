# transaction-component Specification

## ADDED Requirements

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
