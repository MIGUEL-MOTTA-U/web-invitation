import c1 from "../../assets/images/carousel/c1.jpg";
import c2 from "../../assets/images/carousel/c2.jpg";
import c3 from "../../assets/images/carousel/c3.jpg";

const BrideGroomImage = () => (
  <div className="w-full mx-auto flex flex-col items-center justify-center select-none relative mb-16">
    <div className="bg-transparent w-full">
      <div className="grid grid-cols-3 gap-1 h-[80vh]">
        {/* Panel izquierdo - Foto 1 con "19" */}
        <div className="relative overflow-hidden">
          <img
            src={c1}
            alt="Alexander y Marcela"
            className="w-full h-full object-cover grayscale"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
          <div className="absolute bottom-0 right-0 transform translate-x-[1.5rem] translate-y-[8.5rem]">
            <span className="text-white text-[22rem] font-bold drop-shadow-lg">
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
          <div className="absolute bottom-0 right-0 transform translate-x-[1.5rem] translate-y-[8.5rem]">
            <span className="text-white text-[22rem] font-bold drop-shadow-lg">
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
          <div className="absolute bottom-0 right-0 transform translate-x-[1.5rem] translate-y-[8.5rem]">
            <span className="text-white text-[22rem] font-bold drop-shadow-lg">
              25
            </span>
          </div>
        </div>
      </div>

      {/* Sección inferior - Banner blanco con texto */}
      <div className="bg-transparent p-6 text-center">
        {/* Título principal */}
        <h1 className="text-[2.5rem] font-normal text-black mb-4 tracking-wider">
          BIENVENIDOS A NUESTRA BODA
        </h1>

        {/* Nombres con fuente Liana */}
        <div className="flex items-center justify-center gap-4 mb-4 font-medium text-[8rem]">
          <span className="font-liana text-black">Alexander</span>
          <span className="font-liana text-black">&</span>
          <span className="font-liana text-black">Marcela</span>
        </div>

        {/* Versículo bíblico */}
        <p className="text-[2rem] text-black tracking-wider font-semibold">
          ECLESIASTÉS 4:12
        </p>
      </div>
    </div>
  </div>
);

export default BrideGroomImage;
