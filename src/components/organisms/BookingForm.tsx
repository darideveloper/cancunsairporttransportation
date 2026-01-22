import { useEffect } from "react";
import { useSearchFormStore } from "../../store/search-form";
import TripTypeControls from "../molecules/booking/TripTypeControls";
import CurrencyControls from "../molecules/booking/CurrencyControls";
import SubmitButton from "../molecules/booking/SubmitButton";
import LocationSelect from "../atoms/form/LocationSelect";
import DateInput from "../atoms/form/DateInput";
import TimeInput from "../atoms/form/TimeInput";
import PassengerInput from "../atoms/form/PassengerInput";

interface Props {
  translations: any;
  defaultFrom?: string;
  defaultTo?: string;
  title?: string;
  className?: string;
}

export default function BookingForm({
  translations,
  defaultFrom,
  defaultTo,
  title,
  className,
}: Props) {
  const state = useSearchFormStore();

  const {
    tripType,
    locationFrom,
    locationTo,
    departureDate,
    departureTime,
    returnDate,
    returnTime,
    passengers,
    setLocationFrom,
    setLocationTo,
    setDepartureDate,
    setDepartureTime,
    setReturnDate,
    setReturnTime,
    setPassengers,
  } = state;

  useEffect(() => {
    // Initialize defaults if not set
    if (!locationFrom && defaultFrom) {
      setLocationFrom(defaultFrom);
    }
    if (!locationTo && defaultTo) {
      setLocationTo(defaultTo);
    }

    // Initialize date/time if not set
    if (!departureDate) {
      const now = new Date();
      // YYYY-MM-DD
      const dateStr = now.toISOString().split("T")[0];
      setDepartureDate(dateStr);
    }

    if (!departureTime) {
      const now = new Date();
      // HH:MM
      const timeStr = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setDepartureTime(timeStr);
    }
  }, [
    defaultFrom,
    defaultTo,
    locationFrom,
    locationTo,
    departureDate,
    departureTime,
    setLocationFrom,
    setLocationTo,
    setDepartureDate,
    setDepartureTime,
  ]);

  return (
    <section
      id="booking-form"
      className={`container flex w-full justify-center ${className} px-4! sm:px-8!`}
    >
      <form className="bg-accent w-full rounded-xl px-8 py-6">
        {title && (
          <h1 className="mb-4 text-center text-3xl font-bold text-balance">
            {title}
          </h1>
        )}
        {/* Controls */}
        <header className="flex w-full justify-between gap-4 text-sm">
          <TripTypeControls labels={translations.tripType} />
          <CurrencyControls labels={translations.currency} />
          <SubmitButton
            label={translations.submit}
            className="hidden @xl:block"
          />
        </header>

        {/* Fields */}
        <div className="grid grid-cols-1 gap-4 py-4 @lg:grid-cols-6 @4xl:grid-cols-18">
          {/* Departure Trip */}
          <div className="@lg:col-span-3 @4xl:col-span-5">
            <LocationSelect
              id="location-from"
              label={`${translations.labels.leavingFrom} *`}
              value={locationFrom}
              onChange={setLocationFrom}
              required={true}
            />
          </div>
          <div className="@lg:col-span-3 @4xl:col-span-5">
            <LocationSelect
              id="location-to"
              label={translations.labels.goingTo}
              value={locationTo}
              onChange={setLocationTo}
            />
          </div>
          <div className="@lg:col-span-2 @4xl:col-span-3">
            <DateInput
              id="departure-date"
              label={translations.labels.pickupDate}
              value={departureDate}
              onChange={setDepartureDate}
            />
          </div>
          <div className="@lg:col-span-2 @4xl:col-span-3">
            <TimeInput
              id="departure-time"
              label={translations.labels.pickupTime}
              value={departureTime}
              onChange={setDepartureTime}
            />
          </div>
          <div className="@lg:col-span-2 @4xl:col-span-2">
            <PassengerInput
              id="passengers"
              label={translations.labels.passengers}
              value={passengers}
              onChange={setPassengers}
            />
          </div>

          {/* Return Trip (Rendered only if roundTrip) */}
          {tripType === "roundTrip" && (
            <>
              <div className="@lg:col-span-3 @4xl:col-span-5">
                <LocationSelect
                  id="return-location-from"
                  label={translations.labels.leavingFrom}
                  value={locationTo} // Swapped for return
                  disabled={true}
                />
              </div>
              <div className="@lg:col-span-3 @4xl:col-span-5">
                <LocationSelect
                  id="return-location-to"
                  label={translations.labels.goingTo}
                  value={locationFrom} // Swapped for return
                  disabled={true}
                />
              </div>
              <div className="@lg:col-span-2 @4xl:col-span-3">
                <DateInput
                  id="return-date"
                  label={translations.labels.pickupDate}
                  value={returnDate}
                  onChange={setReturnDate}
                />
              </div>
              <div className="@lg:col-span-2 @4xl:col-span-3">
                <TimeInput
                  id="return-time"
                  label={translations.labels.pickupTime}
                  value={returnTime}
                  onChange={setReturnTime}
                />
              </div>
              <div className="@lg:col-span-2 @4xl:col-span-2">
                <PassengerInput
                  id="return-passengers"
                  label={translations.labels.passengers}
                  value={passengers}
                  disabled={true}
                />
              </div>
            </>
          )}
        </div>

        <footer>
          <SubmitButton
            label={translations.submit}
            className="mt-4 block w-full @xl:hidden"
          />
        </footer>
      </form>
    </section>
  );
}
