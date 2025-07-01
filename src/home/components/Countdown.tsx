import { Card } from "@heroui/react";

const Countdown = () => (
  <Card className="w-full max-w-md my-4 mx-auto p-4 flex flex-col items-center">
    <div className="flex flex-row gap-4 w-full justify-center">
      {["Meses", "Días", "Horas", "Min"].map((label) => (
        <div key={label} className="flex flex-row items-end gap-1">
          <span className="text-2xl font-bold">00</span>
          <span className="text-xs text-gray-500 mb-1">{label}</span>
        </div>
      ))}
    </div>
  </Card>
);

export default Countdown;
