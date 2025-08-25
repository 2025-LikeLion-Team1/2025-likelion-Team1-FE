export const environment = {
  development: {
    apiUrl: import.meta.env.VITE_BASE_URL || 'http://localhost:3000',
    enableLogging: true,
  },
  production: {
    apiUrl: import.meta.env.VITE_BASE_URL || 'https://api.qnahub.xyz',
    enableLogging: false,
  },
  test: {
    apiUrl: import.meta.env.VITE_BASE_URL || 'http://localhost:3001',
    enableLogging: false,
  },
};

export const getCurrentEnvironment = () => {
  return import.meta.env.MODE || 'development';
};

export const getConfig = () => {
  const env = getCurrentEnvironment();
  return environment[env as keyof typeof environment] || environment.development;
};
