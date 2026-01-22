import { useMutation } from '@tanstack/react-query';
import { NotificationSubscribeBody } from 'node_modules/@amp/shared/src/types/notice';

import { postNotificationsSubscribe } from '@features/notice-list/apis/query';

type SubscribeVars = {
  festivalId: number;
  categoryCode: string;
  body: NotificationSubscribeBody;
};

export const useNotificationsSubscribeMutation = () => {
  return useMutation({
    mutationFn: ({ festivalId, categoryCode, body }: SubscribeVars) =>
      postNotificationsSubscribe(festivalId, categoryCode, body),
  });
};