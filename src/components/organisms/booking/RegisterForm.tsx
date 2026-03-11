// Components
import ArrivalInformation from "../../molecules/booking/ArrivalInformation";
import ReturnInformation from "../../molecules/booking/ReturnInformation";
import PassengerInformation from "../../molecules/booking/PassengerInformation";
import BookingSummary from "../../molecules/booking/BookingSummary";
import PaymentMethods from "../../molecules/booking/PaymentMethods";
import SelectedVehicleCard from "./SelectedVehicleCard";
import BookingSubmission from "./BookingSubmission";
import { useEffect, useRef } from "react";

// Libs
import { useSearchFormStore } from "../../../store/search-form";

interface RegisterFormProps {
  lang: "en" | "es";
}

export default function RegisterForm({ lang }: RegisterFormProps) {
  const { selectedVehicle, currency, passengers, paypalId, paymentMethod } =
    useSearchFormStore();

  const summaryRef = useRef<HTMLDivElement>(null);
  const paymentMethodsRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (paypalId && paymentMethod === "card") {
      paymentMethodsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [paypalId, paymentMethod]);

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="left flex w-full flex-col gap-8">
        <div ref={summaryRef} className="flex flex-col gap-4">
          <SelectedVehicleCard lang={lang} />
          <BookingSummary
            lang={lang}
            selectedVehicle={selectedVehicle}
            currency={currency}
            passengers={passengers}
          />
        </div>
        <ArrivalInformation lang={lang} />
        <ReturnInformation lang={lang} />
        <PassengerInformation lang={lang} />
      </div>

      <div className="right relative w-full lg:max-w-sm">
        <div className="lg:sticky lg:top-4 lg:flex lg:flex-col lg:gap-4 lg:h-fit">
          <div className="flex flex-col gap-4 lg:mt-0">
            <PaymentMethods lang={lang} ref={paymentMethodsRef} />
            <BookingSubmission lang={lang} />
          </div>
        </div>
      </div>
    </div>
  );
}
