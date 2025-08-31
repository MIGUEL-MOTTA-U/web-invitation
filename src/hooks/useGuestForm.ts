import { useState } from "react";
import { toast } from "react-toastify";
import { guestsService } from "../services/guestsService";
import type { CreateGuestRequest } from "../types/guest";

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

  return {
    loading,
    submitGuestForm,
  };
};
