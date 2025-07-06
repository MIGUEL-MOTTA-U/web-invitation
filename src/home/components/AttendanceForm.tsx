import {
  Button,
  Card,
  CardBody,
  Input,
  Radio,
  RadioGroup,
  Textarea,
} from "@heroui/react";
import type React from "react";
import { useState } from "react";
import { CountryCodeSelector } from "../../components/CountryCodeSelector";
import { useGuestForm } from "../../hooks/useGuestForm";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  confirmed: boolean;
}

const AttendanceForm = () => {
  const { loading, submitGuestForm } = useGuestForm();
  const [countryCode, setCountryCode] = useState("+57"); // Colombia por defecto
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    confirmed: false,
  });

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
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
        confirmed: formData.confirmed,
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
      // El error ya se maneja en el hook con toast
    }
  };

  return (
    <Card className="w-full max-w-md my-6 mx-auto p-6">
      <CardBody>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
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
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
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
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Número de Celular*
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
                placeholder="3001234567"
                required
                className="w-full rounded-l-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              ¿Qué te gustaría escuchar? (opcional)
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Te recomendamos..."
              className="w-full"
              rows={3}
            />
          </div>

          <div>
            <span className="font-semibold mb-2 block">¿Puedes asistir?</span>
            <RadioGroup
              value={formData.confirmed ? "yes" : "no"}
              onValueChange={(value) =>
                handleInputChange("confirmed", value === "yes")
              }
              className="mb-4 flex gap-4 justify-center"
            >
              <Radio value="yes">Sí</Radio>
              <Radio value="no">No</Radio>
            </RadioGroup>
          </div>

          <Button
            type="submit"
            variant="shadow"
            className="w-full"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default AttendanceForm;
