import { Button } from "@heroui/react";

const AddToCalendar = () => {
  // Fecha: 15 de agosto de 2025, 6:00 PM hora de Colombia (UTC-5)
  const eventDate = new Date("2025-08-15T18:00:00-05:00");
  const endDate = new Date("2025-08-15T23:00:00-05:00"); // 5 horas de duración
  const startTime = eventDate
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");
  const endTime = endDate
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Boda de Alexander y Marcela")}&dates=${startTime}/${endTime}&details=${encodeURIComponent("¡Nos casamos! Acompáñanos en nuestro gran día.")}&location=${encodeURIComponent("Salón de Eventos")}`;

  return (
    <div className="w-full flex justify-center my-4">
      <Button
        as="a"
        href={googleCalendarUrl}
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
};

export default AddToCalendar;
