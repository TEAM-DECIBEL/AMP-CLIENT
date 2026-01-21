import { queryOptions } from '@tanstack/react-query';

import type { SuccessResponse } from '@amp/apis';
import { instance } from '@amp/apis';

import { END_POINT } from '@shared/constants/end-point';
import { ORGANIZERS_QUERY_KEY } from '@shared/constants/query-key';
import type { HomeResponseData } from '@shared/types/home-response';

export const getHomeFestivals = async (
  params: {
    page?: number;
    size?: number;
  } = {},
): Promise<HomeResponseData | null> => {
  const { data } = await instance.get<SuccessResponse<HomeResponseData>>(
    END_POINT.GET_HOME_FESTIVALS,
    { params },
  );
  return data?.data ?? null;
};

export const HOME_QUERY_OPTIONS = {
  FESTIVALS: (params: { page?: number; size?: number } = {}) =>
    queryOptions({
      queryKey: [...ORGANIZERS_QUERY_KEY.HOME_FESTIVALS(), params],
      queryFn: () => getHomeFestivals(params),
    }),
} as const;
