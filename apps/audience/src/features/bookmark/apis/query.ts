import { post } from '@amp/apis';

import { END_POINT } from '@shared/constants/end-point';

interface PostNoticeBookmarkRequest {
  isBookmarked: boolean;
}

export const postNoticeBookmark = (noticeId: number, isBookmarked: boolean) =>
  post<void, PostNoticeBookmarkRequest>(
    END_POINT.POST_NOTICE_BOOKMARK(noticeId),
    { isBookmarked },
  );
