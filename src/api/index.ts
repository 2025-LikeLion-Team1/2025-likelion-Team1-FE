import axios, { AxiosRequestConfig } from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;

const apiClient = axios.create({
  baseURL: baseURL,
});

// 요청 인터셉터의 config 타입을 명시해줍니다.
apiClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // const token = localStorage.getItem('accessToken');
    // if (token && config.headers) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;