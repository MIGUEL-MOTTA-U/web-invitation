import React, { useState } from "react";
import { Button, Card, CardBody, Input, Textarea, Radio, RadioGroup } from "@heroui/react";
import { useGuestForm } from "../../hooks/useGuestForm";
import { CountryCodeSelector } from "../../components/CountryCodeSelector";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  confirmed: boolean;
}

const AttendanceForm = () => {
  const { loading, error, success, submitGuestForm, resetForm } = useGuestForm();
  const [countryCode, setCountryCode] = useState("+57"); // Colombia por defecto
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    confirmed: false,
  });

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      alert("Por favor completa todos los campos obligatorios");
      return;
    }

    try {
      await submitGuestForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        phoneCountryCode: countryCode,
        message: formData.message || undefined,
      });
      
      // Limpiar formulario después del éxito
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        confirmed: false,
      });
    } catch {
      // El error ya se maneja en el hook
    }
  };

  const handleReset = () => {
    resetForm();
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      confirmed: false,
    });
  };

  return (
    <Card className="w-full max-w-md my-6 mx-auto p-6">
      <CardBody>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre y Apellido *
            </label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Tu nombre completo"
              required
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo Electrónico *
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="tu@email.com"
              required
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Número de Celular (sin código de país) *
            </label>
            <div className="flex">
              <CountryCodeSelector
                value={countryCode}
                onChange={setCountryCode}
              />
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="3001234567 (sin código de país)"
                required
                className="w-full rounded-l-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Comentarios (opcional)
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Escribe un mensaje o comentario..."
              className="w-full"
              rows={3}
            />
          </div>

          <div>
            <span className="font-semibold mb-2 block">¿Puedes asistir?</span>
            <RadioGroup
              value={formData.confirmed ? "yes" : "no"}
              onValueChange={(value) => handleInputChange("confirmed", value === "yes")}
              className="mb-4 flex gap-4 justify-center"
            >
              <Radio value="yes">Sí</Radio>
              <Radio value="no">No</Radio>
            </RadioGroup>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              {success}
            </div>
          )}

          <div className="flex gap-2">
            <Button
              type="submit"
              variant="shadow"
              className="flex-1"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar"}
            </Button>
            {(success || error) && (
              <Button
                type="button"
                variant="bordered"
                onClick={handleReset}
                className="flex-1"
              >
                Nuevo
              </Button>
            )}
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default AttendanceForm;
