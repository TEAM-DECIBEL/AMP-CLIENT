export const ORGANIZERS_QUERY_KEY = {
  ALL: ['organizers'],
  HOME_FESTIVALS: () => [...ORGANIZERS_QUERY_KEY.ALL, 'home-festivals'],
  NOTICE_DETAIL: (noticeId: number) => [
    ...ORGANIZERS_QUERY_KEY.ALL,
    'notice',
    noticeId,
  ],
  NOTICE_UPDATE: (noticeId: number) => [
    ...ORGANIZERS_QUERY_KEY.ALL,
    'notice',
    noticeId,
    'update',
  ],
  NOTICE_CREATE: (festivalId: number) => [
    ...ORGANIZERS_QUERY_KEY.ALL,
    'festival',
    festivalId,
    'notice-create',
  ],
} as const;
