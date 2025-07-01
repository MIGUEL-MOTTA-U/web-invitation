import { Button, Card, CardBody } from "@heroui/react";

// Puedes importar íconos de HeroUI o usar emojis por ahora

const DressCode = () => (
  <Card className="w-full max-w-md my-4 mx-auto p-4 flex flex-col items-center">
    <CardBody>
      <span className="mb-2 font-semibold text-center block">Dress Code</span>
      <div className="flex gap-4 justify-center">
        <Button
          type="button"
          variant="flat"
          as="a"
          href="https://www.pinterest.com/search/pins/?q=men%20wedding%20dress%20code"
          target="_blank"
        >
          <span role="img" aria-label="hombre" className="mr-2">
            👔
          </span>
          Hombre
        </Button>
        <Button
          type="button"
          variant="flat"
          as="a"
          href="https://www.pinterest.com/search/pins/?q=women%20wedding%20dress%20code"
          target="_blank"
        >
          <span role="img" aria-label="mujer" className="mr-2">
            👗
          </span>
          Mujer
        </Button>
      </div>
    </CardBody>
  </Card>
);

export default DressCode;
