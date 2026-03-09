import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postNoticeBookmark } from '@entities/notice/api/notice';

import { USERS_QUERY_KEY } from '@shared/constants/query-key';
import type { NoticeDetailResponse } from '@shared/types/notice-response';

interface NoticeBookmarkVariables {
  noticeId: number;
  isBookmarked: boolean;
}

export const useNoticeBookmark = () => {
  const queryClient = useQueryClient();

  const { mutate: toggleNoticeBookmark, isPending: isBookmarkPending } =
    useMutation({
      mutationFn: ({ noticeId, isBookmarked }: NoticeBookmarkVariables) =>
        postNoticeBookmark(noticeId, isBookmarked),

      onMutate: async ({ noticeId, isBookmarked }) => {
        const queryKey = USERS_QUERY_KEY.FESTIVAL_NOTICE_DETAIL(noticeId);

        await queryClient.cancelQueries({ queryKey });

        const previousDetail =
          queryClient.getQueryData<NoticeDetailResponse>(queryKey);

        if (previousDetail) {
          queryClient.setQueryData<NoticeDetailResponse>(queryKey, (old) => {
            if (!old) {
              return previousDetail;
            }
            return {
              ...old,
              isSaved: isBookmarked,
            };
          });
        }

        return { previousDetail, queryKey };
      },

      onError: (_err, _variables, context) => {
        if (context?.previousDetail && context?.queryKey) {
          queryClient.setQueryData(context.queryKey, context.previousDetail);
        }
      },

      onSettled: (_data, _err, _variables, context) => {
        if (context?.queryKey) {
          queryClient.invalidateQueries({
            queryKey: context.queryKey,
          });
        }

        queryClient.invalidateQueries({
          queryKey: USERS_QUERY_KEY.BOOKMARKS.NOTICES(),
        });
      },
    });

  return {
    toggleNoticeBookmark,
    isBookmarkPending,
  };
};
