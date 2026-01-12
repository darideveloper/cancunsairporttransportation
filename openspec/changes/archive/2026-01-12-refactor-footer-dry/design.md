# Design: Footer Refactor

## Components

### `FooterLinkList.astro`
**Type**: Molecule
**Props**:
- `title` (string): The heading text for the column.
- `links` (Array<{ text: string, href: string }>): The list of links to render.

**Structure**:
```astro
---
interface Props {
  title: string;
  links: {
    text: string;
    href: string;
  }[];
}

const { title, links } = Astro.props;
---
<div>
  <h3 class="font-title text-gray-dark mb-6 text-lg font-bold tracking-wider uppercase">
    {title}
  </h3>
  <nav aria-label={`${title} navigation`}>
    <ul class="flex flex-col gap-3">
      {links.map((link) => (
        <li>
          <a href={link.href} class="text-gray-dark hover:text-blue font-medium transition-colors">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </nav>
</div>
```

### `FooterContact.astro`
**Type**: Molecule
**Props**:
- `title` (string): The heading text.
- `address` (string): The physical address.
- `phones` (Array<{ label: string, value: string, href: string }>): List of phone contacts.
- `email` ({ label: string, value: string, href: string }): Email contact.

**Structure**:
```astro
---
interface Props {
    title: string;
    address: string;
    phones: any[];
    email: any;
}
const { title, address, phones, email } = Astro.props;
---
<div class="flex flex-col gap-6 lg:col-span-2">
  <h3 class="font-title text-gray-dark text-lg font-bold tracking-wider uppercase">
    {title}
  </h3>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-4">
      <p class="text-gray-dark border-accent border-l-4 pl-4 text-sm leading-relaxed italic">
        {address}
      </p>
      <div class="flex flex-col gap-4">
        {phones.map((phone) => (
          <a href={phone.href} class="group flex flex-col">
            <span class="text-gray group-hover:text-blue text-xs font-bold tracking-tighter uppercase transition-colors">
              {phone.label}
            </span>
            <span class="text-gray-dark group-hover:text-blue text-lg font-bold tracking-tight transition-colors">
              {phone.value}
            </span>
          </a>
        ))}
      </div>
      <a href={email.href} class="group flex flex-col">
        <span class="text-gray group-hover:text-blue text-xs font-bold tracking-tighter uppercase transition-colors">
          {email.label}
        </span>
        <span class="text-gray-dark group-hover:text-blue text-base font-medium break-all transition-colors">
          {email.value}
        </span>
      </a>
    </div>
  </div>
</div>
```

## Usage in `Footer.astro`
The `Footer.astro` file will import `FooterLinkList` for Destinations, Services, and Information columns, and `FooterContact` for the Contact column.
