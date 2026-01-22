import { queryOptions } from '@tanstack/react-query';

import { get, post } from '@amp/apis';
import type { PageSizeParams } from '@amp/shared/types';

import { END_POINT } from '@shared/constants/end-point';
import { USERS_QUERY_KEY } from '@shared/constants/query-key';
import { NotificationSubscribeBody } from '@shared/types/notice';
import type { FestivalNoticesResponseData } from '@shared/types/notice-response';

type RequestOptions = {
  signal?: AbortSignal;
};

export const getFestivalNotices = (
  eventId: number,
  params: PageSizeParams = {},
  options: RequestOptions = {},
) =>
  get<FestivalNoticesResponseData, PageSizeParams>(
    END_POINT.GET_FESTIVAL_NOTICES(eventId),
    params,
    options,
  );

export const NOTICES_QUERY_OPTIONS = {
  LIST: (eventId: number, params: PageSizeParams = {}) =>
    queryOptions({
      queryKey: [...USERS_QUERY_KEY.FESTIVAL_NOTICES(eventId), params],
      queryFn: ({ signal }) => getFestivalNotices(eventId, params, { signal }),
      enabled: Number.isFinite(eventId),
    }),
} as const;

export const postNotificationsSubscribe = (
  festivalId: number,
  categoryCode: string,
  body: NotificationSubscribeBody,
) => {
  return post<void>(
    END_POINT.POST_FESTIVAL_NOTIFICATIONS_SUBSCRIBE(festivalId, categoryCode),
    body,
  );
};
