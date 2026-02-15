# Submission Logic Specification

## ADDED Requirements

### Requirement: Reservation Service

The application **SHALL** include `src/services/reservation.ts` to handle the API request.

#### Scenario: Successful Reservation Creation
Given a valid reservation payload
When `createReservation` is called
Then it should POST to `/legacy/create/` and return the reservation data.

```typescript
// src/services/reservation.ts

export interface CreateReservationPayload {
  service_token: string;
  first_name: string;
  last_name: string;
  email_address: string;
  phone: string;
  flight_number?: string;
  arrival_date?: string;
  comments?: string;
  pay_at_arrival?: number; // 1 for true
  referral_code?: string;
}

export interface ReservationResponse {
  reservation_id?: string;
  status?: string;
  total?: number;
  currency?: string;
  customer?: {
    name: string;
    email: string;
  };
  error?: {
    code: string;
    message: string;
  } | string;
}

export async function createReservation(
  payload: CreateReservationPayload
): Promise<ReservationResponse> {
  const response = await fetch("/legacy/create/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    // Handle HTTP errors
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || response.statusText);
  }

  return response.json();
}
```

### Requirement: Booking Submission Component

The application **SHALL** include `src/components/organisms/booking/BookingSubmission.tsx` to handle UI interactions and validation.

#### Scenario: Form Validation
Given the user is on the register page
When the required fields (`firstName`, `lastName`, `email`, `phone`, `selectedVehicle`) are empty
Then the "Book Your Trip Now" button should be disabled.

#### Scenario: User Clicks Submit
Given the user has filled out all required fields
When they click "Book Your Trip Now"
Then the component should call `createReservation` and handle the response.

```typescript
// src/components/organisms/booking/BookingSubmission.tsx
import { useState } from "react";
import { useSearchFormStore } from "../../../store/search-form";
import { createReservation } from "../../../services/reservation";
import ButtonCta from "../../atoms/ButtonCta";
import { getTranslations } from "../../../lib/i18n/utils";

interface Props {
  lang: "en" | "es";
}

export default function BookingSubmission({ lang }: Props) {
  const t = getTranslations(lang);
  const {
    selectedVehicle,
    firstName,
    lastName,
    email,
    phone,
    flightNumber,
    notes,
    departureDate,
    departureTime,
    returnDate,
    returnTime,
    tripType,
  } = useSearchFormStore();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Validation Logic
  const isValid = 
      !!selectedVehicle?.token && 
      !!firstName?.trim() && 
      !!lastName?.trim() && 
      !!email?.trim() && 
      !!phone?.trim();

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    // Redundant check in case disabled attribute is bypassed
    if (!isValid) {
        setError(t("pages.register.errors.missingFields"));
        setIsLoading(false);
        return;
    }

    try {
      const payload = {
        service_token: selectedVehicle!.token,
        first_name: firstName,
        last_name: lastName,
        email_address: email,
        phone: phone,
        flight_number: flightNumber,
        comments: notes,
        pay_at_arrival: 1, 
        arrival_date: `${departureDate} ${departureTime}`,
      };

      const response = await createReservation(payload);

      if (response.error) {
        const errorMessage = typeof response.error === 'string' 
            ? response.error 
            : response.error.message;
        throw new Error(errorMessage);
      }

      console.log("Reservation Success:", response);
      alert("Reservation confirmed! " + response.reservation_id); 
      // Redirect logic here

    } catch (err: any) {
      console.error(err);
      setError(err.message || t("pages.register.errors.generic"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
       <p className="text-gray-dark text-sm">
        {t("pages.register.paymentMethod.termsInfo")}{" "}
        <a href="/terms-and-conditions" className="text-blue font-bold underline">
           {t("global.footer.columns.information.links.1.text")}
        </a>
      </p>

      {error && <p className="text-red-500 font-bold">{error}</p>}

      <ButtonCta
        onClick={handleSubmit}
        disabled={isLoading || !isValid}
        variant="green"
        className="w-full! py-4 text-xl font-bold uppercase disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? t("pages.register.submitting") : t("pages.register.submit")}
      </ButtonCta>
    </div>
  );
}
```


### Requirement: Register Page

`src/components/pages/store/Register.astro` **MUST** be updated to use the new component.

#### Scenario: Replace Submit Button
Given the Register page
When rendered
Then it should display `BookingSubmission` instead of the static HTML form elements.

```astro
// src/components/pages/store/Register.astro

// ... imports
import BookingSubmission from '../../organisms/booking/BookingSubmission';

// ... inside template

    {/* Remove old manual Submit button div */}
    
    <BookingSubmission
      lang={lang}
      client:load
    />

    <!-- Payment brands -->
    <PaymentBrands />
```
