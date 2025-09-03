import type {
  CreateGuestRequest,
  CreateGuestsBulkRequest,
  GuestDTO,
  OutputMessage,
  SimpleGuest,
} from "../types/guest";
import api from "./api";

class GuestsService {
  // Crear un nuevo invitado
  async createGuest(guestData: CreateGuestRequest): Promise<OutputMessage> {
    const response = await api.post("/guests", guestData);
    return response.data;
  }

  // Crear múltiples invitados simples (solo nombre + confirmado)
  // Accepts either an array of SimpleGuest or the full CreateGuestsBulkRequest shape.
  // Converts to { name, confirmed, companions: SimpleGuest[] } and posts to /guests/bulk
  async createGuestsBulk(guests: SimpleGuest[] | CreateGuestsBulkRequest): Promise<OutputMessage> {
    let payload: CreateGuestsBulkRequest;

    if (Array.isArray(guests)) {
      if (guests.length === 0) {
        throw new Error("No guests provided for bulk creation");
      }
      const [first, ...rest] = guests as SimpleGuest[];
      payload = {
        name: first.name,
        confirmed: first.confirmed,
        companions: rest,
      };
    } else {
      payload = guests as CreateGuestsBulkRequest;
    }

    const response = await api.post("/guests/bulk", payload);
    return response.data;
  }

  // Helper para convertir un string compuesto en múltiples invitados
  async createGuestNames(names: string[], confirmed: boolean): Promise<OutputMessage> {
    const simpleGuests: SimpleGuest[] = names
      .filter((n) => n.trim())
      .map((name) => ({ name: name.trim(), confirmed }));
    return this.createGuestsBulk(simpleGuests);
  }

  // Obtener todos los invitados (si tu backend lo soporta)
  async getAllGuests(): Promise<GuestDTO[]> {
    const response = await api.get("/guests");
    return response.data;
  }

  // Obtener un invitado por ID (si tu backend lo soporta)
  async getGuestById(id: string): Promise<GuestDTO> {
    const response = await api.get(`/guests/${id}`);
    return response.data;
  }
}

export const guestsService = new GuestsService();
