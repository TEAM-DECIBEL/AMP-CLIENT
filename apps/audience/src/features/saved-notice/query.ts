import { queryOptions } from '@tanstack/react-query';

import { get } from '@amp/apis';
import type { PageSizeParams } from '@amp/shared/types';

import { END_POINT } from '@shared/constants/end-point';
import { USERS_QUERY_KEY } from '@shared/constants/query-key';
import { SavedNoticesResponseData } from '@shared/types/notice-response';

export const getSavedNotices = (params: PageSizeParams = {}) =>
  get<SavedNoticesResponseData, PageSizeParams>(
    END_POINT.GET_SAVED_NOTICES,
    params,
  );

export const SAVED_NOTICES_QUERY_OPTIONS = {
  LIST: (params: PageSizeParams = {}) =>
    queryOptions({
      queryKey: [...USERS_QUERY_KEY.SAVED_NOTICES(), params],
      queryFn: () => getSavedNotices(params),
    }),
} as const;
