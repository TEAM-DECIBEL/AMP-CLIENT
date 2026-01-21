import { queryOptions } from '@tanstack/react-query';
import { PageSizeParams } from 'node_modules/@amp/shared/src/types';

import { get } from '@amp/apis';

import { END_POINT } from '@shared/constants/end-point';
import { USERS_QUERY_KEY } from '@shared/constants/query-key';
import type {
  AllFestivalsResponseData,
  UpcomingFestivalsResponseData,
} from '@shared/types/home-response';

export const getAllFestivals = (params: PageSizeParams = {}) =>
  get<AllFestivalsResponseData, PageSizeParams>(
    END_POINT.GET_ALL_FESTIVALS,
    params,
  );

export const getPlannedFestivals = (params: PageSizeParams = {}) =>
  get<UpcomingFestivalsResponseData, PageSizeParams>(
    END_POINT.GET_PLANNED_FESTIVALS,
    params,
  );

export const HOME_QUERY_OPTIONS = {
  ALL_FESTIVALS: (params: PageSizeParams = {}) =>
    queryOptions({
      queryKey: [...USERS_QUERY_KEY.HOME_FESTIVALS_ALL(), params],
      queryFn: () => getAllFestivals(params),
    }),
  PLANNED_FESTIVALS: (params: PageSizeParams = {}) =>
    queryOptions({
      queryKey: [...USERS_QUERY_KEY.HOME_FESTIVALS_PLANNED(), params],
      queryFn: () => getPlannedFestivals(params),
    }),
} as const;
