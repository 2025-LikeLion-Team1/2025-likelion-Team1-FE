export const environment = {
  development: {
    apiUrl: 'http://localhost:3000/api',
    enableLogging: true,
  },
  production: {
    apiUrl: 'https://api.qnahub.xyz',
    enableLogging: false,
  },
  test: {
    apiUrl: 'http://localhost:3001/api',
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
