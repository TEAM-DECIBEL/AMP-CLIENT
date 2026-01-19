import { queryOptions } from '@tanstack/react-query';

import { instance } from '@amp/apis';

import { END_POINT } from '@shared/constants/end-point';
import { ORGANIZERS_QUERY_KEY } from '@shared/constants/query-key';

export const HOME_QUERY_OPTIONS = {
  FESTIVALS: () =>
    queryOptions({
      queryKey: ORGANIZERS_QUERY_KEY.HOME_FESTIVALS(),
      queryFn: getHomeFestivals,
    }),
} as const;

export const getHomeFestivals = async () => {
  const { data } = await instance.get(END_POINT.GET_HOME_FESTIVALS);
  return data;
};
