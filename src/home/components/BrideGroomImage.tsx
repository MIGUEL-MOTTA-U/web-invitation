import { Card, CardBody, Image } from "@heroui/react";

const BrideGroomImage = () => (
  <Card className="w-full max-w-md my-6 mx-auto">
    <CardBody className="aspect-[3/4] flex items-center justify-center bg-gray-200 overflow-hidden p-0">
      {/* Usa el componente Image de HeroUI para la foto real */}
      <Image
        src="src\assets\images\novios.jpg"
        alt="Novios"
        className="object-cover w-full h-full rounded-lg"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
      />
    </CardBody>
  </Card>
);

export default BrideGroomImage;
