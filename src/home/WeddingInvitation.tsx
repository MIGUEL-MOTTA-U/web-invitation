import {
  AddToCalendar,
  AttendanceForm,
  BrideGroomImage,
  Countdown,
  DressCode,
  Location,
  PhotoCarousel,
  Timeline,
  WeddingMessage,
} from "./components";

const WeddingInvitation = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#f8f6f2] p-4">
      <BrideGroomImage />
      <WeddingMessage />
      <Countdown />
      <Timeline />
      <AddToCalendar />
      <Location />
      <DressCode />
      <PhotoCarousel />
      <AttendanceForm />
    </div>
  );
};

export default WeddingInvitation;
