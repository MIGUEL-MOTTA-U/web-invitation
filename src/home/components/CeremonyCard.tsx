const CeremonyCard = () => {
  // Información del lugar de la ceremonia
  const ceremonyPlace = "Centro de eventos y convenciones AMEVEA";
  const ceremonyAddress = "Vía Suba-Cota Km 3 Camino Clínica Corpas, Suba";

  // Hora de la ceremonia
  const ceremonyTime = "2:00 PM";

  // URL de Google Maps con la ubicación
  const googleMapsUrl =
    "https://www.google.com/maps/place/Centro+de+eventos+y+convenciones+AMEVEA/@4.7694133,-74.083545,18z/data=!4m6!3m5!1s0x8e3f84369e16886d:0xe860a57ad9cf5b8f!8m2!3d4.769712!4d-74.083801!16s%2Fg%2F1tkf20bv?entry=tts&g_ep=EgoyMDI1MTAyOS4yIPu8ASoASAFQAw%3D%3D&skid=5ca3a35d-24e3-4566-b167-39dd49154640";

  return (
    <div className="w-full max-w-[45rem] my-6 mx-2 sm:mx-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 md:p-12 w-full text-center border border-gray-100">
        {/* Icono de anillos */}
        <div className="mb-8">
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-[#08554c]"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            role="img"
            aria-labelledby="rings-title"
          >
            <title id="rings-title">Anillos de matrimonio</title>
            {/* Anillo izquierdo */}
            <circle cx="22" cy="35" r="12" />
            {/* Anillo derecho */}
            <circle cx="42" cy="35" r="12" />
            {/* Cruz izquierda */}
            <path d="M22 23 L22 15" />
            <path d="M20 17 L24 17" />
            {/* Cruz derecha */}
            <path d="M42 23 L42 15" />
            <path d="M40 17 L44 17" />
          </svg>
        </div>

        {/* Título */}
        <h2 className="text-[22px] sm:text-3xl md:text-4xl font-bold tracking-[0.3em] text-gray-800 mb-8 font-lora">
          CEREMONIA
        </h2>

        {/* Ubicación */}
        <p className="text-gray-700 font-medium mb-2 text-base sm:text-lg">
          {ceremonyPlace}
        </p>
        <p className="text-gray-600 mb-8 text-sm sm:text-base">Te esperamos</p>

        {/* Hora */}
        <div className="flex items-center justify-center mb-8">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-light text-gray-700">
              {ceremonyTime.split(" ")[0]}{" "}
              <span className="text-sm sm:text-base">
                {ceremonyTime.split(" ")[1]}
              </span>
            </p>
          </div>
        </div>

        {/* Dirección con punto decorativo */}
        <div className="mb-8">
          <div className="flex justify-center items-center mb-3">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {ceremonyAddress}
          </p>
        </div>

        {/* Botón de ubicación */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#08554c] hover:bg-[#064539] text-white px-8 py-3 rounded-lg transition-all duration-300 text-sm sm:text-base tracking-wider font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          VER UBICACIÓN
        </a>
      </div>
    </div>
  );
};

export default CeremonyCard;
