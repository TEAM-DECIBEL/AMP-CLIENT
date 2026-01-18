import { instance } from './instance';

export interface SuccessResponse<T> {
  status: number;
  msg: string;
  data: T;
}

export const get = async <T, P = unknown>(
  url: string,
  params?: P,
): Promise<T> => {
  const res = await instance.get<SuccessResponse<T>>(url, { params });
  return res.data.data;
};

export const post = async <T, B = unknown>(
  url: string,
  body?: B,
): Promise<T> => {
  const res = await instance.post<SuccessResponse<T>>(url, body);
  return res.data.data;
};

export const patch = async <T, B = unknown>(
  url: string,
  body?: B,
): Promise<T> => {
  const res = await instance.patch<SuccessResponse<T>>(url, body);
  return res.data.data;
};

export const put = async <T, B = unknown>(
  url: string,
  body?: B,
): Promise<T> => {
  const res = await instance.put<SuccessResponse<T>>(url, body);
  return res.data.data;
};

export const del = async <T, P = unknown, B = unknown>(
  url: string,
  params?: P,
  body?: B,
): Promise<T> => {
  const res = await instance.delete<SuccessResponse<T>>(url, {
    params,
    data: body,
  });
  return res.data.data;
};
