import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface LocationData {
  name: string;
  lat: number;
  lng: number;
  address?: string;
}

export interface SelectedVehicle {
  token: string;
  name: string;
  image: string;
  maxPassengers: number;
  maxLuggage: number;
  price: number;
  currency: string;
  type?: string;
}

interface SearchFormState {
  tripType: "oneWay" | "roundTrip";
  currency: "USD" | "MXN";
  locationFrom: string;
  locationFromData: LocationData | null;
  locationTo: string;
  locationToData: LocationData | null;
  departureDate: string;
  departureTime: string;
  returnDate: string;
  returnTime: string;
  passengers: number;
  selectedVehicle: SelectedVehicle | null;
  airline: string;
  flightNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
  setTripType: (tripType: "oneWay" | "roundTrip") => void;
  setCurrency: (currency: "USD" | "MXN") => void;
  setLocationFrom: (location: string | LocationData) => void;
  setLocationTo: (location: string | LocationData) => void;
  setDepartureDate: (departureDate: string) => void;
  setDepartureTime: (departureTime: string) => void;
  setReturnDate: (returnDate: string) => void;
  setReturnTime: (returnTime: string) => void;
  setPassengers: (passengers: number) => void;
  setSelectedVehicle: (vehicle: SelectedVehicle | null) => void;
  setAirline: (airline: string) => void;
  setFlightNumber: (flightNumber: string) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setNotes: (notes: string) => void;
}

export const useSearchFormStore = create<SearchFormState>()(
  persist(
    (set) => ({
      tripType: "roundTrip",
      currency: "MXN",
      locationFrom: "",
      locationFromData: null,
      locationTo: "",
      locationToData: null,
      departureDate: "",
      departureTime: "",
      returnDate: "",
      returnTime: "",
      passengers: 1,
      selectedVehicle: null,
      airline: "",
      flightNumber: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      notes: "",
      setTripType: (tripType) => set({ tripType }),
      setCurrency: (currency) => set({ currency }),
      setLocationFrom: (location) => {
        if (typeof location === "string") {
          set({ locationFrom: location, locationFromData: null });
        } else {
          set({ locationFrom: location.name, locationFromData: location });
        }
      },
      setLocationTo: (location) => {
        if (typeof location === "string") {
          set({ locationTo: location, locationToData: null });
        } else {
          set({ locationTo: location.name, locationToData: location });
        }
      },
      setDepartureDate: (departureDate) => set({ departureDate }),
      setDepartureTime: (departureTime) => set({ departureTime }),
      setReturnDate: (returnDate) => set({ returnDate }),
      setReturnTime: (returnTime) => set({ returnTime }),
      setPassengers: (passengers) => set({ passengers }),
      setSelectedVehicle: (selectedVehicle) => set({ selectedVehicle }),
      setAirline: (airline) => set({ airline }),
      setFlightNumber: (flightNumber) => set({ flightNumber }),
      setFirstName: (firstName) => set({ firstName }),
      setLastName: (lastName) => set({ lastName }),
      setEmail: (email) => set({ email }),
      setPhone: (phone) => set({ phone }),
      setNotes: (notes) => set({ notes }),
    }),
    {
      name: "search-form-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        tripType: state.tripType,
        currency: state.currency,
        locationFrom: state.locationFrom,
        locationFromData: state.locationFromData,
        locationTo: state.locationTo,
        locationToData: state.locationToData,
        departureDate: state.departureDate,
        departureTime: state.departureTime,
        returnDate: state.returnDate,
        returnTime: state.returnTime,
        passengers: state.passengers,
        selectedVehicle: state.selectedVehicle,
        airline: state.airline,
        flightNumber: state.flightNumber,
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        phone: state.phone,
        notes: state.notes,
      }),
    },
  ),
);
