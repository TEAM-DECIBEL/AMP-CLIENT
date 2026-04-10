import { useMutation, useQueryClient } from '@tanstack/react-query';

import { putFestival } from '@entities/event-edit/api/event-edit';

import { ORGANIZERS_QUERY_KEY } from '@shared/constants/query-key';

export const useFestivalUpdateMutation = (festivalId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ORGANIZERS_QUERY_KEY.FESTIVAL_UPDATE(festivalId),
    mutationFn: (formData: FormData) => putFestival(festivalId, formData),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ORGANIZERS_QUERY_KEY.FESTIVAL_DETAIL(festivalId),
      });
    },
  });
};
