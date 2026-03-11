import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { z } from "zod";

export const bookingRegistrationSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "pages.register.errors.firstNameTooShort"),
    lastName: z
      .string()
      .min(2, "pages.register.errors.lastNameTooShort"),
    email: z.string().email("pages.register.errors.invalidEmail"),
    phone: z.string().min(8, "pages.register.errors.phoneTooShort"),
    departureDate: z
      .string()
      .min(1, "pages.register.errors.departureDateRequired"),
    departureTime: z
      .string()
      .min(1, "pages.register.errors.departureTimeRequired"),
    airline: z.string().optional(),
    flightNumber: z.string().optional(),
    tripType: z.enum(["oneWay", "roundTrip"]),
    returnDate: z.string().optional(),
    returnTime: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.tripType === "roundTrip") {
        return (
          data.returnDate &&
          data.returnDate.length > 0 &&
          data.returnTime &&
          data.returnTime.length > 0
        );
      }
      return true;
    },
    {
      message: "pages.register.errors.returnDetailsRequired",
      path: ["returnDate"],
    },
  );

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
  paymentMethod: "paypal" | "card" | "cash";
  paypalId: string | null;
  reservationId: string;
  uuid: string;
  errors: Record<string, string | undefined>;
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
  setPaymentMethod: (method: "paypal" | "card" | "cash") => void;
  setPaypalId: (id: string | null) => void;
  setReservationId: (id: string) => void;
  setUuid: (uuid: string) => void;
  setErrors: (errors: Record<string, string | undefined>) => void;
  setError: (field: string, message: string | undefined) => void;
  validateField: (field: string, value: any) => void;
}

export const useSearchFormStore = create<SearchFormState>()(
  persist(
    (set, get) => ({
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
      paymentMethod: "card",
      paypalId: null,
      reservationId: "",
      uuid: "",
      errors: {},
      setTripType: (tripType) =>
        set((state) => ({
          tripType,
          errors: { ...state.errors, returnDate: undefined, returnTime: undefined },
        })),
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
      setDepartureDate: (departureDate) =>
        set((state) => ({
          departureDate,
          errors: { ...state.errors, departureDate: undefined },
        })),
      setDepartureTime: (departureTime) =>
        set((state) => ({
          departureTime,
          errors: { ...state.errors, departureTime: undefined },
        })),
      setReturnDate: (returnDate) =>
        set((state) => ({
          returnDate,
          errors: { ...state.errors, returnDate: undefined },
        })),
      setReturnTime: (returnTime) =>
        set((state) => ({
          returnTime,
          errors: { ...state.errors, returnTime: undefined },
        })),
      setPassengers: (passengers) => set({ passengers }),
      setSelectedVehicle: (selectedVehicle) => set({ selectedVehicle }),
      setAirline: (airline) => set({ airline }),
      setFlightNumber: (flightNumber) => set({ flightNumber }),
      setFirstName: (firstName) =>
        set((state) => ({
          firstName,
          errors: { ...state.errors, firstName: undefined },
        })),
      setLastName: (lastName) =>
        set((state) => ({
          lastName,
          errors: { ...state.errors, lastName: undefined },
        })),
      setEmail: (email) =>
        set((state) => ({
          email,
          errors: { ...state.errors, email: undefined },
        })),
      setPhone: (phone) =>
        set((state) => ({
          phone,
          errors: { ...state.errors, phone: undefined },
        })),
      setNotes: (notes) => set({ notes }),
      setPaymentMethod: (paymentMethod) => set({ paymentMethod }),
      setPaypalId: (paypalId) => set({ paypalId }),
      setReservationId: (reservationId) => set({ reservationId }),
      setUuid: (uuid) => set({ uuid }),
      setErrors: (errors) => set({ errors }),
      setError: (field, message) =>
        set((state) => ({
          errors: { ...state.errors, [field]: message },
        })),
      validateField: (field, value) => {
        const schema =
          (bookingRegistrationSchema as any)._def.schema ||
          bookingRegistrationSchema;
        const fieldSchema = (schema as any).shape?.[field];

        if (fieldSchema) {
          const result = fieldSchema.safeParse(value);
          if (!result.success) {
            get().setError(field, result.error.errors[0].message);
          } else {
            get().setError(field, undefined);
          }
        }
      },
    }),

    {
      name: "search-form-storage",
      storage: createJSONStorage(() => {
        if (typeof window !== "undefined") {
          return localStorage;
        }
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        };
      }),
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
        paymentMethod: state.paymentMethod,
        paypalId: state.paypalId,
        reservationId: state.reservationId,
        uuid: state.uuid,
      }),
    },
  ),
);
