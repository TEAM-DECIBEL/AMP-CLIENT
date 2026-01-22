export const USERS_QUERY_KEY = {
  ALL: ['users'],

  FESTIVAL_CONGESTION: (eventId: number) => [
    ...USERS_QUERY_KEY.ALL,
    'festival',
    eventId,
    'congestion',
  ],

  HOME_FESTIVALS: () => [...USERS_QUERY_KEY.ALL, 'home-festivals'],

  FESTIVAL_NOTICE_DETAIL: (noticeId: number | string) => [
    ...USERS_QUERY_KEY.ALL,
    'festival-notice-detail',
    noticeId,
  ],

  FESTIVAL_NOTICES: (eventId: number) => [
    ...USERS_QUERY_KEY.ALL,
    'festival-notices',
    eventId,
  ],

  HOME_FESTIVALS_ALL: () => [...USERS_QUERY_KEY.ALL, 'home-festivals-all'],

  HOME_FESTIVALS_PLANNED: () => [
    ...USERS_QUERY_KEY.ALL,
    'home-festivals-planned',
  ],

  HOME_FESTIVAL_UPCOMING: () => [
    ...USERS_QUERY_KEY.ALL,
    'home-festivals-upcoming',
  ],

  BOOKMARKS: {
    ALL: () => [...USERS_QUERY_KEY.ALL, 'bookmarks'] as const,
    NOTICES: () => [...USERS_QUERY_KEY.ALL, 'bookmarks', 'notices'] as const,
  },

  MY_PAGE: () => [...USERS_QUERY_KEY.ALL, 'my-page'],

  SAVED_NOTICES: () => [...USERS_QUERY_KEY.ALL, 'saved-notices'],
} as const;
