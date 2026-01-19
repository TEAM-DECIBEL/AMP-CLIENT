import type { AxiosError } from 'axios';

import { HTTPError } from '../errors/http-error';

export const handleApiError = (error: AxiosError) => {
  const status = error.response?.status;
  const responseData = error.response?.data;
  const message =
    typeof responseData === 'string'
      ? responseData
      : (responseData as { message?: string; msg?: string })?.message ??
        (responseData as { message?: string; msg?: string })?.msg ??
        error.message;
  const code =
    typeof responseData === 'string'
      ? undefined
      : (responseData as { code?: number })?.code;

  if (!status) {
    return Promise.reject(error);
  }

  return Promise.reject(new HTTPError(status, message, code));
};
