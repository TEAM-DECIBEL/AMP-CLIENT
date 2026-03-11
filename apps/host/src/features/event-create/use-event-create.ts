import { useMutation } from '@tanstack/react-query';

import { postFestival } from '@features/event-create/apis/query';

import { ORGANIZERS_QUERY_KEY } from '@shared/constants/query-key';

export const useEventCreateMutation = () => {
  return useMutation({
    mutationKey: ORGANIZERS_QUERY_KEY.FESTIVAL_CREATE(),
    mutationFn: (formData: FormData) => postFestival(formData),
  });
};
