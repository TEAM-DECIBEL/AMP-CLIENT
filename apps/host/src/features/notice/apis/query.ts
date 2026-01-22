import { post } from '@amp/apis';

import { END_POINT } from '@shared/constants/end-point';
import type {
  CreateNoticeBody,
  CreateNoticeResponse,
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
