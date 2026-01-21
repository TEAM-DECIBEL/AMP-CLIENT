import { queryOptions } from '@tanstack/react-query';

import { get } from '@amp/apis';
import type { PageSizeParams } from '@amp/shared/types';

import { END_POINT } from '@shared/constants/end-point';
import { ORGANIZERS_QUERY_KEY } from '@shared/constants/query-key';
import type { FestivalNoticesResponseData } from '@shared/types/notice-response';

export const getFestivalNotices = (
  eventId: number,
  params: PageSizeParams = {},
) =>
  get<FestivalNoticesResponseData, PageSizeParams>(
    END_POINT.GET_FESTIVAL_NOTICES(eventId),
    params,
  );

export const NOTICES_QUERY_OPTIONS = {
  LIST: (eventId: number, params: PageSizeParams = {}) =>
    queryOptions({
      queryKey: [...ORGANIZERS_QUERY_KEY.FESTIVAL_NOTICES(eventId), params],
      queryFn: () => getFestivalNotices(eventId, params),
      enabled: Number.isFinite(eventId),
    }),
} as const;
