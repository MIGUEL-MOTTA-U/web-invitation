import {
  AttendanceForm,
  BrideGroomImage,
  ConfirmationForm,
  Countdown,
  DressCode,
  GiftSuggestion,
  PhotoCarousel,
} from "./components";

interface WeddingInvitationProps {
  showFullForm?: boolean;
}

const WeddingInvitation = ({
  showFullForm = false,
}: WeddingInvitationProps) => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen p-4">
      {/* Fondo de pantalla con imagen */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/pics/bg.jpeg)",
          opacity: 0.4,
        }}
      />

      {/* Overlay para mejorar la legibilidad */}
      <div className="fixed inset-0 z-0 bg-white/40" />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <BrideGroomImage />
        {/* <WeddingMessage />*/}
        <Countdown />
        {/* <Timeline />*/}
        {/*<AddToCalendar /> */}
        {/* <Location />*/}
        <DressCode />
        <GiftSuggestion />
        <PhotoCarousel />
        {showFullForm ? <ConfirmationForm /> : <AttendanceForm />}
      </div>
    </div>
  );
};

export default WeddingInvitation;
