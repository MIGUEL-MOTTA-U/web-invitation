import {
  FaBirthdayCake,
  FaDoorOpen,
  FaGlassCheers,
  FaRing,
  FaUtensils,
} from "react-icons/fa";
import { FaChampagneGlasses } from "react-icons/fa6";
import { GiLoveMystery } from "react-icons/gi";
import { MdOutlineCelebration } from "react-icons/md";

const events = [
  {
    time: "4:00 p.m.",
    title: "Llegada de los invitados",
    icon: <FaDoorOpen className="text-xl" />,
    color: "from-blue-400 to-blue-600",
  },
  {
    time: "4:30 p.m.",
    title: "Ceremonia",
    icon: <FaRing className="text-xl" />,
    color: "from-pink-400 to-pink-600",
  },
  {
    time: "5:15 p.m.",
    title: "Cóctel de bienvenida",
    icon: <FaChampagneGlasses className="text-xl" />,
    color: "from-amber-400 to-amber-600",
  },
  {
    time: "6:00 p.m.",
    title: "Recepción y Cena",
    icon: <FaUtensils className="text-xl" />,
    color: "from-green-400 to-green-600",
  },
  {
    time: "7:30 p.m.",
    title: "Brindis",
    icon: <FaGlassCheers className="text-xl" />,
    color: "from-purple-400 to-purple-600",
  },
  {
    time: "8:00 p.m.",
    title: "Primer Baile",
    icon: <GiLoveMystery className="text-xl" />,
    color: "from-rose-400 to-rose-600",
  },
  {
    time: "8:15 p.m.",
    title: "Baile y Fiesta",
    icon: <MdOutlineCelebration className="text-xl" />,
    color: "from-indigo-400 to-indigo-600",
  },
  {
    time: "10:00 p.m.",
    title: "Corte de pastel",
    icon: <FaBirthdayCake className="text-xl" />,
    color: "from-orange-400 to-orange-600",
  },
];

const Timeline = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Cronograma
        </h3>
        <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Línea vertical principal - oculta en móvil */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-200 via-purple-200 to-indigo-200 rounded-full"></div>

        {/* Línea vertical móvil */}
        <div className="sm:hidden absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-pink-200 via-purple-200 to-indigo-200 rounded-full"></div>

        {events.map((event, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <div
              key={event.time + event.title}
              className={`relative flex items-center mb-8 sm:mb-12 last:mb-0 ${
                isLeft ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Layout móvil */}
              <div className="sm:hidden flex items-center w-full pl-16">
                <div
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-3 border-l-4 border-transparent w-full"
                  style={{
                    borderLeftColor: `rgb(${idx * 30 + 100}, ${idx * 20 + 150}, ${idx * 25 + 200})`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center text-white shadow-md`}
                    >
                      {event.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-base sm:text-lg text-gray-800">
                        {event.time}
                      </div>
                      <div className="text-gray-600 text-sm font-medium break-words">
                        {event.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Punto central móvil */}
              <div className="sm:hidden absolute left-8 transform -translate-x-1/2 z-10">
                <div
                  className={`w-4 h-4 rounded-full bg-gradient-to-br ${event.color} border-2 border-white shadow-lg animate-pulse`}
                ></div>
              </div>

              {/* Layout desktop */}
              <div
                className={`hidden sm:flex items-center w-5/12 ${
                  isLeft ? "flex-row-reverse text-right" : "flex-row text-left"
                }`}
              >
                {/* Tarjeta del evento */}
                <div
                  className={`
                  bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-4 border-l-4 border-transparent
                  ${isLeft ? "mr-8" : "ml-8"}
                `}
                  style={{
                    borderLeftColor: isLeft
                      ? undefined
                      : `rgb(${idx * 30 + 100}, ${idx * 20 + 150}, ${idx * 25 + 200})`,
                    borderRightColor: isLeft
                      ? `rgb(${idx * 30 + 100}, ${idx * 20 + 150}, ${idx * 25 + 200})`
                      : undefined,
                    borderRightWidth: isLeft ? "4px" : undefined,
                  }}
                >
                  <div className="flex items-center gap-3">
                    {!isLeft && (
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center text-white shadow-md`}
                      >
                        {event.icon}
                      </div>
                    )}
                    <div className={isLeft ? "text-right" : "text-left"}>
                      <div className="font-bold text-lg text-gray-800">
                        {event.time}
                      </div>
                      <div className="text-gray-600 text-sm font-medium">
                        {event.title}
                      </div>
                    </div>
                    {isLeft && (
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center text-white shadow-md`}
                      >
                        {event.icon}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Punto central desktop */}
              <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 z-10">
                <div
                  className={`w-6 h-6 rounded-full bg-gradient-to-br ${event.color} border-4 border-white shadow-lg animate-pulse`}
                ></div>
              </div>

              {/* Línea conectora desktop */}
              <div
                className={`hidden sm:block absolute top-1/2 w-8 h-0.5 bg-gradient-to-r ${
                  isLeft
                    ? "right-1/2 mr-3 from-transparent to-gray-300"
                    : "left-1/2 ml-3 from-gray-300 to-transparent"
                }`}
              ></div>
            </div>
          );
        })}
      </div>

      {/* Footer decorativo */}
      <div className="mt-6 sm:mt-8 flex justify-center">
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: Por los requerimientos dados no voy a tener necesidad de acceder a estos componentes en el futuro
              key={i}
              className={`w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 animate-pulse`}
              style={{ animationDelay: `${i * 0.5}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
