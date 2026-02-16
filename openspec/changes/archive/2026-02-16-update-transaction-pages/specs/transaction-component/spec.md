# Transaction Status Component Spec

## ADDED Requirements

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

## Implementation Details

```astro
---
import type { ImageMetadata } from 'astro';
import { Image } from 'astro:assets';
import clsx from 'clsx';
import { getLangFromUrl, getTranslations, getLocalizedPath } from '../../../lib/i18n/utils';
import { EMAIL, PHONES } from '../../../data/site-config';

interface Props {
  title: string;
  message: string;
  image: ImageMetadata;
  status: 'success' | 'error';
  reservationId?: string;
}

const { title, message, image, status, reservationId } = Astro.props;
const lang = getLangFromUrl(Astro.url);
const t = getTranslations(lang);

const isSuccess = status === 'success';

// Determine Routes
const homeRoute = getLocalizedPath('home', lang);
const reservationRoute = getLocalizedPath('reservation', lang);
const reservationLink = reservationId 
  ? `${reservationRoute}?code=${reservationId}` 
  : reservationRoute;

---

<section class="container mx-auto px-4 py-12 md:py-24">
  <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
    <!-- Content Side -->
    <div class="space-y-8 order-2 lg:order-1">
      <div class="space-y-4 text-center lg:text-left">
        <h1 class={clsx(
          "font-title text-4xl font-bold md:text-5xl leading-tight",
          isSuccess ? "text-gray-900" : "text-red-700" 
        )}>
          {title}
        </h1>
        <p class="text-lg text-gray-600 md:text-xl max-w-lg mx-auto lg:mx-0">
          {message}
        </p>
      </div>

      <!-- Contact Info -->
      <div class="space-y-4 text-gray-600 text-center lg:text-left border-t border-gray-200 pt-8 mt-8">
         <p class="font-medium text-lg">
            {isSuccess 
              ? t('transaction.success.contact') 
              : t('transaction.error.contact')
            }
         </p>
         <div class="flex flex-col gap-2 items-center lg:items-start text-base">
            <a href={`mailto:${EMAIL.address}`} class="font-bold text-orange-500 hover:text-orange-600 transition-colors text-lg">
               {EMAIL.address}
            </a>
            
            <div class="flex flex-wrap gap-x-2 justify-center lg:justify-start items-baseline">
                <span class="text-gray-500">{t('transaction.call_us')}</span>
                <a href={PHONES.mexico.href} class="font-bold hover:text-orange-500 transition-colors">
                {PHONES.mexico.formatted}
                </a>
                <a href={PHONES.usa.href} class="font-bold hover:text-orange-500 transition-colors">
                {PHONES.usa.formatted}
                </a>
            </div>
         </div>
      </div>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
        <a 
          href={homeRoute}
          class="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-900 text-base font-bold text-gray-900 bg-white hover:bg-gray-50 rounded-lg transition-colors min-w-[160px]"
        >
          {t('transaction.go_home')}
        </a>
        <a 
          href={reservationLink}
          class="inline-flex items-center justify-center px-8 py-3 border-2 border-transparent text-base font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors shadow-lg hover:shadow-xl min-w-[200px]"
        >
          {t('transaction.view_reservation')}
        </a>
      </div>
    </div>

    <!-- Image Side -->
    <div class="relative order-1 lg:order-2 flex justify-center lg:justify-end">
      <div class="relative w-full max-w-[600px] aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
          <Image 
            src={image} 
            alt={title}
            class="h-full w-full object-cover"
            width={800}
            height={600}
          />
      </div>
    </div>
  </div>
</section>
```
