import {
  AttendanceForm,
  BrideGroomImage,
  CeremonyCard,
  ConfirmationForm,
  Countdown,
  DressCode,
  GiftSuggestion,
  PhotoCarousel,
  PhotoStatic,
} from "./components";

interface WeddingInvitationProps {
  showFullForm?: boolean;
  showFullDetails?: boolean;
}

const WeddingInvitation = ({
  showFullForm = false,
  showFullDetails = false,
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
        <BrideGroomImage useAlternativeImages={!showFullDetails} />
        {/* <WeddingMessage />*/}
        <Countdown />

        {/* Componentes visibles solo en vista completa (/confirmation) */}
        {showFullDetails && (
          <>
            <CeremonyCard />
            <DressCode />
            <GiftSuggestion />
            <PhotoCarousel />
          </>
        )}

        {/* Foto estática solo en vista simplificada (/) */}
        {!showFullDetails && <PhotoStatic />}

        {/* <Timeline />*/}
        {/*<AddToCalendar /> */}
        {/* <Location />*/}

        {showFullForm ? <ConfirmationForm /> : <AttendanceForm />}
      </div>
    </div>
  );
};

export default WeddingInvitation;
