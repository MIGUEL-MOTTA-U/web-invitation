import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useCallback, useEffect, useState } from "react";
import { guestsService } from "../services/guestsService";
import type { SimpleGuestsResponse } from "../types/guest";

const ConfirmationGuestsPage = () => {
  const [guestsData, setGuestsData] = useState<SimpleGuestsResponse | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedGuests, setExpandedGuests] = useState<Set<string>>(new Set());

  const fetchGuestsData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await guestsService.getSimpleGuestsWithCompanions();
      setGuestsData(data);
    } catch (err) {
      setError("Error al cargar los datos de invitados");
      console.error("Error fetching guests data:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGuestsData();
  }, [fetchGuestsData]);

  const toggleGuest = (guestId: string) => {
    const newExpanded = new Set(expandedGuests);
    if (newExpanded.has(guestId)) {
      newExpanded.delete(guestId);
    } else {
      newExpanded.add(guestId);
    }
    setExpandedGuests(newExpanded);
  };

  const downloadCSV = () => {
    if (!guestsData?.payload.guests) {
      console.error("No hay datos para descargar");
      return;
    }

    const allPeople: Array<{
      name: string;
      type: string;
      confirmed: string;
      guestName: string;
    }> = [];

    // Agregar invitados principales y sus acompañantes
    for (const guest of guestsData.payload.guests) {
      allPeople.push({
        name: guest.name,
        type: "Invitado",
        confirmed: guest.confirmed ? "Confirmado" : "No confirmado",
        guestName: "-",
      });

      for (const companion of guest.companions) {
        allPeople.push({
          name: companion.name,
          type: "Acompañante",
          confirmed: companion.confirmed ? "Confirmado" : "No confirmado",
          guestName: guest.name,
        });
      }
    }

    const headers = ["Nombre", "Tipo", "Confirmado", "Invitado Principal"];
    const csvContent = [
      headers.join(","),
      ...allPeople.map((person) =>
        [
          `"${person.name}"`,
          person.type,
          person.confirmed,
          `"${person.guestName}"`,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");

    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute(
        "download",
        `Invitados_Confirmacion_${new Date().toISOString().split("T")[0]}.csv`
      );
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const renderStatistics = () => {
    if (!guestsData?.payload.statistics) return null;

    const stats = guestsData.payload.statistics;

    return (
      <Card className="mb-6">
        <CardHeader>
          <h3 className="text-xl font-semibold">Estadísticas Generales</h3>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <div className="text-4xl font-bold text-primary">
                {stats.totalPeople}
              </div>
              <div className="text-base text-gray-600 mt-2">Total Personas</div>
            </div>
            <div className="text-center p-6 bg-success-50 rounded-lg">
              <div className="text-4xl font-bold text-success">
                {stats.confirmedPeople}
              </div>
              <div className="text-base text-gray-600 mt-2">Confirmados</div>
            </div>
            <div className="text-center p-6 bg-danger-50 rounded-lg">
              <div className="text-4xl font-bold text-danger">
                {stats.unconfirmedPeople}
              </div>
              <div className="text-base text-gray-600 mt-2">No Confirmados</div>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  };

  const renderAllPeopleTable = () => {
    if (!guestsData?.payload.guests) return null;

    // Crear un array plano con todas las personas
    const allPeople: Array<{
      id: string;
      name: string;
      type: "guest" | "companion";
      confirmed: boolean;
      guestName?: string;
    }> = [];

    for (const guest of guestsData.payload.guests) {
      allPeople.push({
        id: guest.id,
        name: guest.name,
        type: "guest",
        confirmed: guest.confirmed,
      });

      for (const companion of guest.companions) {
        allPeople.push({
          id: companion.id,
          name: companion.name,
          type: "companion",
          confirmed: companion.confirmed,
          guestName: guest.name,
        });
      }
    }

    return (
      <Card className="mb-6">
        <CardHeader className="flex flex-col gap-2">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-xl font-semibold">Todas las Personas</h3>
            <div className="flex items-center gap-3">
              <Button
                color="secondary"
                variant="flat"
                size="sm"
                onPress={downloadCSV}
              >
                📥 Descargar CSV
              </Button>
              <div className="text-sm text-gray-600">
                Total: {allPeople.length} personas
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <Table aria-label="Todas las personas">
            <TableHeader>
              <TableColumn>NOMBRE</TableColumn>
              <TableColumn>TIPO</TableColumn>
              <TableColumn>CONFIRMADO</TableColumn>
              <TableColumn>INVITADO PRINCIPAL</TableColumn>
            </TableHeader>
            <TableBody>
              {allPeople.map((person) => (
                <TableRow key={person.id}>
                  <TableCell className="font-medium">{person.name}</TableCell>
                  <TableCell>
                    <Chip
                      color={person.type === "guest" ? "primary" : "secondary"}
                      variant="flat"
                      size="sm"
                    >
                      {person.type === "guest" ? "Invitado" : "Acompañante"}
                    </Chip>
                  </TableCell>
                  <TableCell>
                    <Chip
                      color={person.confirmed ? "success" : "danger"}
                      variant="flat"
                      size="sm"
                    >
                      {person.confirmed ? "Confirmado" : "No confirmado"}
                    </Chip>
                  </TableCell>
                  <TableCell>
                    {person.type === "companion" ? person.guestName : "-"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    );
  };

  const renderGuestsWithDetails = () => {
    if (!guestsData?.payload.guests) return null;

    return (
      <Card className="mb-6">
        <CardHeader>
          <h3 className="text-xl font-semibold">
            Invitados con Detalles ({guestsData.payload.guests.length})
          </h3>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            {guestsData.payload.guests.map((guest) => {
              const isExpanded = expandedGuests.has(guest.id);

              return (
                <Card key={guest.id} className="border border-gray-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        <Button
                          isIconOnly
                          variant="light"
                          size="sm"
                          onPress={() => toggleGuest(guest.id)}
                          className="min-w-8 w-8 h-8"
                        >
                          {isExpanded ? "▼" : "▶"}
                        </Button>
                        <span className="font-semibold text-lg">
                          {guest.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Chip
                          color={guest.confirmed ? "success" : "danger"}
                          variant="flat"
                          size="sm"
                        >
                          {guest.confirmed ? "Confirmado" : "No confirmado"}
                        </Chip>
                        <Chip color="default" variant="flat" size="sm">
                          {guest.companions.length} acompañante
                          {guest.companions.length !== 1 ? "s" : ""}
                        </Chip>
                      </div>
                    </div>
                  </CardHeader>

                  {isExpanded && (
                    <CardBody className="pt-0">
                      <Divider className="mb-4" />

                      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-3 text-gray-800">
                          Información del Invitado
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <span className="text-sm font-medium text-gray-600">
                              Nombre:
                            </span>
                            <p className="text-gray-800">{guest.name}</p>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-600">
                              Estado:
                            </span>
                            <p className="text-gray-800">
                              {guest.confirmed
                                ? "✅ Confirmado"
                                : "❌ No confirmado"}
                            </p>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-600">
                              Acompañantes:
                            </span>
                            <p className="text-gray-800">
                              {guest.companions.length}
                            </p>
                          </div>
                        </div>
                      </div>

                      {guest.companions.length > 0 ? (
                        <div>
                          <h4 className="font-semibold mb-4 text-gray-800">
                            Lista de Acompañantes ({guest.companions.length})
                          </h4>
                          <div className="space-y-3">
                            {guest.companions.map((companion, index) => (
                              <div
                                key={companion.id}
                                className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg shadow-sm"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center text-sm font-medium">
                                    {index + 1}
                                  </div>
                                  <div>
                                    <p className="font-medium text-gray-800">
                                      {companion.name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                      Acompañante
                                    </p>
                                  </div>
                                </div>
                                <Chip
                                  color={
                                    companion.confirmed ? "success" : "danger"
                                  }
                                  variant="flat"
                                  size="sm"
                                >
                                  {companion.confirmed
                                    ? "Confirmado"
                                    : "No confirmado"}
                                </Chip>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <div className="text-gray-400 text-4xl mb-2">👤</div>
                          <p className="text-gray-500 italic">
                            Este invitado no tiene acompañantes
                          </p>
                        </div>
                      )}
                    </CardBody>
                  )}
                </Card>
              );
            })}
          </div>
        </CardBody>
      </Card>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-danger text-lg">{error}</p>
        <Button color="primary" onPress={fetchGuestsData}>
          Reintentar
        </Button>
      </div>
    );
  }

  if (!guestsData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">No hay datos disponibles</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Lista de Confirmaciones
          </h1>
          <p className="text-gray-600 mb-4">
            Visualiza todos los invitados y sus confirmaciones
          </p>
          <Button
            color="primary"
            onPress={fetchGuestsData}
            isLoading={loading}
            disabled={loading}
          >
            Actualizar Datos
          </Button>
          <Divider className="my-4" />
        </div>

        {renderStatistics()}

        {renderAllPeopleTable()}

        {renderGuestsWithDetails()}
      </div>
    </div>
  );
};

export default ConfirmationGuestsPage;
