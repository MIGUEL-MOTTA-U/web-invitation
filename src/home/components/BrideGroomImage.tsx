import c1 from "../../assets/images/carousel/c1.jpg";
import c2 from "../../assets/images/carousel/c2.jpg";
import c3 from "../../assets/images/carousel/c3.jpg";

const BrideGroomImage = () => (
  <div className="w-full mx-auto flex flex-col items-center justify-center select-none relative mb-8 sm:mb-12 md:mb-16 px-2 sm:px-4">
    <div className="bg-transparent w-full">
      <div className="grid grid-cols-3 gap-0.5 sm:gap-1 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
        {/* Panel izquierdo - Foto 1 con "19" */}
        <div className="relative overflow-hidden">
          <img
            src={c1}
            alt="Alexander y Marcela"
            className="w-full h-full object-cover grayscale"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
          <div className="absolute bottom-0 right-0 transform translate-x-[0.5rem] translate-y-[2rem] xs:translate-x-[0.8rem] xs:translate-y-[3rem] sm:translate-x-[1rem] sm:translate-y-[4rem] md:translate-x-[1.2rem] md:translate-y-[6rem] lg:translate-x-[1.5rem] lg:translate-y-[8.5rem]">
            <span className="text-white text-[4rem] xs:text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[22rem] font-bold drop-shadow-lg">
              19
            </span>
          </div>
        </div>

        {/* Panel central - Foto 2 con "12" */}
        <div className="relative overflow-hidden">
          <img
            src={c2}
            alt="Alexander y Marcela"
            className="w-full h-full object-cover grayscale"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
          <div className="absolute bottom-0 right-0 transform translate-x-[0.5rem] translate-y-[2rem] xs:translate-x-[0.8rem] xs:translate-y-[3rem] sm:translate-x-[1rem] sm:translate-y-[4rem] md:translate-x-[1.2rem] md:translate-y-[6rem] lg:translate-x-[1.5rem] lg:translate-y-[8.5rem]">
            <span className="text-white text-[4rem] xs:text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[22rem] font-bold drop-shadow-lg">
              12
            </span>
          </div>
        </div>

        {/* Panel derecho - Foto 3 con "25" */}
        <div className="relative overflow-hidden">
          <img
            src={c3}
            alt="Alexander y Marcela"
            className="w-full h-full object-cover grayscale"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
          <div className="absolute bottom-0 right-0 transform translate-x-[0.5rem] translate-y-[2rem] xs:translate-x-[0.8rem] xs:translate-y-[3rem] sm:translate-x-[1rem] sm:translate-y-[4rem] md:translate-x-[1.2rem] md:translate-y-[6rem] lg:translate-x-[1.5rem] lg:translate-y-[8.5rem]">
            <span className="text-white text-[4rem] xs:text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[22rem] font-bold drop-shadow-lg">
              25
            </span>
          </div>
        </div>
      </div>

      {/* Sección inferior - Banner blanco con texto */}
      <div className="bg-transparent p-3 sm:p-4 md:p-6 text-center">
        {/* Título principal */}
        <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal text-black mb-2 sm:mb-3 md:mb-4 tracking-wider">
          BIENVENIDOS A NUESTRA BODA
        </h1>

        {/* Nombres con fuente Liana */}
        <div className="flex items-center justify-center gap-1 xs:gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4 font-medium text-[2rem] xs:text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem]">
          <span className="font-liana text-black">Alexander</span>
          <span className="font-liana text-black">&</span>
          <span className="font-liana text-black">Marcela</span>
        </div>

        {/* Versículo bíblico */}
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[2rem] text-black tracking-wider font-semibold">
          ECLESIASTÉS 4:12
        </p>
      </div>
    </div>
  </div>
);

export default BrideGroomImage;
