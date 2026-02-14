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
      }),
    },
  ),
);
