export const USERS_QUERY_KEY = {
  ALL: ['users'],
  FESTIVAL_NOTICES: (festivalId: number) => [
    ...USERS_QUERY_KEY.ALL,
    'festival-notices',
    festivalId,
  ],
  FESTIVAL_NOTICE_DETAIL: (noticeId: number | string) => [
    ...USERS_QUERY_KEY.ALL,
    'festival-notice-detail',
    noticeId,
  ],
} as const;
