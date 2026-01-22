import { queryOptions } from '@tanstack/react-query';

import { get } from '@amp/apis';
import type { PageSizeParams } from '@amp/shared/types';

import { END_POINT } from '@shared/constants/end-point';
import { USERS_QUERY_KEY } from '@shared/constants/query-key';
import type { FestivalCongestionResponseData } from '@shared/types/festival-congestion';

export const getFestivalCongestion = (
  eventId: number,
  params: PageSizeParams = {},
) =>
  get<FestivalCongestionResponseData, PageSizeParams>(
    END_POINT.GET_FESTIVAL_CONGESTION(eventId),
    params,
    undefined,
  );

export const CONGESTION_QUERY_OPTIONS = {
  STAGES: (eventId: number, params: PageSizeParams = {}) =>
    queryOptions({
      queryKey: [...USERS_QUERY_KEY.FESTIVAL_CONGESTION(eventId), params],
      queryFn: () => getFestivalCongestion(eventId, params),
      enabled: Number.isFinite(eventId),
    }),
} as const;
