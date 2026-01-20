import axios, { AxiosResponse } from 'axios';

import { ENV } from '../constants/env';
import { handleApiError } from './error-handler';

const baseURL = ENV.API_BASE_URL;

export const instance = axios.create({
  baseURL,
  withCredentials: true,
});

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => handleApiError(error),
);
