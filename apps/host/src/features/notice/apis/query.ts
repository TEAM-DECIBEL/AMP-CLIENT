import { queryOptions } from '@tanstack/react-query';

import { get, post } from '@amp/apis';

import { END_POINT } from '@shared/constants/end-point';
import { ORGANIZERS_QUERY_KEY } from '@shared/constants/query-key';
import type {
  CreateNoticeBody,
  CreateNoticeResponse,
  NoticeDetail,
} from '@shared/types/notice';

export const postFestivalNotice = (
  festivalId: number,
  body: CreateNoticeBody,
) => {
  const formData = new FormData();
  formData.append('title', body.title);
  formData.append('categoryId', String(body.categoryId));
  formData.append('content', body.content);
  formData.append('isPinned', String(body.isPinned));
  if (body.image) {
    formData.append('image', body.image);
  }

  return post<CreateNoticeResponse, FormData>(
    END_POINT.POST_FESTIVAL_NOTICE(festivalId),
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
};

export const getNoticeDetail = (noticeId: number) =>
  get<NoticeDetail>(END_POINT.GET_NOTICE_DETAIL(noticeId));

export const NOTICE_QUERY_OPTIONS = {
  DETAIL: (noticeId: number) =>
    queryOptions({
      queryKey: ORGANIZERS_QUERY_KEY.NOTICE_DETAIL(noticeId),
      queryFn: () => getNoticeDetail(noticeId),
    }),
} as const;
