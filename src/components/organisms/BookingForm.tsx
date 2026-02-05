import { useSearchFormStore } from "../../store/search-form";
import TripTypeControls from "../molecules/booking/TripTypeControls";
import CurrencyControls from "../molecules/booking/CurrencyControls";
import SubmitButton from "../atoms/form/SubmitButton";
import LocationAutocomplete from "../atoms/form/LocationAutocomplete";
import DateInput from "../atoms/form/DateInput";
import TimeInput from "../atoms/form/TimeInput";
import PassengerInput from "../atoms/form/PassengerInput";

interface Props {
  translations: any;
  title?: string;
  className?: string;
  ariaLabel?: string;
}

export default function BookingForm({
  translations,
  title,
  className,
  ariaLabel,
}: Props) {
  const state = useSearchFormStore();

  const {
    tripType,
    locationFrom,
    locationFromData,
    locationTo,
    locationToData,
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

  const isValid = !!locationFromData && !!locationToData;

  return (
    <section
      id="booking-form"
      className={`container flex w-full justify-center ${className} px-4 sm:px-16`}
    >
      <form
        className="bg-accent w-full rounded-xl px-8 py-6"
        aria-label={!title ? ariaLabel : undefined}
        aria-labelledby={title ? "booking-form-title" : undefined}
      >
        {title && (
          <h1
            id="booking-form-title"
            className="mb-4 text-center text-3xl font-bold text-balance"
          >
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
            disabled={!isValid}
          />
        </header>

        {/* Fields */}
        <div className="grid grid-cols-1 gap-4 py-4 @lg:grid-cols-6 @4xl:grid-cols-18">
          {/* Departure Trip */}
          <div className="@lg:col-span-3 @4xl:col-span-5">
            <LocationAutocomplete
              id="location-from"
              label={`${translations.labels.leavingFrom} *`}
              value={locationFrom}
              onChange={setLocationFrom}
              required={true}
            />
          </div>
          <div className="@lg:col-span-3 @4xl:col-span-5">
            <LocationAutocomplete
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
                <LocationAutocomplete
                  id="return-location-from"
                  label={translations.labels.leavingFrom}
                  value={locationTo} // Swapped for return
                  disabled={true}
                />
              </div>
              <div className="@lg:col-span-3 @4xl:col-span-5">
                <LocationAutocomplete
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
            disabled={!isValid}
          />
        </footer>
      </form>
    </section>
  );
}
