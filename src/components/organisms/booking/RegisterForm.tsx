// Components
import ArrivalInformation from "../../molecules/booking/ArrivalInformation";
import ReturnInformation from "../../molecules/booking/ReturnInformation";
import PassengerInformation from "../../molecules/booking/PassengerInformation";
import BookingSummary from "../../molecules/booking/BookingSummary";
import PaymentMethod from "../../molecules/booking/PaymentMethod";
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
      <ArrivalInformation lang={lang} />
      <ReturnInformation lang={lang} />
      <PassengerInformation lang={lang} />
      <BookingSummary
        lang={lang}
        selectedVehicle={selectedVehicle}
        currency={currency}
        passengers={passengers}
      />
      <PaymentMethod lang={lang} />
      <BookingSubmission lang={lang} />
    </>
  );
}
