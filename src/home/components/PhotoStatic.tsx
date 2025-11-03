import fotico1 from "../../assets/images/carousel/fotico1.jpg";

const PhotoStatic = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center select-none relative px-2 sm:px-4">
      <div className="relative w-full h-[25rem] xs:h-[30rem] sm:h-[35rem] md:h-[40rem] lg:h-[50rem] flex items-start justify-center">
        {/* Imagen estática - primera foto del carousel */}
        <img
          src={fotico1}
          alt="Foto de la boda"
          className="relative z-20 w-full h-[25rem] xs:h-[30rem] sm:h-[35rem] md:h-[40rem] lg:h-[50rem] xl:h-[800px] object-cover rounded-lg shadow-2xl"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default PhotoStatic;
