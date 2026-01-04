import { create } from 'zustand'

interface SearchFormState {
  tripType: 'oneWay' | 'roundTrip'
  currency: 'USD' | 'MXN'
  locationFrom: string
  locationTo: string
  departureDate: string
  departureTime: string
  returnDate: string
  returnTime: string
  passengers: number
  setTripType: (tripType: 'oneWay' | 'roundTrip') => void
  setCurrency: (currency: 'USD' | 'MXN') => void
  setLocationFrom: (locationFrom: string) => void
  setLocationTo: (locationTo: string) => void
  setDepartureDate: (departureDate: string) => void
  setDepartureTime: (departureTime: string) => void
  setReturnDate: (returnDate: string) => void
  setReturnTime: (returnTime: string) => void
  setPassengers: (passengers: number) => void
}

export const useSearchFormStore = create<SearchFormState>((set) => ({
  tripType: 'roundTrip',
  currency: 'MXN',
  locationFrom: '',
  locationTo: '',
  departureDate: '',
  departureTime: '',
  returnDate: '',
  returnTime: '',
  passengers: 1,
  setTripType: (tripType) => set({ tripType }),
  setCurrency: (currency) => set({ currency }),
  setLocationFrom: (locationFrom) => set({ locationFrom }),
  setLocationTo: (locationTo) => set({ locationTo }),
  setDepartureDate: (departureDate) => set({ departureDate }),
  setDepartureTime: (departureTime) => set({ departureTime }),
  setReturnDate: (returnDate) => set({ returnDate }),
  setReturnTime: (returnTime) => set({ returnTime }),
  setPassengers: (passengers) => set({ passengers }),
}))
