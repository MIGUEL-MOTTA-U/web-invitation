import { Button } from "@heroui/react";

// import { CalendarIcon } from "@heroui/react"; // Descomenta si tienes un ícono de calendario

const AddToCalendar = () => (
  <div className="w-full flex justify-center my-4">
    <Button
      as="a"
      href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda+B%C3%A1rbara+y+Sergio&dates=20250524T180000Z/20250524T230000Z&details=¡Nos+casamos!+Acompáñanos+en+nuestro+gran+día.&location=Salón+de+Eventos"
      target="_blank"
      rel="noopener noreferrer"
      type="button"
      variant="shadow"
    >
      <span role="img" aria-label="calendario" className="mr-2">
        📅
      </span>
      Agendar en tu calendario
    </Button>
  </div>
);

export default AddToCalendar;
