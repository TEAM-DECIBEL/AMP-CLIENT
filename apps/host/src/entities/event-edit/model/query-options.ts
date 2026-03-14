import { queryOptions } from '@tanstack/react-query';

import { ORGANIZERS_QUERY_KEY } from '@shared/constants/query-key';

import { getFestivalDetail } from '../api/event-edit';

export const EVENT_EDIT_QUERY_OPTIONS = {
  DETAIL: (festivalId: number | null) => {
    const normalizedFestivalId = festivalId ?? Number.NaN;

    return queryOptions({
      queryKey: ORGANIZERS_QUERY_KEY.FESTIVAL_DETAIL(normalizedFestivalId),
      queryFn: () => getFestivalDetail(normalizedFestivalId),
      enabled: Number.isFinite(normalizedFestivalId),
    });
  },
} as const;
