import c1 from "../../assets/images/carousel/c1.jpg";
import c2 from "../../assets/images/carousel/c2.jpg";
import c3 from "../../assets/images/carousel/c3.jpg";
import f1 from "../../assets/images/carousel/f1.jpg";
import f2 from "../../assets/images/carousel/f2.jpg";
import g4 from "../../assets/images/carousel/g4.jpg";

interface BrideGroomImageProps {
  useAlternativeImages?: boolean;
}

const BrideGroomImage = ({
  useAlternativeImages = false,
}: BrideGroomImageProps) => {
  const leftImage = useAlternativeImages ? c2 : f2;
  const centerImage = useAlternativeImages ? c1 : f1;
  const rightImage = useAlternativeImages ? c3 : g4;

  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center select-none relative mb-8 sm:mb-12 md:mb-16 px-2 sm:px-4">
      <div className="bg-transparent w-full">
        <div className="grid grid-cols-3 gap-0.5 sm:gap-1 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
          {/* Panel izquierdo - Foto 1 con "19" */}
          <div className="relative overflow-hidden">
            <img
              src={leftImage}
              alt="Alexander y Marcela"
              className="w-full h-full object-cover "
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
            <div className="absolute bottom-0 right-0 translate-x-[.4rem] translate-y-[1.9rem] xs:translate-x-[0.5rem] xs:translate-y-[2.5rem] sm:translate-x-[0.5rem] sm:translate-y-[3.3rem] md:translate-x-[0.6rem] md:translate-y-[5rem] lg:translate-x-[.8rem] lg:translate-y-[5.5rem] xl:translate-x-[1.0rem] xl:translate-y-[7rem] 2xl:translate-x-[2rem] 2xl:translate-y-[9.8rem]">
              <span className="text-white text-[5rem] xs:text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[13rem] 2xl:text-[24rem] xl:text-[18rem] font-bold drop-shadow-lg">
                19
              </span>
            </div>
          </div>

          {/* Panel central - Foto 2 con "12" */}
          <div className="relative overflow-hidden">
            <img
              src={centerImage}
              alt="Alexander y Marcela"
              className="w-full h-full object-cover  "
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
            <div className="absolute bottom-0 right-0 translate-x-[.4rem] translate-y-[1.9rem] xs:translate-x-[0.5rem] xs:translate-y-[2.5rem] sm:translate-x-[0.5rem] sm:translate-y-[3.3rem] md:translate-x-[0.6rem] md:translate-y-[5rem] lg:translate-x-[.8rem] lg:translate-y-[5.5rem] xl:translate-x-[1.0rem] xl:translate-y-[7rem] 2xl:translate-x-[2rem] 2xl:translate-y-[9.8rem]">
              <span className="text-white text-[5rem] xs:text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[13rem] 2xl:text-[24rem] xl:text-[18rem] font-bold drop-shadow-lg">
                12
              </span>
            </div>
          </div>

          {/* Panel derecho - Foto 3 con "25" */}
          <div className="relative overflow-hidden">
            <img
              src={rightImage}
              alt="Alexander y Marcela"
              className="w-full h-full object-cover "
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
            <div className="absolute bottom-0 right-0 translate-x-[.4rem] translate-y-[1.9rem] xs:translate-x-[0.5rem] xs:translate-y-[2.5rem] sm:translate-x-[0.5rem] sm:translate-y-[3.3rem] md:translate-x-[0.6rem] md:translate-y-[5rem] lg:translate-x-[.8rem] lg:translate-y-[5.5rem] xl:translate-x-[1.0rem] xl:translate-y-[7rem] 2xl:translate-x-[2rem] 2xl:translate-y-[9.8rem]">
              <span className="text-white text-[5rem] xs:text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[13rem] 2xl:text-[24rem] xl:text-[18rem] font-bold drop-shadow-lg">
                25
              </span>
            </div>
          </div>
        </div>

        {/* Sección inferior - Banner blanco con texto */}
        <div className="bg-transparent sm:p-4 md:p-6 text-center">
          {/* Título principal */}
          <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal text-black mb-4 tracking-wider">
            BIENVENIDOS A NUESTRA BODA
          </h1>

          {/* Nombres con fuente Liana */}
          <div className="flex items-center justify-center gap-1 xs:gap-2 sm:gap-3 md:gap-4 my-5 xl:my-[2.5rem] font-medium text-[2rem] xs:text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem]">
            <span className="font-liana text-black">Alexander</span>
            <span className="font-liana text-black">&</span>
            <span className="font-liana text-black">Marcela</span>
          </div>

          {/* Versículo bíblico */}
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[2rem] text-black tracking-wider font-semibold mt-4">
            ECLESIASTÉS 4:12
          </p>
          <p className="text-sm xs:text-base sm:text-lg mt-[.5rem] mb-[.5rem] md:text-xl lg:text-2xl xl:text-[2rem] text-black tracking-wider font-normal">
            Y si alguno prevaleciere contra uno, dos le resistirán; y cordón de
            tres dobleces no se rompe pronto
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrideGroomImage;
