export const USERS_QUERY_KEY = {
  ALL: ['users'],
  FESTIVAL_NOTICES: (eventId: number) => [
    ...USERS_QUERY_KEY.ALL,
    'festival-notices',
    eventId,
  ],
} as const;
