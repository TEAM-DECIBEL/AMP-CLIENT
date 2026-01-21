export const USERS_QUERY_KEY = {
  ALL: ['users'],
  FESTIVAL_CONGESTION: (eventId: number) => [
    ...USERS_QUERY_KEY.ALL,
    'festival',
    eventId,
    'congestion',
  ],
} as const;
