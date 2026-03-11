import { queryOptions } from '@tanstack/react-query';

import { del, get, post, put } from '@amp/apis';

import { END_POINT } from '@shared/constants/end-point';
import { ORGANIZERS_QUERY_KEY } from '@shared/constants/query-key';
import type {
  CreateNoticeBody,
  CreateNoticeResponse,
  NoticeDetail,
  UpdateNoticeBody,
  UpdateNoticeResponse,
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
  );
};

export const putNotice = (noticeId: number, body: UpdateNoticeBody) => {
  const formData = new FormData();
  const noticeUpdateRequest = {
    festivalId: body.festivalId,
    title: body.title,
    categoryId: body.categoryId,
    content: body.content,
    isPinned: body.isPinned,
    ...(body.keepImageUrls && body.keepImageUrls.length > 0
      ? { keepImageUrls: body.keepImageUrls }
      : {}),
  };

  formData.append(
    'noticeUpdateRequest',
    JSON.stringify(noticeUpdateRequest),
  );
  body.newImages?.forEach((image) => {
    formData.append('newImages', image);
  });

  return put<UpdateNoticeResponse, FormData>(
    END_POINT.PUT_NOTICE(noticeId),
    formData,
  );
};

export const deleteNotice = (noticeId: number) =>
  del<void>(END_POINT.DELETE_NOTICE(noticeId));

export const getNoticeDetail = (noticeId: number) =>
  get<NoticeDetail>(END_POINT.GET_NOTICE_DETAIL(noticeId));

export const NOTICE_QUERY_OPTIONS = {
  DETAIL: (noticeId: number | null) => {
    const normalizedNoticeId = noticeId ?? Number.NaN;

    return queryOptions({
      queryKey: ORGANIZERS_QUERY_KEY.NOTICE_DETAIL(normalizedNoticeId),
      queryFn: () => getNoticeDetail(normalizedNoticeId),
      enabled: Number.isFinite(normalizedNoticeId),
    });
  },
} as const;
