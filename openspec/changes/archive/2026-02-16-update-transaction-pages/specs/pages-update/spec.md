# Update Pages and i18n Spec

## ADDED Requirements

### Requirement: Update `ThankYou.astro`
Refactor `ThankYou.astro`. It MUST use the new `TransactionStatus` component.

#### Scenario: Render Success Page
Given a user lands on the Thank You page
Then the page should render `TransactionStatus` with `status="success"`
And pass the correct title and message from translations
And pass a success image (placeholder for now)

### Requirement: Update `Cancel.astro`
Refactor `Cancel.astro`. It MUST use the new `TransactionStatus` component.

#### Scenario: Render Cancel Page
Given a user lands on the Cancel page
Then the page should render `TransactionStatus` with `status="error"`
And pass the correct title and message from translations
And pass an error image (placeholder for now)

## ADDED Requirements

### Requirement: Add Transaction Translations
Add new translation keys for the transaction status component. These keys MUST be added to `en.json` and `es.json`.

#### Scenario: English Keys
Given the `en.json` file
Then it should contain `transaction` object with keys for success/error contacts and buttons:
- `transaction.success.contact`
- `transaction.error.contact`
- `transaction.call_us`
- `transaction.go_home`
- `transaction.view_reservation`

#### Scenario: Spanish Keys
Given the `es.json` file
Then it should contain `transaction` object with keys for success/error contacts and buttons

## Implementation Details

### `src/messages/en.json`
```json
"transaction": {
  "success": {
    "contact": "We have sent you a confirmation email, for more information please contact us."
  },
  "error": {
    "contact": "Your transaction was not approved, we can help you, contact us!"
  },
  "call_us": "Call us at",
  "go_home": "Go home",
  "view_reservation": "View my reservation"
}
```

### `src/messages/es.json`
```json
"transaction": {
  "success": {
    "contact": "Le hemos enviado un correo de confirmación, para más información contáctenos."
  },
  "error": {
    "contact": "Su transacción no fue aprobada, podemos ayudarle, ¡contáctenos!"
  },
  "call_us": "Llámanos al",
  "go_home": "Ir al inicio",
  "view_reservation": "Ver mi reservación"
}
```

### `src/components/pages/store/ThankYou.astro`

```astro
---
import { getLangFromUrl, getTranslations } from '../../../lib/i18n/utils';
import Layout from '../../../layouts/Layout.astro';
import PageSEO from '../../utils/PageSEO.astro';
import TransactionStatus from '../../organisms/TransactionStatus.astro';
import successImage from '../../../assets/img/logo.png'; // TEMPORARY PLACEHOLDER

const { pageKey } = Astro.props;
const lang = getLangFromUrl(Astro.url);
const t = getTranslations(lang);
---

<Layout pageKey={pageKey}>
  <PageSEO
    currentPage={pageKey}
    slot='seo'
  />
  <TransactionStatus
    title={t(`pages.${pageKey}.heading`)}
    message={t(`pages.${pageKey}.message`)}
    image={successImage}
    status="success"
  />
</Layout>
```

### `src/components/pages/store/Cancel.astro`

```astro
---
import { getLangFromUrl, getTranslations } from '../../../lib/i18n/utils';
import Layout from '../../../layouts/Layout.astro';
import PageSEO from '../../utils/PageSEO.astro';
import TransactionStatus from '../../organisms/TransactionStatus.astro';
import errorImage from '../../../assets/img/logo.png'; // TEMPORARY PLACEHOLDER

const { pageKey } = Astro.props;
const lang = getLangFromUrl(Astro.url);
const t = getTranslations(lang);
---

<Layout pageKey={pageKey}>
  <PageSEO
    currentPage={pageKey}
    slot='seo'
  />
  <TransactionStatus
    title={t(`pages.${pageKey}.heading`)}
    message={t(`pages.${pageKey}.message`)}
    image={errorImage}
    status="error"
  />
</Layout>
```
