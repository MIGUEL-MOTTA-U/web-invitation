export interface GuestDTO {
  id?: string;
  name: string;
  email: string;
  phone: string;
  phoneCountryCode: string;
  message?: string | null;
  confirmed: boolean;
}

export interface CreateGuestRequest {
  name: string;
  email: string;
  phone: string;
  phoneCountryCode: string;
  message?: string;
  confirmed: boolean;
}

export interface OutputMessage {
  type: string;
  status: number;
  message: string;
  payload?: {
    userId: string;
  };
}
