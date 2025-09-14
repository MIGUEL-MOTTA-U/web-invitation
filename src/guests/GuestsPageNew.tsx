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
import type { AllGuestsResponse } from "../types/guest";

const GuestsPage = () => {
  const [guestsData, setGuestsData] = useState<AllGuestsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedGuests, setExpandedGuests] = useState<Set<string>>(new Set());

  const fetchGuestsData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await guestsService.getAllGuestsWithStats();
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

  // Tabla general de todos los invitados y acompañantes
  const renderAllPersonsTable = () => {
    if (!guestsData?.payload.allGuests) return null;

    const allPersons: Array<{
      id: string;
      name: string;
      confirmed: boolean;
      type: "guest" | "companion";
      guestName?: string;
    }> = [];

    // Agregar invitados principales
    guestsData.payload.allGuests.forEach((guest) => {
      allPersons.push({
        id: guest.id,
        name: guest.name,
        confirmed: guest.confirmed,
        type: "guest",
      });

      // Agregar acompañantes
      guest.companions.forEach((companion) => {
        allPersons.push({
          id: companion.id,
          name: companion.name,
          confirmed: companion.confirmed,
          type: "companion",
          guestName: guest.name,
        });
      });
    });

    return (
      <Card className="mb-6">
        <CardHeader>
          <h3 className="text-xl font-semibold">Todas las Personas</h3>
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
              {allPersons.map((person) => (
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

  // Tabla de invitados con detalles expandibles (accordion personalizado)
  const renderGuestsWithDetails = () => {
    if (!guestsData?.payload.allGuests) return null;

    return (
      <Card className="mb-6">
        <CardHeader>
          <h3 className="text-xl font-semibold">Invitados con Detalles</h3>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            {guestsData.payload.allGuests.map((guest) => {
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
                          {guest.nCompanions} acompañante
                          {guest.nCompanions !== 1 ? "s" : ""}
                        </Chip>
                      </div>
                    </div>
                  </CardHeader>

                  {isExpanded && (
                    <CardBody className="pt-0">
                      <Divider className="mb-4" />

                      {/* Información básica del invitado */}
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
                            <p className="text-gray-800">{guest.nCompanions}</p>
                          </div>
                        </div>
                      </div>

                      {/* Lista de acompañantes */}
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

  const renderStatistics = () => {
    if (!guestsData?.payload.statistics) return null;

    const stats = guestsData.payload.statistics;

    return (
      <Card className="mb-6">
        <CardHeader>
          <h3 className="text-xl font-semibold">Estadísticas</h3>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {stats.totalGuests}
              </div>
              <div className="text-sm text-gray-600">Total Invitados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">
                {stats.totalConfirmedGuests}
              </div>
              <div className="text-sm text-gray-600">Confirmados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-danger">
                {stats.totalUnconfirmedGuests}
              </div>
              <div className="text-sm text-gray-600">No Confirmados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">
                {stats.totalCompanions}
              </div>
              <div className="text-sm text-gray-600">Total Acompañantes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">
                {stats.totalConfirmedCompanions}
              </div>
              <div className="text-sm text-gray-600">
                Acompañantes Confirmados
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">
                {stats.totalUnconfirmedCompanions}
              </div>
              <div className="text-sm text-gray-600">
                Acompañantes No Confirmados
              </div>
            </div>
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
            Administración de Invitados
          </h1>
          <p className="text-gray-600 mb-4">
            Gestiona y visualiza información de todos los invitados
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

        {/* Estadísticas */}
        {renderStatistics()}

        {/* Tabla de todas las personas */}
        {renderAllPersonsTable()}

        {/* Tabla de invitados con detalles expandibles */}
        {renderGuestsWithDetails()}
      </div>
    </div>
  );
};

export default GuestsPage;
