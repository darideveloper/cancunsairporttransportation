# Design

## Form Data Structure
To solve the DRY issue, we will define the form fields in an array structure within the component script.

```typescript
const formFields = [
  {
    name: 'name',
    type: 'text',
    icon: FaUser, // from react-icons/fa
    labelKey: 'pages.contact.form.name',
    placeholderKey: 'pages.contact.form.name_placeholder',
    required: true,
  },
  {
    name: 'email',
    type: 'email',
    icon: FaEnvelope, // from react-icons/fa
    labelKey: 'pages.contact.form.email',
    placeholderKey: 'pages.contact.form.email_placeholder',
    required: true,
  },
  {
    name: 'phone', // "Teléfono"
    type: 'text',
    icon: FaPhone, // from react-icons/fa
    labelKey: 'pages.contact.form.phone',
    placeholderKey: 'pages.contact.form.phone_placeholder',
    required: true,
  },
   {
    name: 'subject', // "Asunto"
    type: 'text',
    icon: FaRegImage, // Mapping "picture" icon to something relevant, maybe image or generic
    labelKey: 'pages.contact.form.subject',
    placeholderKey: 'pages.contact.form.subject_placeholder',
    required: true,
  },
  {
    name: 'message',
    type: 'textarea',
    icon: FaComment, // from react-icons/fa
    labelKey: 'pages.contact.form.message',
    placeholderKey: 'pages.contact.form.message_placeholder',
    required: true,
    fullWidth: true
  }
];
```

## Styling
- Use a wrapper `div` for the input group.
- Absolute position or flexbox to place the icon inside the input area on the left.
- Adjust input padding-left to prevent text overlapping the icon.
- `react-icons` will be imported directly in the Astro component.

## Dependencies
- `react-icons`: Need to ensure it is installed. If not, install `react-icons`.
