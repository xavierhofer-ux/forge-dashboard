/**
 * Configuration for Dashboard API endpoints
 * Supports multiple deployment targets
 */

const apiConfig = {
  // Development - local backend
  localhost: {
    name: 'Local Development',
    url: 'http://localhost:3000',
    description: 'Backend running on localhost:3000',
  },
  
  // Production - Replit (original)
  replit: {
    name: 'Replit (Original)',
    url: 'https://forge-backend--xavierhofer.replit.app',
    description: 'Production backend on Replit',
  },
  
  // ngrok tunnel (requires setup)
  ngrok: {
    name: 'ngrok Tunnel',
    url: process.env.VITE_NGROK_URL || '',
    description: 'Internet-exposed tunnel via ngrok',
  },
};

/**
 * Get the active API configuration
 * Priority: environment variable > default (localhost)
 */
export const getApiConfig = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
  
  return {
    baseUrl,
    metricsEndpoint: `${baseUrl}/api/dashboard/metrics`,
    healthCheck: `${baseUrl}/health`,
  };
};

/**
 * Switch API endpoint
 * Returns configuration for the specified target
 */
export const switchApiEndpoint = (target) => {
  if (!apiConfig[target]) {
    console.warn(`Unknown API target: ${target}. Using localhost.`);
    return apiConfig.localhost;
  }
  return apiConfig[target];
};

export default apiConfig;
