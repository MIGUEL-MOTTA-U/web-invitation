import { Card, CardBody, Image } from "@heroui/react";
import noviosImage from "../../assets/images/novios.jpg";

const BrideGroomImage = () => (
  <Card className="w-full max-w-md my-6 mx-auto">
    <CardBody className="aspect-[3/4] flex items-center justify-center bg-gray-200 overflow-hidden p-0">
      <Image
        src={noviosImage}
        alt="Novios"
        className="object-cover w-full h-full rounded-lg"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
      />
    </CardBody>
  </Card>
);

export default BrideGroomImage;
