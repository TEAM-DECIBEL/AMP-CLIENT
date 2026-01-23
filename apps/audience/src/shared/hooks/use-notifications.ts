import { useQuery } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  NOTIFICATIONS_QUERY_OPTIONS,
  patchNotificationsRead,
} from '@features/notifications/query';

import { USERS_QUERY_KEY } from '@shared/constants/query-key';

export default () => {
  return useQuery(NOTIFICATIONS_QUERY_OPTIONS.NOTIFICATIONS());
};

export const useNotificationReadMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (notificationId: number) =>
      patchNotificationsRead(notificationId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [USERS_QUERY_KEY.NOTIFICATIONS],
      });
    },
  });
};
