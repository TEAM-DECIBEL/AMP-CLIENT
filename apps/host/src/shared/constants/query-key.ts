export const ORGANIZERS_QUERY_KEY = {
  ALL: ['organizers'],
  HOME_FESTIVALS: () => [...ORGANIZERS_QUERY_KEY.ALL, 'home-festivals'],

  FESTIVAL_CONGESTION: (eventId: number) => [
    ...ORGANIZERS_QUERY_KEY.ALL,
    'festival',
    eventId,
    'congestion',
  ],
  MY_PAGE: () => [...ORGANIZERS_QUERY_KEY.ALL, 'my-page'],
  MY_FESTIVALS_ALL: () => [...ORGANIZERS_QUERY_KEY.ALL, 'my-festivals-all'],
  FESTIVAL_NOTICE_DETAIL: (noticeId: number | string) => [
    ...ORGANIZERS_QUERY_KEY.ALL,
    'festival-notice-detail',
    noticeId,
  ],
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
  FESTIVAL_NOTICES: (festivalId: number) => [
    ...ORGANIZERS_QUERY_KEY.ALL,
    'festival',
    festivalId,
    'notices',
  ],
} as const;
