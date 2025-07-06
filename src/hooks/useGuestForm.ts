import { useState } from 'react';
import { guestsService, CreateGuestRequest } from '../services/guestsService';

export const useGuestForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const submitGuestForm = async (guestData: CreateGuestRequest) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    
    try {
      const response = await guestsService.createGuest(guestData);
      setSuccess(response.message);
      return response;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || 'Error al enviar el formulario';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setError(null);
    setSuccess(null);
  };

  return {
    loading,
    error,
    success,
    submitGuestForm,
    resetForm,
  };
}; 