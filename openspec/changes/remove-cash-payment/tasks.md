## 1. State Management & Hardening

- [ ] 1.1 Update the `paymentMethod` state type in `SearchFormState` interface within `src/store/search-form.ts` to `"paypal" | "card"`.
- [ ] 1.2 Update the `setPaymentMethod` store action signature in `SearchFormState` within `src/store/search-form.ts` to accept only `"paypal" | "card"`.
- [ ] 1.3 Update `bookingRegistrationSchema` in `src/store/search-form.ts` to include `paymentMethod: z.enum(["paypal", "card"])`.
- [ ] 1.4 Add `paymentMethod` to the `formData` object and dependencies inside `src/components/organisms/booking/BookingSubmission.tsx` to ensure validation captures the restricted schema.

## 2. UI Updates

- [ ] 2.1 Remove the `"cash"` payment option from the `paymentOptions` array in `src/components/molecules/booking/PaymentMethods.tsx`.
- [ ] 2.2 Add a `useEffect` hook to `PaymentMethods.tsx` to sanitize any legacy `"cash"` state to `"card"` immediately on mount.


## 3. Submission Logic

- [ ] 3.1 Delete the `"cash"` condition branch (lines 271-280) from `handleSubmit` inside `src/components/organisms/booking/BookingSubmission.tsx`.

## 4. Verification & Testing

- [ ] 4.1 Run a verification build and test registration flow to ensure only PayPal and Card options are available and fully functional.
