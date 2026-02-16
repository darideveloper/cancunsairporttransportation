import { useReservationStore } from "../../../store/reservation";
import Input from "../../atoms/form/Input";
import ButtonCta from "../../atoms/ButtonCta";
import H2 from "../../atoms/H2";
import type { FormEvent } from "react";
import { routes } from "../../../lib/i18n/routes";

// Note: ButtonCta is exported as default, but in some files it was imported as import ButtonCta from '../../atoms/ButtonCta'
// Let me double check the import path for ButtonCta in Reservation.astro
// Reservation.astro: import ButtonCta from '../../../components/atoms/ButtonCta'
// Reservation.astro: import H2 from '../../atoms/H2' (Wait, that 12: import H2 from '../../atoms/H2' is relative to src/components/pages/store/)

interface ReservationFormProps {
  action: string;
  lang: 'en' | 'es';
  translations: {
    heading: string;
    codeLabel: string;
    emailLabel: string;
    submit: string;
  };
}

export default function ReservationForm({
  action,
  lang,
  translations,
}: ReservationFormProps) {
  const { code, email, setCode, setEmail } = useReservationStore();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Get the reservation details route based on current language
    const reservationDetailRoute = routes.reservationDetail[lang];
    
    // Redirect to reservation details page
    window.location.href = `/${reservationDetailRoute}`;
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
