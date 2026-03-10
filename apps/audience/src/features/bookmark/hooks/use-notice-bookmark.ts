import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postNoticeBookmark } from '@entities/notice/api/notice';

import { USERS_QUERY_KEY } from '@shared/constants/query-key';
import type { NoticeDetailResponse } from '@shared/types/notice-response';

interface NoticeBookmarkVariables {
  noticeId: number;
  isSaved: boolean;
}

export const useNoticeBookmark = () => {
  const queryClient = useQueryClient();

  const { mutate: toggleNoticeBookmark, isPending: isBookmarkPending } =
    useMutation({
      mutationFn: ({ noticeId, isSaved }: NoticeBookmarkVariables) =>
        postNoticeBookmark(noticeId, isSaved),

      onMutate: async ({ noticeId, isSaved }) => {
        const queryKey = USERS_QUERY_KEY.FESTIVAL_NOTICE_DETAIL(noticeId);

        await queryClient.cancelQueries({ queryKey });

        const previousDetail =
          queryClient.getQueryData<NoticeDetailResponse>(queryKey);

        if (previousDetail) {
          queryClient.setQueryData<NoticeDetailResponse>(queryKey, (old) =>
            old ? { ...old, isSaved: isSaved } : old,
          );
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
