import { queryOptions } from '@tanstack/react-query';

import { get } from '@amp/apis';
import type { PageSizeParams } from '@amp/shared/types';

import { END_POINT } from '@shared/constants/end-point';
import { ORGANIZERS_QUERY_KEY } from '@shared/constants/query-key';
import type { FestivalNoticesResponseData } from '@shared/types/notice-response';

type RequestOptions = {
  signal?: AbortSignal;
};

export const getFestivalNotices = (
  festivalId: number,
  params: PageSizeParams = {},
  options: RequestOptions = {},
) =>
  get<FestivalNoticesResponseData, PageSizeParams>(
    END_POINT.GET_FESTIVAL_NOTICES(festivalId),
    params,
    options,
  );

export const NOTICES_QUERY_OPTIONS = {
  LIST: (festivalId: number, params: PageSizeParams = {}) =>
    queryOptions({
      queryKey: [...ORGANIZERS_QUERY_KEY.FESTIVAL_NOTICES(festivalId), params],
      queryFn: ({ signal }) =>
        getFestivalNotices(festivalId, params, { signal }),
      enabled: Number.isFinite(festivalId),
    }),
} as const;
