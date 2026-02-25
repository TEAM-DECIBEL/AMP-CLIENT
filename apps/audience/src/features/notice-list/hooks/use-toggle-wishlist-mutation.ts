import { useMutation, useQueryClient } from '@tanstack/react-query';

import { toast } from '@amp/ads-ui';

import { HOME_QUERY_OPTIONS } from '@features/home/apis/query';
import { NOTICES_QUERY_OPTIONS } from '@features/notice-list/apis/query';

import { putWishList } from '@shared/apis/festival';
import type { FestivalNoticeBanner } from '@shared/types/notice-response';

export const useToggleWishListMutation = (
  festivalId: number,
  isWishlist: boolean,
) => {
  const queryClient = useQueryClient();

  const queryKey = NOTICES_QUERY_OPTIONS.BANNER(festivalId).queryKey;

  const { mutate, isPending } = useMutation({
    mutationFn: (newWishList: boolean) =>
      putWishList(festivalId, { wishList: newWishList }),

    onMutate: async (newWishList) => {
      await queryClient.cancelQueries({ queryKey });

      const previousData = queryClient.getQueryData(queryKey);

      queryClient.setQueryData<FestivalNoticeBanner>(queryKey, (oldData) => {
        if (!oldData) {
          return oldData;
        }

        return {
          ...oldData,
          isWishlist: newWishList,
        };
      });

      return { previousData };
    },

    onError: (_err, _newWishList, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(queryKey, context.previousData);
      }
      toast.show('관람 예정 설정에 실패했어요.');
    },

    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey,
      });
      await queryClient.invalidateQueries({
        queryKey: HOME_QUERY_OPTIONS.ALL_FESTIVALS().queryKey,
      });
      await queryClient.invalidateQueries({
        queryKey: HOME_QUERY_OPTIONS.PLANNED_FESTIVALS().queryKey,
      });
    },
  });

  return {
    toggleWishList: () => mutate(!isWishlist),
    isTogglePending: isPending,
  };
};
