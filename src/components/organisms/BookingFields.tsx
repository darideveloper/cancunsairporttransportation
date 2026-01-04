// import { useEffect } from 'react'
import { useSearchFormStore } from '../../store/search-form'
import LocationSelect from '../atoms/form/LocationSelect'
import DateInput from '../atoms/form/DateInput'
import TimeInput from '../atoms/form/TimeInput'
import PassengerInput from '../atoms/form/PassengerInput'

interface Props {
  translations: {
    labels: {
      leavingFrom: string
      goingTo: string
      pickupDate: string
      pickupTime: string
      passengers: string
    }
  }
}

export default function BookingFields({ translations }: Props) {
  const state = useSearchFormStore()

  //   useEffect(() => {
  //     console.log('SearchForm State:', state)
  //   }, [state])

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
  } = state

  return (
    <div className='grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-18 gap-4 py-4'>
      {/* Departure Trip */}
      <div className='sm:col-span-3 lg:col-span-5'>
        <LocationSelect
          id='location-from'
          label={translations.labels.leavingFrom}
          value={locationFrom}
          onChange={setLocationFrom}
        />
      </div>
      <div className='sm:col-span-3 lg:col-span-5'>
        <LocationSelect
          id='location-to'
          label={translations.labels.goingTo}
          value={locationTo}
          onChange={setLocationTo}
        />
      </div>
      <div className='sm:col-span-2 lg:col-span-3'>
        <DateInput
          id='departure-date'
          label={translations.labels.pickupDate}
          value={departureDate}
          onChange={setDepartureDate}
        />
      </div>
      <div className='sm:col-span-2 lg:col-span-3'>
        <TimeInput
          id='departure-time'
          label={translations.labels.pickupTime}
          value={departureTime}
          onChange={setDepartureTime}
        />
      </div>
      <div className='sm:col-span-2 lg:col-span-2'>
        <PassengerInput
          id='passengers'
          label={translations.labels.passengers}
          value={passengers}
          onChange={setPassengers}
        />
      </div>

      {/* Return Trip (Rendered only if roundTrip) */}
      {tripType === 'roundTrip' && (
        <>
          <div className='sm:col-span-3 lg:col-span-5'>
            <LocationSelect
              id='return-location-from'
              label={translations.labels.leavingFrom}
              value={locationTo} // Swapped for return
              disabled={true}
            />
          </div>
          <div className='sm:col-span-3 lg:col-span-5'>
            <LocationSelect
              id='return-location-to'
              label={translations.labels.goingTo}
              value={locationFrom} // Swapped for return
              disabled={true}
            />
          </div>
          <div className='sm:col-span-2 lg:col-span-3'>
            <DateInput
              id='return-date'
              label={translations.labels.pickupDate}
              value={returnDate}
              onChange={setReturnDate}
            />
          </div>
          <div className='sm:col-span-2 lg:col-span-3'>
            <TimeInput
              id='return-time'
              label={translations.labels.pickupTime}
              value={returnTime}
              onChange={setReturnTime}
            />
          </div>
          <div className='sm:col-span-2 lg:col-span-2'>
            <PassengerInput
              id='return-passengers'
              label={translations.labels.passengers}
              value={passengers}
              disabled={true}
            />
          </div>
        </>
      )}
    </div>
  )
}
