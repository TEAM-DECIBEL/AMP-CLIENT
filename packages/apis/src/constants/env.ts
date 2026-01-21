export const ENV = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  AUTH_TOKEN: import.meta.env.VITE_AUTH_TOKEN,
  // ... 구글 리다이렉트 URI 등 환경 변수
} as const;
