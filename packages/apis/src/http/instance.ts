import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const status = error?.response?.status; // HTTP 상태 코드

    // 추후 에러 핸들링 로직 추가

    return Promise.reject(error);
  }
);
