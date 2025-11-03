import { useRef, useState } from "react";
import "./PhotoCarousel.css";

import r1 from "../../assets/images/carousel/r1.jpg";
import r2 from "../../assets/images/carousel/r2.jpg";
import r3 from "../../assets/images/carousel/r3.jpg";
import r5 from "../../assets/images/carousel/r5.jpg";
import r6 from "../../assets/images/carousel/r6.jpg";
import r7 from "../../assets/images/carousel/r7.jpg";
import r8 from "../../assets/images/carousel/r8.jpg";
import r9 from "../../assets/images/carousel/r9.jpg";

const images = [r1, r2, r3, r9, r5, r6, r7, r8];

const getIndex = (idx: number) => (idx + images.length) % images.length;

const PhotoCarousel = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prev = () => {
    setCurrent((prev) => getIndex(prev - 1));
  };
  const next = () => {
    setCurrent((prev) => getIndex(prev + 1));
  };

  // Swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 40)
        next(); // swipe left
      else if (diff < -40) prev(); // swipe right
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="w-full flex flex-col items-center justify-center select-none relative px-2 sm:px-4">
      <div
        className="relative w-full h-[25rem] xs:h-[30rem] sm:h-[35rem] md:h-[40rem] lg:h-[50rem] flex items-start justify-center"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Imagen principal - altura responsiva */}
        <img
          key={images[current]}
          src={images[current]}
          alt={`Foto ${current + 1}`}
          className="relative z-20 w-full h-[25rem] xs:h-[30rem] sm:h-[35rem] md:h-[40rem] lg:h-[50rem] xl:h-[800px] object-cover transition-all duration-500 rounded-lg shadow-2xl"
          draggable={false}
        />

        {/* Botón anterior - visible en desktop */}
        <button
          type="button"
          onClick={prev}
          className="carousel-arrow hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 text-4xl px-3 py-2 min-w-0 min-h-0 bg-white/80 hover:bg-white text-primary hover:text-primary-800 border-none shadow-lg rounded-full backdrop-blur-sm items-center justify-center cursor-pointer transition-all duration-300"
          aria-label="Foto anterior"
        >
          ‹
        </button>

        {/* Botón siguiente - visible en desktop */}
        <button
          type="button"
          onClick={next}
          className="carousel-arrow hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 text-4xl px-3 py-2 min-w-0 min-h-0 bg-white/80 hover:bg-white text-primary hover:text-primary-800 border-none shadow-lg rounded-full backdrop-blur-sm items-center justify-center cursor-pointer transition-all duration-300"
          aria-label="Foto siguiente"
        >
          ›
        </button>
      </div>

      {/* Indicador de posición */}
      <div className="mt-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
        <span className="text-sm font-medium text-primary">
          {current + 1} / {images.length}
        </span>
      </div>

      {/* Indicadores de puntos (dots) */}
      <div className="flex gap-2 mt-4 flex-wrap justify-center max-w-md">
        {images.map((_, index) => (
          <button
            type="button"
            key={`dot-${index.toString()}`}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-primary w-8"
                : "bg-primary/30 hover:bg-primary/50"
            }`}
            aria-label={`Ir a foto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
