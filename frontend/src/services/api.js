import axios from 'axios';

// Create configured Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth headers if needed in future
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API Request Error:', error?.response?.data || error.message);
    return Promise.reject(error?.response?.data || { message: error.message });
  }
);

export const checkHealth = () => api.get('/health');
export const getProducts = () => api.get('/products');
export const getProductById = (id) => api.get(`/products/${id}`);

export default api;
