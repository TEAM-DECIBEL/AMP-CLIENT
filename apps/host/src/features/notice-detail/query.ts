import { queryOptions } from '@tanstack/react-query';

import { get } from '@amp/apis';

import { END_POINT } from '@shared/constants/end-point';
import { ORGANIZERS_QUERY_KEY } from '@shared/constants/query-key';
import type { NoticeDetailResponse } from '@shared/types/notice-detail-response';

export const getFestivalNoticeDetail = (noticeId: number) =>
  get<NoticeDetailResponse>(END_POINT.GET_FESTIVAL_NOTICE_DETAIL(noticeId));

export const NOTICE_DETAIL_QUERY_OPTIONS = {
  DETAIL: (noticeId: number) =>
    queryOptions({
      queryKey: ORGANIZERS_QUERY_KEY.FESTIVAL_NOTICE_DETAIL(noticeId),
      queryFn: () => getFestivalNoticeDetail(noticeId),
      enabled: Number.isFinite(noticeId),
    }),
} as const;
