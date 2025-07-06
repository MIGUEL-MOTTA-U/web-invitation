import { Card } from "@heroui/react";
import { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-08-15T18:00:00-05:00");
      const now = new Date();
      const colombiaOffset = -5 * 60; 
      const localOffset = now.getTimezoneOffset();
      const colombiaTime = new Date(now.getTime() + (localOffset + colombiaOffset) * 60 * 1000);
      
      const difference = targetDate.getTime() - colombiaTime.getTime();

      if (difference > 0) {
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44));
        
        const daysInMs = difference - (months * 1000 * 60 * 60 * 24 * 30.44);
        const days = Math.floor(daysInMs / (1000 * 60 * 60 * 24));
        
        const hoursInMs = daysInMs - (days * 1000 * 60 * 60 * 24);
        const hours = Math.floor(hoursInMs / (1000 * 60 * 60));
        
        const minutesInMs = hoursInMs - (hours * 1000 * 60 * 60);
        const minutes = Math.floor(minutesInMs / (1000 * 60));
        
        const secondsInMs = minutesInMs - (minutes * 1000 * 60);
        const seconds = Math.floor(secondsInMs / 1000);

        setTimeLeft({ months, days, hours, minutes, seconds });
      } else {
        setTimeLeft({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
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
    <Card className="w-full max-w-md my-4 mx-auto p-4 flex flex-col items-center">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        ¡Faltan para nuestro gran día!
      </h3>
      <div className="flex flex-row gap-3 w-full justify-center">
        {[
          { value: timeLeft.months, label: "Meses" },
          { value: timeLeft.days, label: "Días" },
          { value: timeLeft.hours, label: "Horas" },
          { value: timeLeft.minutes, label: "Min" },
          { value: timeLeft.seconds, label: "Seg" },
        ].map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <span className="text-xl font-bold text-primary-600">
              {formatNumber(value)}
            </span>
            <span className="text-xs text-gray-500">{label}</span>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-600 mt-2 text-center">
        15 de Agosto, 2025 • 6:00 PM
      </p>
    </Card>
  );
};

export default Countdown;
