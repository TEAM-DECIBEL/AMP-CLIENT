import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { toast } from '@amp/ads-ui';

import { NOTICES_QUERY_OPTIONS } from '@features/notice-list/apis/query';

import { putWishList } from '@shared/apis/festival';
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
    /**
     * TODO: 인증 및 라우팅 정책 분리
     * 추후 전역 인증 로직이 구축되면 아래 로직(accessToken 체크 및 navigate)을 제거하고, 해당 레퍼 함수도 제거하는 방향으로 리팩토링
     */
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
