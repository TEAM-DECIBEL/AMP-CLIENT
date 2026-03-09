import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postNoticeBookmark } from '@features/bookmark/apis/query';
import { NOTICE_DETAIL_QUERY_OPTIONS } from '@features/notice-details/query';

import { USERS_QUERY_KEY } from '@shared/constants/query-key';
import { NoticeDetailResponse } from '@shared/types/notice-response';

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
        const { queryKey: detailQueryKey } =
          NOTICE_DETAIL_QUERY_OPTIONS.DETAIL(noticeId);

        await queryClient.cancelQueries({ queryKey: detailQueryKey });

        const previousDetail =
          queryClient.getQueryData<NoticeDetailResponse>(detailQueryKey);

        if (previousDetail) {
          queryClient.setQueryData<NoticeDetailResponse>(
            detailQueryKey,
            (old) => {
              if (!old) {
                return previousDetail;
              }
              return {
                ...old,
                isSaved: isBookmarked,
              };
            },
          );
        }

        return { previousDetail, detailQueryKey };
      },

      onError: (_err, _variables, context) => {
        if (context?.previousDetail && context?.detailQueryKey) {
          queryClient.setQueryData(
            context.detailQueryKey,
            context.previousDetail,
          );
        }
      },

      onSettled: (_data, _err, _variables, context) => {
        if (context?.detailQueryKey) {
          queryClient.invalidateQueries({
            queryKey: context.detailQueryKey,
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
