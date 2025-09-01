import { useRef, useState } from "react";
import "./PhotoCarousel.css";

//import c2 from "../../assets/images/carousel/c2.jpg";
import c1 from "../../assets/images/carousel/f1.jpg";

const images = [c1]; //, c3, c4, c5, c6, c7, c8, c9];

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
    <div className="w-full h-screen mx-auto flex flex-col items-center justify-center select-none relative">
      <div
        className="relative w-full h-[50rem] flex items-center justify-center"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Imagen principal - altura fija de 500px con recorte */}
        <img
          key={images[current]}
          src={images[current]}
          alt={`Foto ${current + 1}`}
          className="relative z-20 w-full h-[800px] object-cover mx-auto transition-opacity duration-300"
          draggable={false}
        />

        {/* Botón anterior */}
        {/*
        <Button
          variant="light"
          className="carousel-arrow absolute left-4 top-1/2 -translate-y-1/2 z-30 text-4xl px-3 py-2 min-w-0 min-h-0 bg-white/80 hover:bg-white text-primary hover:text-primary-800 border-none shadow-lg rounded-full backdrop-blur-sm"
          onPress={prev}
        >
          ‹
        </Button>
        
        {/* Botón siguiente 
        <Button
          variant="light"
          className="carousel-arrow absolute right-4 top-1/2 -translate-y-1/2 z-30 text-4xl px-3 py-2 min-w-0 min-h-0 bg-white/80 hover:bg-white text-primary hover:text-primary-800 border-none shadow-lg rounded-full backdrop-blur-sm"
          onPress={next}
        >
          ›
        </Button>
        */}
      </div>

      {/* Indicador de posición 
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
        <span className="text-sm font-medium text-primary">
          {current + 1} / {images.length}
        </span>
      </div>
      */}
    </div>
  );
};

export default PhotoCarousel;
