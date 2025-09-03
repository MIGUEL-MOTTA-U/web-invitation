import {
  Button,
  Card,
  CardBody,
  Input,
  Radio,
  RadioGroup,
} from "@heroui/react";
import type React from "react";
import { useState } from "react";
import { useGuestForm } from "../../hooks/useGuestForm";

interface FormData {
  names: string[];
  email: string;
  phone: string;
  message: string;
  confirmed: boolean;
}

const AttendanceForm = () => {
  const { loading, submitGuestsArray } = useGuestForm();
  const [formData, setFormData] = useState<FormData>({
    names: [""],
    email: "",
    phone: "",
    message: "",
    confirmed: false,
  });
  const [nameIds] = useState(() => [crypto.randomUUID()]);

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean | string[]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNameChange = (index: number, value: string) => {
    const newNames = [...formData.names];
    newNames[index] = value;
    setFormData((prev) => ({
      ...prev,
      names: newNames,
    }));
  };

  const addAccompanist = () => {
    setFormData((prev) => ({
      ...prev,
      names: [...prev.names, ""],
    }));
    nameIds.push(crypto.randomUUID());
  };

  const removeAccompanist = (index: number) => {
    if (formData.names.length > 1) {
      const newNames = formData.names.filter((_, i) => i !== index);
      setFormData((prev) => ({
        ...prev,
        names: newNames,
      }));
      nameIds.splice(index, 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Filtrar nombres vacíos y verificar que al menos uno tenga contenido
    const validNames = formData.names.filter((name) => name.trim());

    if (
      validNames.length === 0 //||
      //!formData.email.trim() ||
      //!formData.phone.trim()
    ) {
      alert("Por favor completa todos los campos obligatorios");
      return;
    }

    try {
      // Enviar arreglo de objetos { name, confirmed }
      await submitGuestsArray(
        validNames.map((name) => ({ name: name.trim(), confirmed: formData.confirmed }))
      );

      // Limpiar formulario después del éxito
      setFormData({
        names: [""],
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
              className="mb-4 flex flex-col xs:flex-row gap-2 xs:gap-4  items-center"
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
              htmlFor="name-0"
              className="block text-sm font-medium text-gray-700 mb-3 sm:mb-4 md:mb-5 text-lg sm:text-xl md:text-[1.5rem]"
            >
              Nombre y Apellido *
            </label>
            <div className="space-y-2 sm:space-y-3">
              {formData.names.map((name, index) => (
                <div key={nameIds[index]} className="flex gap-1 sm:gap-2">
                  <Input
                    id={index === 0 ? "name-0" : undefined}
                    type="text"
                    size="lg"
                    value={name}
                    onChange={(e) => handleNameChange(index, e.target.value)}
                    placeholder={
                      index === 0 ? "Tu nombre completo" : "Nombre Completo"
                    }
                    required={index === 0}
                    className="flex-1 bg-transparent"
                    variant="bordered"
                    color="primary"
                  />
                  {index > 0 && (
                    <Button
                      type="button"
                      variant="light"
                      color="danger"
                      size="sm"
                      onPress={() => removeAccompanist(index)}
                      className="px-2 sm:px-3 min-w-0 bg-transparent border-none text-lg sm:text-xl"
                    >
                      ×
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="light"
                color="primary"
                size="lg"
                onPress={addAccompanist}
                className="w-full bg-transparent border-none text-sm sm:text-base md:text-[.95rem] font-bold"
              >
                + Agregar Acompañante
              </Button>
            </div>
          </div>

          {/*
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
              className="w-full bg-transparent border-none"
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
                className="w-full rounded-l-none bg-transparent border-none"
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
              className="w-full bg-transparent border-none"
              rows={3}
            />
          </div>
          */}

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

export default AttendanceForm;
