import { del, get, post, put } from '@amp/apis';

import type {
  CreateNoticeBody,
  CreateNoticeResponse,
  NoticeDetail,
  UpdateNoticeBody,
  UpdateNoticeResponse,
} from '@entities/notice/types/notice';

import { END_POINT } from '@shared/constants/end-point';

export const postFestivalNotice = (
  festivalId: number,
  body: CreateNoticeBody,
) => {
  const formData = new FormData();

  const noticeCreateRequest = {
    title: body.title,
    categoryId: body.categoryId,
    content: body.content,
    isPinned: body.isPinned,
  };

  formData.append(
    'noticeCreateRequest',
    new Blob([JSON.stringify(noticeCreateRequest)], {
      type: 'application/json',
    }),
  );

  if (body.image) {
    formData.append('images', body.image);
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
    new Blob([JSON.stringify(noticeUpdateRequest)], {
      type: 'application/json',
    }),
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
