import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { toast } from '@amp/ads-ui';

import { putWishList } from '@features/home/apis/query';
import { NOTICES_QUERY_OPTIONS } from '@features/notice-list/apis/query';

import { ROUTE_PATH } from '@shared/constants/path';
import type { FestivalNoticeBanner } from '@shared/types/notice-response';

export const useToggleWishListMutation = (
  festivalId: number,
  isWishlist: boolean,
) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const queryKey = NOTICES_QUERY_OPTIONS.BANNER(festivalId).queryKey;

  const wishListMutation = useMutation({
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

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey,
      });
    },
  });

  const handleWatchToggle = () => {
    const isAuthed = Boolean(localStorage.getItem('accessToken'));

    if (!isAuthed) {
      navigate(ROUTE_PATH.AUTH_REQUIRED);
      return;
    }

    if (!Number.isFinite(festivalId)) {
      toast.show('공연 정보를 불러오지 못했어요.');
      return;
    }

    if (wishListMutation.isPending) {
      return;
    }

    wishListMutation.mutate(!isWishlist);
  };

  return {
    handleWatchToggle,
  };
};
