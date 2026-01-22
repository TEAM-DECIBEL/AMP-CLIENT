import axios, { AxiosResponse } from 'axios';

import { ENV } from '../constants/env';
import { handleApiError } from './error-handler';

const baseURL = ENV.API_BASE_URL;

export const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use((config) => {
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => handleApiError(error),
);
