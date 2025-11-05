import { Button, Card, CardBody } from "@heroui/react";
import { IoMan, IoWoman } from "react-icons/io5";

const DressCode = () => {
  return (
    <Card className="w-full max-w-[45rem] my-6 mx-2 sm:mx-4 p-4 sm:p-6 md:p-8 bg-white shadow-lg">
      <CardBody className="flex flex-col items-center gap-6">
        {/* Título principal */}
        <h2 className="font-bold text-center uppercase font-lora tracking-[2px] sm:tracking-[3px] text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Código de Vestuario
        </h2>

        {/* Subtítulo */}
        <p className="text-center font-lora text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
          Formal de Gala
        </p>

        {/* Separador */}
        <div className="w-full border-t border-gray-200 my-2" />

        {/* Colores Reservados */}
        <div className="flex flex-col items-center gap-4 w-full">
          <h3 className="font-lora text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
            Colores Reservados
          </h3>
          <div className="flex gap-6 sm:gap-8 items-center justify-center">
            {/* Círculo Blanco */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-4 border-gray-300 shadow-lg" />
              <span className="text-xs font-bold sm:text-sm font-lora text-gray-700">
                Blanco
              </span>
            </div>
            {/* Círculo Verde Esmeralda */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#08554c] shadow-lg" />
              <span className="text-xs font-bold sm:text-sm font-lora text-gray-700">
                Verde Esmeralda
              </span>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="w-full border-t border-gray-200 my-2" />

        {/* Sección Damas */}
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-col items-center gap-2">
            {/* Icono Dama */}
            <IoWoman
              className="w-12 h-12 sm:w-16 sm:h-16 text-[#08554c]"
              aria-label="Vestimenta para damas"
            />
            <h3 className="font-lora text-base sm:text-lg md:text-xl font-semibold text-gray-800">
              Damas
            </h3>
          </div>

          <p className="text-center font-lora text-sm sm:text-base md:text-lg px-4 leading-relaxed text-gray-700">
            Vestido largo de fiesta en el tono que más las haga brillar, con
            excepción del blanco y del verde esmeralda — el color distintivo de
            nuestras damas de honor{" "}
            <span role="img" aria-label="corazón verde">
              💚
            </span>
          </p>

          <Button
            type="button"
            variant="solid"
            size="lg"
            as="a"
            href="https://pin.it/6di4SwXvz"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#08554c] hover:bg-[#064539] text-white min-w-[140px] sm:min-w-[160px] text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Ver Más
          </Button>
        </div>

        {/* Separador */}
        <div className="w-full border-t border-gray-200 my-2" />

        {/* Sección Caballeros */}
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-col items-center gap-2">
            {/* Icono Caballero */}
            <IoMan
              className="w-12 h-12 sm:w-16 sm:h-16 text-[#08554c]"
              aria-label="Vestimenta para caballeros"
            />
            <h3 className="font-lora text-base sm:text-lg md:text-xl font-semibold text-gray-800">
              Caballeros
            </h3>
          </div>

          <p className="text-center font-lora text-sm sm:text-base md:text-lg px-4 leading-relaxed text-gray-700">
            Traje formal - Zapato formal o tenis blancos
          </p>

          <Button
            type="button"
            variant="solid"
            size="lg"
            as="a"
            href="https://pin.it/F8bRXYm6B"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#08554c] hover:bg-[#064539] text-white min-w-[140px] sm:min-w-[160px] text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Ver Más
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default DressCode;
