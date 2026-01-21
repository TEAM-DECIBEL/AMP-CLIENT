export const USERS_QUERY_KEY = {
  ALL: ['users'],

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
} as const;
