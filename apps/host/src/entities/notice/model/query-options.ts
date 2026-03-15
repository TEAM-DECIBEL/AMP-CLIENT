import { queryOptions } from '@tanstack/react-query';

import { getNoticeDetail } from '@entities/notice/api/notice';

import { ORGANIZERS_QUERY_KEY } from '@shared/constants/query-key';

export const NOTICE_QUERY_OPTIONS = {
  DETAIL: (noticeId: number | null) => {
    const normalizedNoticeId = noticeId ?? Number.NaN;

    return queryOptions({
      queryKey: ORGANIZERS_QUERY_KEY.NOTICE_DETAIL(normalizedNoticeId),
      queryFn: () => getNoticeDetail(normalizedNoticeId),
      enabled: Number.isFinite(normalizedNoticeId),
    });
  },
} as const;
