import { queryOptions } from '@tanstack/react-query';

import { get } from '@amp/apis';
import type { PageSizeParams } from '@amp/shared/types';

import { END_POINT } from '@shared/constants/end-point';
import { USERS_QUERY_KEY } from '@shared/constants/query-key';
import type { FestivalNoticesResponseData } from '@shared/types/home-response';

export const getFestivalNotices = (
  festivalId: number,
  params: PageSizeParams = {},
) =>
  get<FestivalNoticesResponseData, PageSizeParams>(
    END_POINT.GET_FESTIVAL_NOTICES(festivalId),
    params,
  );

export const NOTICES_QUERY_OPTIONS = {
  LIST: (festivalId: number, params: PageSizeParams = {}) =>
    queryOptions({
      queryKey: [...USERS_QUERY_KEY.FESTIVAL_NOTICES(festivalId), params],
      queryFn: () => getFestivalNotices(festivalId, params),
      enabled: Boolean(festivalId),
    }),
} as const;
