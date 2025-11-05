export interface GuestDTO {
  id?: string;
  name: string;
  email: string;
  phone: string;
  phoneCountryCode: string;
  message?: string | null;
  confirmed: boolean;
}

export interface CreateGuestRequest {
  name: string;
  email?: string | null;
  phone?: string | null;
  phoneCountryCode?: string | null;
  message?: string | null;
  confirmed: boolean;
}

// Versión simplificada para envíos en lote desde el formulario actual
export interface SimpleGuest {
  name: string;
  confirmed: boolean;
}

// Request shape expected by the backend for bulk creation:
// the first guest is the main guest, the rest are sent as "companions"
export interface CreateGuestsBulkRequest {
  name: string;
  confirmed: boolean;
  companions: SimpleGuest[];
}

export interface OutputMessage {
  type: string;
  status: number;
  message: string;
  payload?: {
    userId: string;
  };
}

// New types for guests administration page
export interface Companion {
  id: string;
  name: string;
  confirmed: boolean;
}

export interface GuestWithCompanions {
  id: string;
  name: string;
  confirmed: boolean;
  nCompanions: number;
  companions: Companion[];
}

// New types for the updated API with paginated people
export interface Person {
  id: string;
  name: string;
  confirmed: boolean;
  type: "guest" | "companion";
  guestId?: string; // Only for companions
  guestName?: string; // Only for companions
}

export interface UpdatedGuestStatistics {
  pageGuests: number;
  pageCompanions: number;
  pageConfirmedGuests: number;
  pageUnconfirmedGuests: number;
  pageConfirmedCompanions: number;
  pageUnconfirmedCompanions: number;
  pageConfirmedPeople: number;
  pageUnconfirmedPeople: number;
  totalPeople: number;
  totalGuests: number;
  totalCompanions: number;
  totalConfirmedGuests: number;
  totalUnconfirmedGuests: number;
  totalConfirmedCompanions: number;
  totalUnconfirmedCompanions: number;
  totalConfirmedPeople: number;
  totalUnconfirmedPeople: number;
}

export interface AllPeopleResponse {
  message: string;
  status: number;
  type: string;
  payload: {
    people: Person[];
    guests: Person[];
    companions: Person[];
    confirmedPeople: Person[];
    unconfirmedPeople: Person[];
    pagination: Pagination;
    statistics: UpdatedGuestStatistics;
  };
}

export interface GuestStatistics {
  totalGuests: number;
  totalConfirmedGuests: number;
  totalUnconfirmedGuests: number;
  totalCompanions: number;
  totalConfirmedCompanions: number;
  totalUnconfirmedCompanions: number;
  globalTotalGuests?: number;
}

export interface Pagination {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface AllGuestsResponse {
  message: string;
  status: number;
  type: string;
  payload: {
    allGuests: GuestWithCompanions[];
    confirmedGuests: GuestWithCompanions[];
    unconfirmedGuests: GuestWithCompanions[];
    pagination: Pagination;
    statistics: GuestStatistics;
  };
}

// Types for simple confirmation guests view (no pagination)
export interface SimpleGuestStatistics {
  totalGuests: number;
  totalCompanions: number;
  totalPeople: number;
  confirmedGuests: number;
  unconfirmedGuests: number;
  confirmedCompanions: number;
  unconfirmedCompanions: number;
  confirmedPeople: number;
  unconfirmedPeople: number;
}

export interface SimpleGuestsResponse {
  message: string;
  status: number;
  type: string;
  payload: {
    guests: GuestWithCompanions[];
    statistics: SimpleGuestStatistics;
  };
}
