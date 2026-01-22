import type { AxiosRequestConfig } from 'axios';

import { instance } from './instance';

export interface SuccessResponse<T> {
  status: number;
  msg: string;
  data: T;
}

type RequestOptions = {
  signal?: AbortSignal;
};

export const get = async <T, P = unknown>(
  url: string,
  params?: P,
  config?: AxiosRequestConfig,
  options: RequestOptions = {},
): Promise<T> => {
  const res = await instance.get<SuccessResponse<T>>(url, {
    ...config,
    params: params ?? config?.params,
    signal: options.signal,
  });
  return res.data.data;
};

export const post = async <T, B = unknown>(
  url: string,
  body?: B,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const res = await instance.post<SuccessResponse<T>>(url, body, config);
  return res.data.data;
};

export const patch = async <T, B = unknown>(
  url: string,
  body?: B,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const res = await instance.patch<SuccessResponse<T>>(url, body, config);
  return res.data.data;
};

export const put = async <T, B = unknown>(
  url: string,
  body?: B,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const res = await instance.put<SuccessResponse<T>>(url, body, config);
  return res.data.data;
};

export const del = async <T, P = unknown, B = unknown>(
  url: string,
  options?: { params?: P; body?: B; config?: AxiosRequestConfig },
): Promise<T> => {
  const res = await instance.delete<SuccessResponse<T>>(url, {
    ...options?.config,
    params: options?.params,
    data: options?.body,
  });
  return res.data.data;
};
