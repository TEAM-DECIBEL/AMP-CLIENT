import { useMutation, useQueryClient } from '@tanstack/react-query';

import { post } from '@amp/apis';

import { END_POINT } from '@shared/constants/end-point';
import { USERS_QUERY_KEY } from '@shared/constants/query-key';

interface PostNoticeBookmarkRequest {
  isBookmarked: boolean;
}

export const postNoticeBookmark = (noticeId: number, isBookmarked: boolean) =>
  post<void, PostNoticeBookmarkRequest>(
    END_POINT.POST_NOTICE_BOOKMARK(noticeId),
    { isBookmarked },
  );

type NoticeBookmarkVariables = {
  noticeId: number;
  isBookmarked: boolean;
};

export const useNoticeBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ noticeId, isBookmarked }: NoticeBookmarkVariables) =>
      postNoticeBookmark(noticeId, isBookmarked),

    onSuccess: (_, variables) => {
      // 북마크 목록 갱신
      queryClient.invalidateQueries({
        queryKey: USERS_QUERY_KEY.BOOKMARKS.NOTICES(),
      });

      // 공지 상세 갱신 (isSaved 반영)
      queryClient.invalidateQueries({
        queryKey: USERS_QUERY_KEY.FESTIVAL_NOTICE_DETAIL(variables.noticeId),
      });
    },
  });
};
