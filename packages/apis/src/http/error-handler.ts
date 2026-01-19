import type { AxiosError } from 'axios';

import { HTTPError } from '../errors/http-error';

interface ApiErrorResponse {
  message?: string;
  msg?: string;
  code?: number;
}

export const handleApiError = (
  error: AxiosError<ApiErrorResponse | string>,
) => {
  if (!error.response) {
    return Promise.reject(error);
  }

  const { status, data } = error.response;

  let message = error.message;
  let code: number | undefined;

  if (typeof data === 'string') {
    message = data;
  } else if (data && typeof data === 'object') {
    message = data.message ?? data.msg ?? error.message;
    code = data.code;
  }

  return Promise.reject(new HTTPError(status, message, code));
};
