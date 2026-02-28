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
    const message = error.message || '네트워크 오류가 발생했습니다.';
    return Promise.reject(new HTTPError(0, message));
  }

  const { status, data } = error.response;

  let message = '요청 처리 중 오류가 발생했습니다.';
  let code: number | undefined;

  if (typeof data === 'string') {
    message = data || message;
  } else if (data && typeof data === 'object') {
    message = data.message ?? data.msg ?? message;
    code = data.code;
  } else if (error.message) {
    message = error.message;
  }

  return Promise.reject(new HTTPError(status, message, code));
};
