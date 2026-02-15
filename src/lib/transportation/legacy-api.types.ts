export interface LegacyDetails {
  place: string;
  lat: string;
  lng: string;
  pickup?: string; // Format: "YYYY-MM-DD HH:mm"
}

export interface LegacyQuoteRequest {
  type: "one-way" | "round-trip";
  language: "en" | "es";
  passengers: number;
  currency: "USD" | "MXN";
  start: LegacyDetails;
  end: LegacyDetails;
}

export interface LegacyQuoteItem {
  id: number;
  name: string;
  passengers: number;
  luggage: number;
  image: string;
  price: string;
  cash_fee: string;
  currency: "USD" | "MXN";
  vehicles: number;
  token: string;
}

export interface LegacyQuoteResponse {
  places: {
    one_way: {
      init: {
        name: string;
        geo: {
          lat: string;
          lng: string;
        };
        time: string;
      };
      end: {
        name: string;
        geo: {
          lat: string;
          lng: string;
        };
        time: string;
      };
    };
    distance: string;
    time: string;
    config: {
      flight_required: boolean;
      iata_code: string;
    };
  };
  items: LegacyQuoteItem[];
}

export interface LegacyErrorResponse {
  error: {
    code: string;
    message: string;
  };
}

export interface CreateReservationPayload {
  service_token: string;
  first_name: string;
  last_name: string;
  email_address: string;
  phone: string;
  flight_number?: string;
  arrival_date?: string;
  comments?: string;
  pay_at_arrival?: number; // 1 for true
  payment_method?: string;
  success_url?: string;
  cancel_url?: string;
  language?: string;
  referral_code?: string;
}

export interface ReservationResponse {
  reservation_id?: string;
  payment_link?: string;
  status?: string;
  total?: number;
  currency?: string;
  customer?: {
    name: string;
    email: string;
  };
  error?:
    | {
        code: string;
        message: string;
      }
    | string;
}
