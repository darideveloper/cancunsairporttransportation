import { useReservationStore } from "../../../store/reservation";
import Input from "../../atoms/form/Input";
import ButtonCta from "../../atoms/ButtonCta";
import H2 from "../../atoms/H2";
import type { FormEvent } from "react";

// Note: ButtonCta is exported as default, but in some files it was imported as import ButtonCta from '../../atoms/ButtonCta'
// Let me double check the import path for ButtonCta in Reservation.astro
// Reservation.astro: import ButtonCta from '../../../components/atoms/ButtonCta'
// Reservation.astro: import H2 from '../../atoms/H2' (Wait, that 12: import H2 from '../../atoms/H2' is relative to src/components/pages/store/)

interface ReservationFormProps {
  action: string;
  translations: {
    heading: string;
    codeLabel: string;
    emailLabel: string;
    submit: string;
  };
}

export default function ReservationForm({
  action,
  translations,
}: ReservationFormProps) {
  const { code, email, setCode, setEmail } = useReservationStore();

  const handleSubmit = (e: FormEvent) => {
    // If we want to store data BEFORE traditional submission:
    // We don't necessarily need to preventDefault if we want the browser to still POST.
    // However, usually in these apps we might handle it via API or just let it redirect.
    // The task says "handle form submission (preventing default if necessary for store sync)".
    // Since we are using Zustand with persistence, the values are already synced on change.
  };

  return (
    <form
      action={action}
      method="POST"
      onSubmit={handleSubmit}
      className="bg-gray-light flex flex-col gap-6 rounded-2xl p-8 shadow-sm"
    >
      <H2 className="text-center uppercase">{translations.heading}</H2>

      <Input
        name="code"
        label={translations.codeLabel}
        required
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <Input
        name="email"
        type="email"
        label={translations.emailLabel}
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="hidden"
        name="_token"
        value="pWWBCOYl0LodEcwfGxqPtnqlwjdk2DoBTjb7MjCs"
        autoComplete="off"
      />

      <div className="mt-4 flex justify-center">
        <ButtonCta
          type="submit"
          className="w-full! min-w-[200px] md:w-auto"
          variant="blue"
        >
          {translations.submit}
        </ButtonCta>
      </div>
    </form>
  );
}
