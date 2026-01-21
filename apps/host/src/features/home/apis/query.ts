import { queryOptions } from '@tanstack/react-query';

import { get } from '@amp/apis';
import { PageSizeParams } from '@amp/shared/types';

import { END_POINT } from '@shared/constants/end-point';
import { ORGANIZERS_QUERY_KEY } from '@shared/constants/query-key';
import type { HomeResponseData } from '@shared/types/home-response';

export const getHomeFestivals = (params: PageSizeParams = {}) =>
  get<HomeResponseData, PageSizeParams>(END_POINT.GET_HOME_FESTIVALS, params);

export const HOME_QUERY_OPTIONS = {
  FESTIVALS: (params: PageSizeParams = {}) =>
    queryOptions({
      queryKey: [...ORGANIZERS_QUERY_KEY.HOME_FESTIVALS(), params],
      queryFn: () => getHomeFestivals(params),
    }),
} as const;
