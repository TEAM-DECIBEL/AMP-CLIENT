import { queryOptions } from '@tanstack/react-query';

import { get } from '@amp/apis';

import { END_POINT } from '@shared/constants/end-point';
import { USERS_QUERY_KEY } from '@shared/constants/query-key';
import type { MyPageResponse } from '@shared/types/mypage-response';

export const getMyPage = () => get<MyPageResponse>(END_POINT.GET_MY_PAGE);

export const MY_PAGE_QUERY_OPTIONS = {
  MY_PAGE: () =>
    queryOptions({
      queryKey: USERS_QUERY_KEY.MY_PAGE(),
      queryFn: () => getMyPage(),
    }),
} as const;
