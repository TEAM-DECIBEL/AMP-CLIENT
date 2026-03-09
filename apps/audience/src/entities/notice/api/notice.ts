import { get, post } from '@amp/apis';
import type { PageSizeParams } from '@amp/shared/types';

import { END_POINT } from '@shared/constants/end-point';
import { NotificationSubscribeBody } from '@shared/types/notice';
import type {
  FestivalNoticeBanner,
  FestivalNoticesResponseData,
} from '@shared/types/notice-response';

type RequestOptions = {
  signal?: AbortSignal;
};

export const getFestivalNotices = (
  eventId: number,
  params: PageSizeParams = {},
  options: RequestOptions = {},
) =>
  get<FestivalNoticesResponseData, PageSizeParams>(
    END_POINT.GET_FESTIVAL_NOTICES(eventId),
    params,
    options,
  );

export const getFestivalBanner = (festivalId: number) =>
  get<FestivalNoticeBanner>(END_POINT.GET_FESTIVAL_BANNER(festivalId));

export const postNotificationsSubscribe = (
  festivalId: number,
  categoryCode: string,
  body: NotificationSubscribeBody,
) => {
  return post<void>(
    END_POINT.POST_FESTIVAL_NOTIFICATIONS_SUBSCRIBE(festivalId, categoryCode),
    body,
  );
};

interface PostNoticeBookmarkRequest {
  isBookmarked: boolean;
}

export const postNoticeBookmark = (noticeId: number, isBookmarked: boolean) =>
  post<void, PostNoticeBookmarkRequest>(
    END_POINT.POST_NOTICE_BOOKMARK(noticeId),
    { isBookmarked },
  );
