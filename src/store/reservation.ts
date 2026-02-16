import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ReservationState {
  code: string;
  email: string;
  setCode: (code: string) => void;
  setEmail: (email: string) => void;
  reset: () => void;
}

export const useReservationStore = create<ReservationState>()(
  persist(
    (set) => ({
      code: "",
      email: "",
      setCode: (code) => set({ code }),
      setEmail: (email) => set({ email }),
      reset: () => set({ code: "", email: "" }),
    }),
    {
      name: "reservation-storage",
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
    },
  ),
);
