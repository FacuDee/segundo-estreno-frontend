// Configuración de la API
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Helper para construir URLs completas
export const getApiUrl = (endpoint) => {
  // Si el endpoint ya empieza con /api, lo removemos para evitar duplicación
  const cleanEndpoint = endpoint.startsWith('/api') ? endpoint.substring(4) : endpoint;
  return `${API_URL}${cleanEndpoint}`;
};
