import axios, { AxiosRequestConfig } from 'axios';
import {
  getAccessToken,
  getRefreshToken,
  setToken,
  setRefreshToken,
} from '@/services/localStorageService';
import {
  BEARER,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  AUTHORIZATION,
  REFRESH_TOKEN_ENDPOINT,
  SUCCESS_STATUS,
  UNAUTHORIZED_STATUS,
} from '@/utils/constant';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const request = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
});

request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getAccessToken();
    if (token && config.headers && config.url !== REFRESH_TOKEN_ENDPOINT) {
      config.headers[AUTHORIZATION] = BEARER + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    if (
      error.response.status === UNAUTHORIZED_STATUS &&
      originalRequest.url === REFRESH_TOKEN_ENDPOINT
    ) {
      return Promise.reject(error).finally(() => {
        // 👇️ ts-ignore ignores any ts errors on the next line
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.location = window.location.protocol + '//' + window.location.host + '/login';
      });
    }

    if (error.response.status === UNAUTHORIZED_STATUS && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = getRefreshToken();
      return request
        .get(REFRESH_TOKEN_ENDPOINT, {
          headers: { Authorization: BEARER + refreshToken },
        })
        .then((res) => {
          if (res.status === SUCCESS_STATUS) {
            setToken(res.data[ACCESS_TOKEN]);
            setRefreshToken(res.data[REFRESH_TOKEN]);
            axios.defaults.headers.common[AUTHORIZATION] = BEARER + getAccessToken();
            return axios(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  }
);

export default request;
