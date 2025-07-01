import { Button, Card, CardBody, Form, Radio, RadioGroup } from "@heroui/react";

const AttendanceForm = () => (
  <Card className="w-full max-w-md my-6 mx-auto p-6">
    <CardBody>
      <Form>
        <span className="font-semibold mb-2 block">¿Puedes asistir?</span>
        <RadioGroup
          name="attendance"
          className="mb-4 flex gap-4 justify-center"
        >
          <Radio value="yes">Sí</Radio>
          <Radio value="no">No</Radio>
        </RadioGroup>
        <Button type="submit" variant="shadow" className="mt-2">
          Enviar
        </Button>
      </Form>
    </CardBody>
  </Card>
);

export default AttendanceForm;
