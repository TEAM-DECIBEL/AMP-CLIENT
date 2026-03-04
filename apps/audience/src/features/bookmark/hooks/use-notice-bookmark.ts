import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postNoticeBookmark } from '@features/bookmark/apis/query';

import { USERS_QUERY_KEY } from '@shared/constants/query-key';

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
      queryClient.invalidateQueries({
        queryKey: USERS_QUERY_KEY.BOOKMARKS.NOTICES(),
      });
      queryClient.invalidateQueries({
        queryKey: USERS_QUERY_KEY.FESTIVAL_NOTICE_DETAIL(variables.noticeId),
      });
    },
  });
};
