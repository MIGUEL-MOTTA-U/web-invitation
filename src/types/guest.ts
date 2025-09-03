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

// Versión simplificada para envíos en lote desde el formulario actual
export interface SimpleGuest {
  name: string;
  confirmed: boolean;
}

// Request shape expected by the backend for bulk creation:
// the first guest is the main guest, the rest are sent as "companions"
export interface CreateGuestsBulkRequest {
  name: string;
  confirmed: boolean;
  companions: SimpleGuest[];
}

export interface OutputMessage {
  type: string;
  status: number;
  message: string;
  payload?: {
    userId: string;
  };
}
