import { queryOptions } from '@tanstack/react-query';

import { USERS_QUERY_KEY } from '@shared/constants/query-key';

import { getUserNickname } from '../api/user';

export const USER_QUERY_OPTIONS = {
  NICKNAME: () =>
    queryOptions({
      queryKey: [...USERS_QUERY_KEY.NICKNAME()],
      queryFn: () => getUserNickname(),
    }),
} as const;
