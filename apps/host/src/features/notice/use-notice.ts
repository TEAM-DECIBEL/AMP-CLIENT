import { useMutation } from '@tanstack/react-query';

import {
  deleteNotice,
  postFestivalNotice,
  putNotice,
} from '@entities/notice/api/notice';
import type {
  CreateNoticeBody,
  UpdateNoticeBody,
} from '@entities/notice/types/notice';

import { ORGANIZERS_QUERY_KEY } from '@shared/constants/query-key';

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

export const useNoticeDeleteMutation = (noticeId: number) => {
  return useMutation({
    mutationKey: ORGANIZERS_QUERY_KEY.NOTICE_DELETE(noticeId),
    mutationFn: () => deleteNotice(noticeId),
  });
};
