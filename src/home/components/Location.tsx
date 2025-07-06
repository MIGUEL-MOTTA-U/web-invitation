import { Button, Card, CardBody } from "@heroui/react";

const Location = () => {
  const locationName = "Iglesia el Lugar de su Presencia";
  const address = "Suba con 95";
  const fullAddress = `${locationName}, ${address}, Bogotá, Colombia`;
  
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  return (
    <Card className="w-full max-w-md my-4 mx-auto p-4">
      <CardBody className="text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          📍 Ubicación
        </h3>
        <div className="space-y-2 mb-4">
          <p className="text-sm font-medium text-gray-700">
            {locationName}
          </p>
          <p className="text-sm text-gray-600">
            {address}
          </p>
          <p className="text-xs text-gray-500">
            Bogotá, Colombia
          </p>
        </div>
        <Button
          as="a"
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="shadow"
          size="sm"
          className="w-full"
        >
          <span role="img" aria-label="mapa" className="mr-2">
            🗺️
          </span>
          Ver en Google Maps
        </Button>
      </CardBody>
    </Card>
  );
};

export default Location; 