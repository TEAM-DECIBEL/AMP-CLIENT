import { useMutation } from '@tanstack/react-query';

import { postFestivalNotice, putNotice } from '@features/notice/apis/query';

import { ORGANIZERS_QUERY_KEY } from '@shared/constants/query-key';
import type { CreateNoticeBody, UpdateNoticeBody } from '@shared/types/notice';

export const useNoticeCreateMutation = (festivalId: number) => {
  return useMutation({
    mutationKey: ORGANIZERS_QUERY_KEY.NOTICE_CREATE(festivalId),
    mutationFn: (body: CreateNoticeBody) =>
      postFestivalNotice(festivalId, body),
  });
};

export const useNoticeUpdateMutation = (noticeId: number) => {
  return useMutation({
    mutationKey: ORGANIZERS_QUERY_KEY.NOTICE_UPDATE(noticeId),
    mutationFn: (body: UpdateNoticeBody) => putNotice(noticeId, body),
  });
};
