import { queryOptions } from '@tanstack/react-query';

import { get } from '@amp/apis';
import type { PageSizeParams } from '@amp/shared/types';

import { END_POINT } from '@shared/constants/end-point';
import { USERS_QUERY_KEY } from '@shared/constants/query-key';
import type { MyEventsResponse } from '@shared/types/my-events-response';

export const getMyEvents = (params: PageSizeParams = {}) =>
  get<MyEventsResponse, PageSizeParams>(END_POINT.GET_MY_FESTIVALS_ALL, params);

export const MY_EVENTS_QUERY_OPTIONS = {
  LIST: (params: PageSizeParams = {}) =>
    queryOptions({
      queryKey: [...USERS_QUERY_KEY.MY_FESTIVALS_ALL(), params],
      queryFn: () => getMyEvents(params),
    }),
} as const;
