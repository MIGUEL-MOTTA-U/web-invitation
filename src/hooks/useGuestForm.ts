import { useState } from "react";
import { toast } from "react-toastify";
import { guestsService } from "../services/guestsService";
import type { CreateGuestRequest, SimpleGuest } from "../types/guest";

export const useGuestForm = () => {
  const [loading, setLoading] = useState(false);

  const submitGuestForm = async (guestData: CreateGuestRequest) => {
    setLoading(true);

    try {
      const response = await guestsService.createGuest(guestData);
      toast.success(response.message || "¡Invitación enviada exitosamente!");
      return response;
    } catch (e: unknown) {
      const err = e as Error;
      const errorMessage = err.message || "Error al enviar el formulario";
      toast.error(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Nuevo método: enviar arreglo de invitados simples
  const submitGuestsArray = async (guests: SimpleGuest[]) => {
    setLoading(true);
    try {
      const response = await guestsService.createGuestsBulk(guests);
      toast.success(response.message || "¡Invitados enviados exitosamente!");
      return response;
    } catch (e: unknown) {
      const err = e as Error;
      toast.error("Error al enviar los invitados");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    submitGuestForm, // compatibilidad
    submitGuestsArray,
  };
};
