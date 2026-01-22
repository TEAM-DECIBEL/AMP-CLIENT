import { useMutation } from '@tanstack/react-query';

import { postNotificationsSubscribe } from '@features/notice-list/apis/query';

import { NotificationSubscribeBody } from '@shared/types/notice';

interface SubscribeVars {
  festivalId: number;
  categoryCode: string;
  body: NotificationSubscribeBody;
}

export const useNotificationsSubscribeMutation = () => {
  return useMutation({
    mutationFn: ({ festivalId, categoryCode, body }: SubscribeVars) =>
      postNotificationsSubscribe(festivalId, categoryCode, body),
  });
};
