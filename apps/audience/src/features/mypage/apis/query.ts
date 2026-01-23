import { queryOptions } from '@tanstack/react-query';

import { get } from '@amp/apis';

import { END_POINT } from '@shared/constants/end-point';
import { USERS_QUERY_KEY } from '@shared/constants/query-key';
import { ViewedFestivalsData } from '@shared/hooks/viewed-festival';
import type { MyPageResponse } from '@shared/types/mypage-response';

export const getMyPage = () => get<MyPageResponse>(END_POINT.GET_MY_PAGE);

export const getViewedFestivals = () =>
  get<ViewedFestivalsData>(END_POINT.GET_VIEWED_FESTIVALS);

export const MY_PAGE_QUERY_OPTIONS = {
  MY_PAGE: () =>
    queryOptions({
      queryKey: USERS_QUERY_KEY.MY_PAGE(),
      queryFn: () => getMyPage(),
    }),

  VIEWED_FESTIVALS: () =>
    queryOptions({
      queryKey: USERS_QUERY_KEY.HOME_FESTIVALS_VIEWED(),
      queryFn: () => getViewedFestivals(),
    }),
} as const;
