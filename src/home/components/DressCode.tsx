import { Button, Card, CardBody } from "@heroui/react";

const DressCode = () => {
  // Colores a evitar
  const colorsToAvoid = [
    { name: "Blanco", hex: "#FFFFFF", border: true },
    { name: "Beige", hex: "#F5F5DC" },
    { name: "Negro", hex: "#000000" },
  ];

  return (
    <Card className="w-full max-w-[45rem] my-6 mx-2 sm:mx-4 p-4 sm:p-6 md:p-8 bg-white shadow-lg">
      <CardBody className="flex flex-col items-center gap-6">
        {/* Título principal */}
        <h2 className="font-bold text-center uppercase font-lora tracking-[2px] sm:tracking-[3px] text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Vestimenta Formal
        </h2>

        {/* Mensaje sobre colores */}
        <p className="text-center font-lora text-base sm:text-lg md:text-xl lg:text-2xl px-2">
          Les pedimos de favor a los invitados evitar estos colores:
        </p>

        {/* Paleta de colores a evitar */}
        <div className="flex gap-4 sm:gap-6 justify-center items-center flex-wrap">
          {colorsToAvoid.map((color) => (
            <div key={color.name} className="flex flex-col items-center gap-2">
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full shadow-md ${
                  color.border ? "border-2 border-gray-300" : ""
                }`}
                style={{ backgroundColor: color.hex }}
              />
              <span className="text-sm sm:text-base md:text-lg font-medium">
                {color.name}
              </span>
            </div>
          ))}
        </div>

        {/* Separador */}
        <div className="w-full border-t border-gray-200 my-2" />

        {/* Texto de inspiración */}
        <p className="text-center font-lora text-base sm:text-lg md:text-xl px-2 mb-2">
          Inspírate con estas opciones de colores permitidos:
        </p>

        {/* Botones de Pinterest */}
        <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center w-full px-2">
          <Button
            type="button"
            variant="bordered"
            color="primary"
            size="lg"
            as="a"
            href="https://www.pinterest.com/search/pins/?q=vestimenta%20formal%20hombre%20boda%20azul%20verde%20gris%20vino"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none sm:min-w-[180px] bg-white text-sm sm:text-base md:text-lg"
          >
            <span role="img" aria-label="hombre" className="mr-2 text-xl">
              👔
            </span>
            Opciones Hombre
          </Button>
          <Button
            type="button"
            variant="bordered"
            color="primary"
            size="lg"
            as="a"
            href="https://www.pinterest.com/search/pins/?q=vestido%20formal%20mujer%20boda%20azul%20verde%20vino%20rosa%20lavanda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none sm:min-w-[180px] bg-white text-sm sm:text-base md:text-lg"
          >
            <span role="img" aria-label="mujer" className="mr-2 text-xl">
              👗
            </span>
            Opciones Mujer
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default DressCode;
