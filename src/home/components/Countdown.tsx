import { useEffect, useState } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Fecha objetivo: 19 de diciembre de 2025 a las 2:00 PM (hora de Colombia)
      const targetDate = new Date("2025-12-19T14:00:00-05:00");
      const now = new Date();

      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        const hoursInMs = difference - days * 1000 * 60 * 60 * 24;
        const hours = Math.floor(hoursInMs / (1000 * 60 * 60));

        const minutesInMs = hoursInMs - hours * 1000 * 60 * 60;
        const minutes = Math.floor(minutesInMs / (1000 * 60));

        setTimeLeft({ days, hours, minutes });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-8 flex flex-col items-center">
      {/* Título principal */}
      <h2 className="text-[2rem] font-normal text-primary mb-8 text-center font-lora tracking-wider">
        GUARDA LA FECHA
      </h2>

      {/* Contador principal */}
      <div className="flex flex-row gap-32 w-full justify-center items-center">
        {[
          { value: timeLeft.days, label: "DÍAS" },
          { value: timeLeft.hours, label: "HORAS" },
          { value: timeLeft.minutes, label: "MINUTOS" },
        ].map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center gap-6">
            {/* Tarjeta negra con número responsiva */}
            <div
              className="bg-primary text-secondary 
                w-[10rem] h-[10rem] 
                sm:w-[14rem] sm:h-[14rem] 
                md:w-[18rem] md:h-[18rem] 
                lg:w-[25rem] lg:h-[25rem] 
                rounded-2xl flex items-center justify-center shadow-2xl border-4 border-primary"
            >
              <span
                className="
                  text-[4.5rem] 
                  sm:text-[6rem] 
                  md:text-[9rem] 
                  lg:text-[12rem] 
                  font-bold font-lora tracking-wider"
              >
                {formatNumber(value)}
              </span>
            </div>
            {/* Etiqueta */}
            <span className="text-lg md:text-xl font-semibold text-primary font-lora tracking-wider">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Fecha del evento */}
      <div className="mt-8 text-center">
        <p className="text-xl md:text-2xl font-bold text-primary font-lora tracking-wider">
          19 DE DICIEMBRE, 2025
        </p>
        <p className="text-lg md:text-xl text-primary/80 font-lora tracking-wider mt-2">
          2:00 PM
        </p>
      </div>
    </div>
  );
};

export default Countdown;
