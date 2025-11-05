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
import { useGuestForm } from "../../hooks/useGuestForm";
import type { CreateGuestRequest } from "../../types/guest";

const ConfirmationForm = () => {
  const { loading, submitGuestForm } = useGuestForm();
  const [formData, setFormData] = useState<CreateGuestRequest>({
    name: "",
    message: "",
    confirmed: false,
  });

  const handleInputChange = (
    field: keyof CreateGuestRequest,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert("Por favor ingresa tu nombre");
      return;
    }

    try {
      // Crear el objeto sin incluir email, phone y phoneCountryCode
      const guestData: CreateGuestRequest = {
        name: formData.name.trim(),
        message: formData.message?.trim() || null,
        confirmed: formData.confirmed,
      };

      await submitGuestForm(guestData);

      // Limpiar formulario después del éxito
      setFormData({
        name: "",
        message: "",
        confirmed: false,
      });
    } catch {
      // El error ya se maneja en el hook con toast
    }
  };

  return (
    <Card className="w-full max-w-[45rem] my-4 sm:my-6 p-3 sm:p-4 md:p-6 bg-transparent shadow-none border-none mx-2 sm:mx-4">
      <CardBody className="p-0">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 sm:space-y-8 md:space-y-10"
        >
          <div>
            <span className="font-bold mb-2 block uppercase text-center font-lora tracking-[1px] xs:tracking-[2px] sm:tracking-[3px] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem]">
              Confirmar asistencia
            </span>
            <span className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 mt-3 sm:mt-4 md:mt-5 block text-center font-lora tracking-[1px] xs:tracking-[2px] sm:tracking-[3px] text-base xs:text-lg sm:text-xl md:text-2xl lg:text-[1.8rem]">
              <span className="block whitespace-nowrap">
                Por favor, confirma tu asistencia
              </span>
              <span className="block">¡Esperamos que estés allí!</span>
            </span>
            <RadioGroup
              value={formData.confirmed ? "yes" : "no"}
              size="lg"
              onValueChange={(value) =>
                handleInputChange("confirmed", value === "yes")
              }
              className="mb-4 flex flex-col xs:flex-row gap-2 xs:gap-4 items-center"
            >
              <Radio value="yes" className="text-sm sm:text-base">
                Sí, allí estaré
              </Radio>
              <Radio value="no" className="text-sm sm:text-base">
                No podré asistir
              </Radio>
            </RadioGroup>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-3 sm:mb-4 md:mb-5 text-lg sm:text-xl md:text-[1.5rem]"
            >
              Nombre y Apellido *
            </label>
            <Input
              id="name"
              type="text"
              size="lg"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Tu nombre completo"
              required
              className="flex-1 bg-transparent"
              variant="bordered"
              color="primary"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-3 sm:mb-4 md:mb-5 text-lg sm:text-xl md:text-[1.5rem]"
            >
              ¿Tienes algún mensaje para nosotros?
            </label>
            <Textarea
              id="message"
              size="lg"
              value={formData.message || ""}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Déjanos un mensaje..."
              className="w-full bg-transparent"
              variant="bordered"
              color="primary"
              minRows={3}
            />
          </div>

          <Button
            type="submit"
            variant="bordered"
            className="w-full h-[2.5rem] sm:h-[2.8rem] uppercase bg-transparent text-sm sm:text-base md:text-[1rem]"
            disabled={loading}
            color="primary"
          >
            {loading ? "Enviando..." : "Enviar Respuesta"}
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default ConfirmationForm;
