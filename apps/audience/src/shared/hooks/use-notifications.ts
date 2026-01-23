import { useQuery } from '@tanstack/react-query';

import { NOTIFICATIONS_QUERY_OPTIONS } from '@features/notifications/query';

export const useNotificationsQuery = () => {
  return useQuery(NOTIFICATIONS_QUERY_OPTIONS.NOTIFICATIONS());
};
