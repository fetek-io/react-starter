import axios, { AxiosRequestConfig } from 'axios';
import { useNavigate } from 'react-router-dom';
import { getAccessToken, getRefreshToken, setToken } from '@/services/localStorageService';

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 60000,
});

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getAccessToken();
    if (token && config.headers) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    const navigate = useNavigate();

    if (error.response.status === 401 && originalRequest.url === '/auth/token') {
      navigate('/login');
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = getRefreshToken();
      return axios
        .post('/auth/token', {
          refresh_token: refreshToken,
        })
        .then((res) => {
          if (res.status === 201) {
            setToken(res.data);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + getAccessToken();
            return axios(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  }
);

export default request;
