import axios, { AxiosError, AxiosResponse } from 'axios';

import { ENV } from '../constants/env';
import { HTTP_STATUS_CODE } from '../constants/http-status';
import { type ApiErrorResponse, handleApiError } from './error-handler';

export const instance = axios.create({
  baseURL: ENV.API_BASE_URL,
  withCredentials: true,
});

let redirectLock = false;

const isBrowser = typeof window !== 'undefined';

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<ApiErrorResponse | string>) => {
    const status = error.response?.status;

    if (isBrowser && status === HTTP_STATUS_CODE.UNAUTHORIZED) {
      const isOnAuthRequired =
        window.location.pathname.startsWith('/auth/required');

      if (!isOnAuthRequired && !redirectLock) {
        redirectLock = true;

        const next = encodeURIComponent(
          window.location.pathname + window.location.search,
        );

        window.location.replace(`/auth/required?next=${next}`);
      }
    }

    if (isBrowser && status === HTTP_STATUS_CODE.NOT_FOUND) {
      const isOnNotFound = window.location.pathname.startsWith('/not-found');

      if (!isOnNotFound && !redirectLock) {
        redirectLock = true;

        const next = encodeURIComponent(
          window.location.pathname + window.location.search,
        );

        window.location.replace(`/not-found?next=${next}`);
      }
    }

    return handleApiError(error);
  },
);
