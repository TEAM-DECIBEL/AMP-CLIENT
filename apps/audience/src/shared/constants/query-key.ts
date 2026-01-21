export const USERS_QUERY_KEY = {
  ALL: ['users'],
  HOME_FESTIVALS: () => [...USERS_QUERY_KEY.ALL, 'home-festivals'],
  SAVED_NOTICES: () => [...USERS_QUERY_KEY.ALL, 'saved-notices'],
} as const;
