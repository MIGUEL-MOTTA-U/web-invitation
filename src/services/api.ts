import axios from "axios";

// Configuración base de axios
const api = axios.create({
  baseURL:
    import.meta.env.VITE_BACK_URL ||
    "https://andres-y-marcela.azurewebsites.net/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
//
api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.request.use(
  (config) => {
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
