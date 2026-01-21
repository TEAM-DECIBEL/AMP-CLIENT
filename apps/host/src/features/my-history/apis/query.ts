import { queryOptions } from '@tanstack/react-query';

import { get } from '@amp/apis';
import type { PageSizeParams } from '@amp/shared/types';

import { END_POINT } from '@shared/constants/end-point';
import { ORGANIZERS_QUERY_KEY } from '@shared/constants/query-key';
import type { MyHistoryResponse } from '@shared/types/my-history-response';

export const getMyHistoryFestivals = (params: PageSizeParams = {}) =>
  get<MyHistoryResponse, PageSizeParams>(
    END_POINT.GET_MY_FESTIVALS_ALL,
    params,
  );

export const MY_HISTORY_QUERY_OPTIONS = {
  FESTIVALS: (params: PageSizeParams = {}) =>
    queryOptions({
      queryKey: [...ORGANIZERS_QUERY_KEY.MY_FESTIVALS_ALL(), params],
      queryFn: () => getMyHistoryFestivals(params),
    }),
} as const;
