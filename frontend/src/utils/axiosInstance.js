import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Manejar errores de respuesta del servidor
      console.error('Error de respuesta:', error.response.data);
    } else if (error.request) {
      // Manejar errores de red
      console.error('Error de red:', error.request);
    } else {
      // Manejar otros errores
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;