import axios from 'axios';

// Configuración base de axios
const api = axios.create({
  baseURL: import.meta.env.VITE_BACK_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para manejar errores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error en la petición:', error);
    return Promise.reject(error);
  }
);

// Interceptor para agregar headers si es necesario
api.interceptors.request.use(
  (config) => {
    // Aquí puedes agregar headers como tokens de autenticación
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api; 