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
  const { loading, submitGuestForm } = useGuestForm();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [countryCode, _setCountryCode] = useState("+57");
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
      await submitGuestForm({
        name: validNames.join(", "),
        email: formData.email,
        phone: formData.phone,
        phoneCountryCode: countryCode,
        message: formData.message || undefined,
        confirmed: formData.confirmed,
      });

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
    <Card className="w-full max-w-md my-6 mx-auto p-6 bg-transparent shadow-none border-none">
      <CardBody className="p-0">
        <form onSubmit={handleSubmit} className="space-y-10">
          <div>
            <span className="font-bold mb-2 block uppercase text-center font-lora tracking-[3px]">
              Confirmar asistencia
            </span>
            <span className="m-6 block text-center font-lora tracking-[3px]">
              <span className="block whitespace-nowrap">
                Por favor, confirma tu asistencia
              </span>
              <span className="block">¡Esperamos que estés allí!</span>
            </span>
            <RadioGroup
              value={formData.confirmed ? "yes" : "no"}
              onValueChange={(value) =>
                handleInputChange("confirmed", value === "yes")
              }
              className="mb-4 flex gap-4 justify-center"
            >
              <Radio value="yes">Sí, allí estaré</Radio>
              <Radio value="no">No podré asistir</Radio>
            </RadioGroup>
          </div>

          <div>
            <label
              htmlFor="name-0"
              className="block text-sm font-medium text-gray-700 mb-2 "
            >
              Nombre y Apellido *
            </label>
            <div className="space-y-3">
              {formData.names.map((name, index) => (
                <div key={nameIds[index]} className="flex gap-2">
                  <Input
                    id={index === 0 ? "name-0" : undefined}
                    type="text"
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
                      className="px-3 min-w-0 bg-transparent border-none"
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
                size="sm"
                onPress={addAccompanist}
                className="w-full bg-transparent border-none"
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
            className="w-full uppercase bg-transparent"
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
