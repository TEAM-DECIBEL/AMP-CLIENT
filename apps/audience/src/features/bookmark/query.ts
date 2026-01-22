import { useMutation, useQueryClient } from '@tanstack/react-query';

import { post } from '@amp/apis';

import { END_POINT } from '@shared/constants/end-point';
import { USERS_QUERY_KEY } from '@shared/constants/query-key';

interface PostNoticeBookmarkRequest {
  isBookmarked: true;
}

export const postNoticeBookmark = (noticeId: number) =>
  post<void, PostNoticeBookmarkRequest>(
    END_POINT.POST_NOTICE_BOOKMARK(noticeId),
    { isBookmarked: true },
  );

export const useNoticeBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (noticeId: number) => postNoticeBookmark(noticeId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: USERS_QUERY_KEY.BOOKMARKS.NOTICES(),
      });
    },
  });
};
