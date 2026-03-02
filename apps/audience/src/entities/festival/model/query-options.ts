import { queryOptions } from '@tanstack/react-query';

import type { PageSizeParams } from '@amp/shared/types';

import { USERS_QUERY_KEY } from '@shared/constants/query-key';

import {
  getAllFestivals,
  getPlannedFestivals,
  getUpcomingFestival,
} from '../api/festival';

export const FESTIVAL_QUERY_OPTIONS = {
  ALL_FESTIVALS: (params: PageSizeParams = { page: 0, size: 20 }) =>
    queryOptions({
      queryKey: [...USERS_QUERY_KEY.HOME_FESTIVALS_ALL(), params],
      queryFn: () => getAllFestivals(params),
    }),
  PLANNED_FESTIVALS: (params: PageSizeParams = { page: 0, size: 20 }) =>
    queryOptions({
      queryKey: [...USERS_QUERY_KEY.HOME_FESTIVALS_PLANNED(), params],
      queryFn: () => getPlannedFestivals(params),
    }),
  UPCOMING_FESTIVAL: (params: PageSizeParams = {}) =>
    queryOptions({
      queryKey: [...USERS_QUERY_KEY.HOME_FESTIVAL_UPCOMING(), params],
      queryFn: () => getUpcomingFestival(params),
    }),
} as const;
