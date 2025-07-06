import api from './api';

// Tipos basados en tu DTO del backend
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
}

export interface OutputMessage {
  type: string;
  status: number;
  message: string;
  payload?: {
    userId: string;
  };
}

class GuestsService {
  // Crear un nuevo invitado
  async createGuest(guestData: CreateGuestRequest): Promise<OutputMessage> {
    const response = await api.post('/guests', guestData);
    return response.data;
  }

  // Obtener todos los invitados (si tu backend lo soporta)
  async getAllGuests(): Promise<GuestDTO[]> {
    const response = await api.get('/guests');
    return response.data;
  }

  // Obtener un invitado por ID (si tu backend lo soporta)
  async getGuestById(id: string): Promise<GuestDTO> {
    const response = await api.get(`/guests/${id}`);
    return response.data;
  }
}

export const guestsService = new GuestsService(); 