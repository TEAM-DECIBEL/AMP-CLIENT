import { queryOptions } from '@tanstack/react-query';

import type { PageSizeParams } from '@amp/shared/types';

import { USERS_QUERY_KEY } from '@shared/constants/query-key';

import { getFestivalBanner, getFestivalNotices } from '../api/notice';

export const NOTICES_QUERY_OPTIONS = {
  LIST: (eventId: number, params: PageSizeParams = {}) =>
    queryOptions({
      queryKey: [...USERS_QUERY_KEY.FESTIVAL_NOTICES(eventId), params],
      queryFn: ({ signal }) => getFestivalNotices(eventId, params, { signal }),
      enabled: Number.isFinite(eventId),
    }),
  BANNER: (festivalId: number) =>
    queryOptions({
      queryKey: USERS_QUERY_KEY.FESTIVAL_BANNER(festivalId),
      queryFn: () => getFestivalBanner(festivalId),
      enabled: Number.isFinite(festivalId),
    }),
} as const;
