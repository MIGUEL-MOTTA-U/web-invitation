import { Button } from "@heroui/react";
import { useRef, useState } from "react";
import "./PhotoCarousel.css";

// Importar las imágenes directamente para que Vite las procese correctamente
import c1 from "../../assets/images/carousel/c1.jpg";
import c2 from "../../assets/images/carousel/c2.jpg";
import c3 from "../../assets/images/carousel/c3.jpg";
import c4 from "../../assets/images/carousel/c4.jpg";
import c5 from "../../assets/images/carousel/c5.jpg";
import c6 from "../../assets/images/carousel/c6.jpg";
import c7 from "../../assets/images/carousel/c7.jpg";
import c8 from "../../assets/images/carousel/c8.jpg";
import c9 from "../../assets/images/carousel/c9.jpg";

const images = [c1, c2, c3, c4, c5, c6, c7, c8, c9];

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
  const goTo = (idx: number) => {
    setCurrent(getIndex(idx));
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

  // Índices de las imágenes a mostrar
  const prevIdx = getIndex(current - 1);
  const nextIdx = getIndex(current + 1);

  return (
    <div className="w-full max-w-2xl mx-auto my-8 flex flex-col items-center select-none">
      <div
        className="relative w-full flex items-center justify-center h-64 md:h-80"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Imagen anterior (peek) */}
        <button
          type="button"
          className="carousel-peek-btn absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-40 md:h-56 z-10 p-0 m-0 bg-transparent border-none outline-none cursor-pointer"
          onClick={() => goTo(prevIdx)}
          aria-label={`Ver foto ${prevIdx + 1}`}
        >
          <img
            src={images[prevIdx]}
            alt={`Foto ${prevIdx + 1}`}
            className="object-cover w-full h-full rounded-lg opacity-60 transition-all duration-300 hover:opacity-80 shadow-md"
            draggable={false}
          />
        </button>
        {/* Imagen siguiente (peek) */}
        <button
          type="button"
          className="carousel-peek-btn absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-40 md:h-56 z-10 p-0 m-0 bg-transparent border-none outline-none cursor-pointer"
          onClick={() => goTo(nextIdx)}
          aria-label={`Ver foto ${nextIdx + 1}`}
        >
          <img
            src={images[nextIdx]}
            alt={`Foto ${nextIdx + 1}`}
            className="object-cover w-full h-full rounded-lg opacity-60 transition-all duration-300 hover:opacity-80 shadow-md"
            draggable={false}
          />
        </button>
        {/* Imagen principal */}
        <img
          key={images[current]}
          src={images[current]}
          alt={`Foto ${current + 1}`}
          className="relative z-20 w-2/3 h-56 md:h-72 object-cover rounded-xl shadow-xl border-4 border-white mx-auto transition-opacity duration-300"
          draggable={false}
        />
        {/* Botón anterior */}
        <Button
          variant="light"
          className="carousel-arrow absolute left-2 top-1/2 -translate-y-1/2 z-30 text-3xl px-2 py-0 min-w-0 min-h-0 bg-transparent hover:text-primary-500 focus:text-primary-500 border-none shadow-none"
          onPress={prev}
        >
          ‹
        </Button>
        {/* Botón siguiente */}
        <Button
          variant="light"
          className="carousel-arrow absolute right-2 top-1/2 -translate-y-1/2 z-30 text-3xl px-2 py-0 min-w-0 min-h-0 bg-transparent hover:text-primary-500 focus:text-primary-500 border-none shadow-none"
          onPress={next}
        >
          ›
        </Button>
      </div>
      <div className="mt-4 text-xs text-gray-500">
        {current + 1} / {images.length}
      </div>
    </div>
  );
};

export default PhotoCarousel;
