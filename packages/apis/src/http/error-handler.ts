import type { AxiosError } from 'axios';

import { HTTPError } from '../errors/http-error';

export const handleApiError = (error: AxiosError) => {
  const status = error.response?.status;
  const responseData = error.response?.data as {
    message?: string;
    msg?: string;
    code?: number;
  };
  const message = responseData?.message ?? responseData?.msg ?? error.message;
  const code = responseData?.code;

  if (!status) {
    return Promise.reject(error);
  }

  return Promise.reject(new HTTPError(status, message, code));
};
