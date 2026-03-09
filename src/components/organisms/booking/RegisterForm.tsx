// Components
import ArrivalInformation from "../../molecules/booking/ArrivalInformation";
import ReturnInformation from "../../molecules/booking/ReturnInformation";
import PassengerInformation from "../../molecules/booking/PassengerInformation";
import BookingSummary from "../../molecules/booking/BookingSummary";
import PaymentMethods from "../../molecules/booking/PaymentMethods";
import SelectedVehicleCard from "./SelectedVehicleCard";
import BookingSubmission from "./BookingSubmission";

// Libs
import { useSearchFormStore } from "../../../store/search-form";

interface RegisterFormProps {
  lang: "en" | "es";
}

export default function RegisterForm({ lang }: RegisterFormProps) {
  const { selectedVehicle, currency, passengers } = useSearchFormStore();

  return (
    <>
      <SelectedVehicleCard lang={lang} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="left col-span-2 flex flex-col gap-8">
          <ArrivalInformation lang={lang} />
          <ReturnInformation lang={lang} />
          <PassengerInformation lang={lang} />
        </div>
        <div className="right col-span-1 flex flex-col gap-4">
          <BookingSummary
            lang={lang}
            selectedVehicle={selectedVehicle}
            currency={currency}
            passengers={passengers}
          />
          <PaymentMethods lang={lang} />
          <BookingSubmission lang={lang} />
        </div>
      </div>
    </>
  );
}
