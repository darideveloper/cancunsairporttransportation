import ArrivalInformation from "../../molecules/booking/ArrivalInformation";
import ReturnInformation from "../../molecules/booking/ReturnInformation";
import PassengerInformation from "../../molecules/booking/PassengerInformation";
import BookingSummary from "../../molecules/booking/BookingSummary";
import PaymentMethod from "../../molecules/booking/PaymentMethod";
import SelectedVehicleCard from "./SelectedVehicleCard";
import BookingSubmission from "./BookingSubmission";

interface RegisterFormProps {
  lang: "en" | "es";
}

export default function RegisterForm({ lang }: RegisterFormProps) {
  return (
    <>
      <SelectedVehicleCard lang={lang} />
      <ArrivalInformation lang={lang} />
      <ReturnInformation lang={lang} />
      <PassengerInformation lang={lang} />
      <BookingSummary lang={lang} />
      <PaymentMethod lang={lang} />
      <BookingSubmission lang={lang} />
    </>
  );
}
