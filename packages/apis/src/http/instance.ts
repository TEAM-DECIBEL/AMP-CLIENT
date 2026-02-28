import axios, { AxiosError, AxiosResponse } from 'axios';

import { ENV } from '../constants/env';
import { HTTP_STATUS_CODE } from '../constants/http-status';
import { type ApiErrorResponse, handleApiError } from './error-handler';

export const instance = axios.create({
  baseURL: ENV.API_BASE_URL,
  withCredentials: true,
});

const isBrowser = typeof window !== 'undefined';

const REDIRECT_LOCK_KEY = 'redirectLock';
const getRedirectLock = () =>
  isBrowser ? sessionStorage.getItem(REDIRECT_LOCK_KEY) === '1' : false;

const setRedirectLock = (value: boolean) => {
  if (!isBrowser) {
    return;
  }
  if (value) {
    sessionStorage.setItem(REDIRECT_LOCK_KEY, '1');
  } else {
    sessionStorage.removeItem(REDIRECT_LOCK_KEY);
  }
};

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<ApiErrorResponse | string>) => {
    const status = error.response?.status;

    if (!isBrowser) {
      return handleApiError(error);
    }

    const locked = getRedirectLock();

    if (status === HTTP_STATUS_CODE.UNAUTHORIZED) {
      const isOnAuthRequired =
        window.location.pathname.startsWith('/auth/required');

      if (!isOnAuthRequired && !locked) {
        setRedirectLock(true);

        const next = encodeURIComponent(
          window.location.pathname + window.location.search,
        );

        window.location.replace(`/auth/required?next=${next}`);
      }
    }

    if (status === HTTP_STATUS_CODE.NOT_FOUND) {
      const isOnNotFound = window.location.pathname.startsWith('/not-found');

      if (!isOnNotFound && !locked) {
        setRedirectLock(true);

        const next = encodeURIComponent(
          window.location.pathname + window.location.search,
        );

        window.location.replace(`/not-found?next=${next}`);
      }
    }

    return handleApiError(error);
  },
);
