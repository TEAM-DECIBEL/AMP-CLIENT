import { queryOptions } from '@tanstack/react-query';

import { getAuthStatus } from '@entities/auth/api/auth';

import { USERS_QUERY_KEY } from '@shared/constants/query-key';

export const AUTH_QUERY_OPTIONS = {
  AUTH_STATUS: () =>
    queryOptions({
      queryKey: USERS_QUERY_KEY.AUTH_STATUS(),
      queryFn: () => getAuthStatus(),
    }),
} as const;
