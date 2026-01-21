export const USERS_QUERY_KEY = {
  ALL: ['users'],
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
