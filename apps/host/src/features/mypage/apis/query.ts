import { queryOptions } from '@tanstack/react-query';

import { get } from '@amp/apis';

import { END_POINT } from '@shared/constants/end-point';
import { ORGANIZERS_QUERY_KEY } from '@shared/constants/query-key';
import type { MyPageResponseData } from '@shared/types/mypage-response';

export const getMyPage = () => get<MyPageResponseData>(END_POINT.GET_MY_PAGE);

export const MY_PAGE_QUERY_OPTIONS = {
  MY_PAGE: () =>
    queryOptions({
      queryKey: ORGANIZERS_QUERY_KEY.MY_PAGE(),
      queryFn: () => getMyPage(),
    }),
} as const;
