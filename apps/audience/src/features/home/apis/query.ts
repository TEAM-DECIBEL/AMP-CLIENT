import { queryOptions } from '@tanstack/react-query';

import { get } from '@amp/apis';
import type { PageSizeParams } from '@amp/shared/types';

import { END_POINT } from '@shared/constants/end-point';
import { USERS_QUERY_KEY } from '@shared/constants/query-key';
import type {
  AllFestivalsResponseData,
  NicknameResponse,
  UpcomingFestivalResponseData,
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

export const getUpcomingFestival = (params: PageSizeParams = {}) =>
  get<UpcomingFestivalResponseData, PageSizeParams>(
    END_POINT.GET_UPCOMING_FESTIVAL,
    params,
  );

export const getUserNickname = () =>
  get<NicknameResponse>(END_POINT.GET_NICKNAME);

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
  UPCOMING_FESTIVAL: (params: PageSizeParams = {}) =>
    queryOptions({
      queryKey: [...USERS_QUERY_KEY.HOME_FESTIVAL_UPCOMING(), params],
      queryFn: () => getUpcomingFestival(params),
    }),
  NICKNAME: () =>
    queryOptions({
      queryKey: [...USERS_QUERY_KEY.NICKNAME()],
      queryFn: () => getUserNickname(),
    }),
} as const;
