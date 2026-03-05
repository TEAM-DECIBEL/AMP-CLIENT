import axios, { AxiosError, AxiosResponse } from 'axios';

import { ENV } from '../constants/env';
import { HTTP_STATUS_CODE } from '../constants/http-status';
import { type ApiErrorResponse, handleApiError } from './error-handler';

export const instance = axios.create({
  baseURL: ENV.API_BASE_URL,
  withCredentials: true,
});

const isBrowser = typeof window !== 'undefined';

const REDIRECT_LOCK_KEY = 'redirectLockTs';
const REDIRECT_LOCK_TTL_MS = 5000;

const getRedirectLock = () => {
  if (!isBrowser) {
    return false;
  }

  const raw = sessionStorage.getItem(REDIRECT_LOCK_KEY);
  if (!raw) {
    return false;
  }

  const ts = Number(raw);
  if (Number.isNaN(ts)) {
    sessionStorage.removeItem(REDIRECT_LOCK_KEY);
    return false;
  }

  const expired = Date.now() - ts > REDIRECT_LOCK_TTL_MS;
  if (expired) {
    sessionStorage.removeItem(REDIRECT_LOCK_KEY);
    return false;
  }

  return true;
};

const setRedirectLock = () => {
  if (!isBrowser) {
    return;
  }
  sessionStorage.setItem(REDIRECT_LOCK_KEY, String(Date.now()));
};

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
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
        setRedirectLock();

        const next = encodeURIComponent(
          window.location.pathname + window.location.search,
        );

        window.location.replace(`/auth/required?next=${next}`);
        return new Promise(() => {});
      }
    }

    if (status === HTTP_STATUS_CODE.FORBIDDEN) {
      const isOnLogin = window.location.pathname.startsWith('/login');
      if (!isOnLogin && !locked) {
        setRedirectLock();
        window.location.replace('/login');
      }
      return handleApiError(error);
    }

    if (status === HTTP_STATUS_CODE.NOT_FOUND) {
      const isOnNotFound = window.location.pathname.startsWith('/not-found');

      if (!isOnNotFound && !locked) {
        setRedirectLock();

        const next = encodeURIComponent(
          window.location.pathname + window.location.search,
        );

        window.location.replace(`/not-found?next=${next}`);
        return new Promise(() => {});
      }
    }

    return handleApiError(error);
  },
);
