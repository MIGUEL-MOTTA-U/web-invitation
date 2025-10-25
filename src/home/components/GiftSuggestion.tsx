import { Card, CardBody } from "@heroui/react";
import letterEnvelope from "../../assets/images/letter_envelope.png";

const GiftSuggestion = () => {
  return (
    <div className="w-full max-w-[45rem] my-6 mx-2 sm:mx-4">
      {/* Título fuera del card - mismo estilo que Alexander & Marcela */}
      <div className="flex items-center justify-center gap-1 xs:gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 font-medium text-[2rem] xs:text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem]">
        <span className="font-liana text-black">Sugerencia de Regalos</span>
      </div>

      {/* Card con fondo blanco */}
      <Card className="w-full bg-white shadow-lg p-6 sm:p-8 md:p-10">
        <CardBody className="flex flex-col items-center justify-center gap-4 sm:gap-6">
          {/* Texto principal */}
          <h3 className="font-lora font-bold text-center uppercase tracking-[2px] sm:tracking-[3px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black">
            Lluvia de Sobres
          </h3>

          {/* Icono del sobre */}
          <div className="flex items-center justify-center">
            <img
              src={letterEnvelope}
              alt="Sobre de regalo"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default GiftSuggestion;
