import { queryOptions } from '@tanstack/react-query';

import { get, patch } from '@amp/apis';

import { END_POINT } from '@shared/constants/end-point';
import { USERS_QUERY_KEY } from '@shared/constants/query-key';
import { NotificationsResponse } from '@shared/types/notifications';

export const getNotifications = () =>
  get<NotificationsResponse>(END_POINT.GET_NOTIFICATIONS);

export const patchNotificationsRead = (notificationId: number) =>
  patch(END_POINT.POST_NOTIFICATIONS(notificationId));

export const NOTIFICATIONS_QUERY_OPTIONS = {
  NOTIFICATIONS: () =>
    queryOptions({
      queryKey: [USERS_QUERY_KEY.NOTIFICATIONS],
      queryFn: () => getNotifications(),
    }),
} as const;
