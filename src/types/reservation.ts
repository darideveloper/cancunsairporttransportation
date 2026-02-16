export interface Vehicle {
  id: string;
  name: string;
  price: number;
  maxPassengers: number;
  maxLuggage: number;
  image: string;
  type: string;
}

export interface User {
  name: string;
  phone: string;
  email: string;
}

export interface Reservation {
  code: string;
  service: string;
  passengers: number;
  from: string;
  to: string;
  pickupDate: string;
  vehicle: Vehicle;
  user: User;
  status: "CONFIRMED" | "PENDING" | "CANCELLED"; // Added status field
}
